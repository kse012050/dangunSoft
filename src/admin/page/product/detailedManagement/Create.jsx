import React, { useLayoutEffect, useState } from 'react';
import { inputChange } from '../../../api/validation';
import SelectBox from '../../../components/SelectBox';
import { adminApi, isSubmit } from '../../../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '../../../components/popup/Popup';

const standard = ['수량', '사용자', '작업자', '에이전트', '커미터']

const optionForm = {
    option_name: '',
    standard: standard[0],
    minimum_quantiry: '',
    payment_exposure_yn: 'y',
    estimate_exposure_yn: 'n',
    exposure_yn: 'y',
    option_price_list: [
        {
            price_type: '신규',
            vat_include_price: '',
            vat_exclude_price: '',
        },
        {
            price_type: '갱신',
            vat_include_price: '',
            vat_exclude_price: '',
        },
        {
            price_type: '업데이트',
            vat_include_price: '',
            vat_exclude_price: '',
        }
    ]
}
export default function Create() {
    const { id } = useParams()
    const [inputs, setInputs] = useState({vendor_id: '', product_name: ''})
    const [vendor, setVendor] = useState()
    const [product, setProduct] = useState()
    const [options, setOptions] = useState([{...optionForm}])
    const [popup, setPopup] = useState()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        adminApi('vendor', '', {all_yn: 'y'})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setVendor({
                        text: result.list.map((data)=>data.vendor_name),
                        value: result.list.map((data)=>data.vendor_id),
                    })
                    if(result.list.length === 1){
                        setInputs((prev)=>({...prev, vendor_id: result.list[0].vendor_id}))
                    }
                }
            })

        adminApi('product', '', {all_yn: 'y'})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setProduct({
                        text: result.list.map((data)=>data.product_name),
                        value: result.list.map((data)=>data.product_id),
                    })
                }
            })
    },[])

    const optionChange = (e, i) =>{
        e.stopPropagation()
        const { value, name, checked, type, dataset: { parents, formet, validation } } = e.target;

        if(formet === 'decimal'){
            if(!/^\d+(\.\d{1,2})?$/.test(value)){
                let decimal = value.replace(/[^0-9.]/g, '')
                if(decimal.includes('.')){
                    console.log(decimal);
                    decimal = decimal.split('.')
                    decimal = decimal[0] + '.' + decimal.slice(1).join('');
                    decimal = decimal.replace(/(\.\d{2})\d+/, '$1');
                }/* else{
                    decimal = decimal[0]
                } */
                
                const cur = e.target.selectionStart - 1;
                e.target.value = decimal
                e.target.setSelectionRange(cur, cur);
                return
            }
        }

        if(type === 'checkbox'){
            setOptions((prev)=> {
                const arr = [...prev]
                arr[i][name] = checked ? 'y': 'n'
                return arr
            })
        }else if(type === 'radio'){
            setOptions((prev)=> ({...prev, [name]: value}))
        }else{
            setOptions((prev)=> {
                const arr = [...prev]
                if(parents === undefined){
                    arr[i][name] = value
                }else{
                    arr[i].option_price_list[parents][name] = value
                }
                return arr
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(options);
        if(!inputs.vendor_id || !inputs.product_name){
            return
        }
        const isOptions = options.some((data)=>{
            return Object.entries(data).some(([key, value]) =>{
                if(!value){
                    return true
                }

                if(key === 'option_price_list'){
                    return Object.entries(value[0]).some(([key, value]) =>{
                        if(!value){
                            return true
                        }
                    })
                }
                return false;
            })
        })

        if(isOptions){
            return
        }

        const test = {...inputs, option_price_list: [...options]}

        adminApi('product/manage', 'insert', test)
            .then((result)=>{
                if(result.result){
                    setPopup({
                        type: 'confirm',
                        title: '알림',
                        description: id ? ['수정되었습니다.'] : ['등록되었습니다.'],
                        func: () =>{
                            navigate('/admin/product/detailManagement')
                        }
                    })
                }
            })

    }
    return (
        <>
            <h2>제품 상세 정보</h2>   
            <form onChange={(e)=>inputChange(e, setInputs)}>
                <fieldset className='inputBox'>
                    <ul>
                        <li>
                            <label htmlFor='title'>벤더사명</label>
                            <div>
                                { vendor &&
                                    <SelectBox text={vendor.text} value={vendor.value} name='vendor_id' firstText={vendor.text.length === 1 && vendor.text[0]} setInputs={setInputs} placeholder='벤더사명을 선택하세요.'/>
                                }
                            </div>
                        </li>
                        <li>
                            <label htmlFor='comment'>제품명</label>
                            <div>
                                {product &&
                                    <SelectBox text={product.text} value={product.value} name='product_name' setInputs={setInputs} placeholder='제품명을 선택하세요.'/>
                                }
                            </div>
                        </li>
                        { !!options.length && 
                            options.map((data, i)=>
                                <li className='optionArea' key={i} onChange={(e)=>optionChange(e, i)}>
                                    <label htmlFor="">옵션</label>
                                    <div>
                                        <div>
                                            <input type="checkbox" name='payment_exposure_yn' id='payment_exposure_yn' defaultChecked={data.payment_exposure_yn === 'y'}/>
                                            <label htmlFor="payment_exposure_yn">구매</label>
                                            <input type="checkbox" name='estimate_exposure_yn' id='estimate_exposure_yn'/>
                                            <label htmlFor="estimate_exposure_yn">견적</label>
                                        </div>
                                        <div>
                                            <input type="text" placeholder='옵션명을 입력하세요.' name='option_name' required/>
                                            <SelectBox text={standard} value={standard} name='standard' setOptions={setOptions} optionIdx={i}/>
                                            <input type="number" name='minimum_quantiry' min='0' required/>
                                        </div>
                                        <div>
                                            <p htmlFor="">신규</p>
                                            <label>VATを含まない</label>
                                            <input type="text" name='vat_include_price' data-parents='0' data-formet='decimal' required/>
                                            <label>VAT 込み価格</label>
                                            <input type="text" name='vat_exclude_price' data-parents='0' data-formet='decimal' required/>
                                        </div>
                                        <div>
                                            <p htmlFor="">갱신</p>
                                            <label>VATを含まない</label>
                                            <input type="text" name='vat_include_price' data-parents='1' data-formet='decimal'/>
                                            <label>VAT 込み価格</label>
                                            <input type="text" name='vat_exclude_price' data-parents='1' data-formet='decimal'/>
                                        </div>
                                        <div>
                                            <p htmlFor="">업데이트</p>
                                            <label>VATを含まない</label>
                                            <input type="text" name='vat_include_price' data-parents='2' data-formet='decimal'/>
                                            <label>VAT 込み価格</label>
                                            <input type="text" name='vat_exclude_price' data-parents='2' data-formet='decimal'/>
                                        </div>
                                    </div>
                                    <button className='btn-point-border' type='button'
                                        onClick={()=> options.length > 1 && setOptions((prev)=> prev.filter((_, j)=> i !== j))}
                                    >삭제</button>
                                </li>
                            )
                        }
                    </ul>
                    <button className='btn-point' type='button'
                        onClick={()=>setOptions(prev=>[...prev, {...optionForm}])}
                    >옵션 추가</button>
                    <div className='buttonArea'>
                        <input type="submit" className='btn-point' value='등록' onClick={onSubmit}/>
                    </div>
                </fieldset>
            </form>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

