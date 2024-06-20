import React, { useEffect, useLayoutEffect, useState } from 'react';
import { inputChange } from '../../../api/validation';
import SelectBox from '../../../components/SelectBox';
import { adminApi } from '../../../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '../../../components/popup/Popup';

const standard = ['수량', '사용자', '작업자', '에이전트', '커미터']

const optionPriceList = [
    {
        price_type: '신규',
        vat_include_price: '',
        vat_exclude_price: '',
    }
]

const optionForm = {
    option_name: '',
    standard: standard[0],
    minimum_quantiry: '1',
    payment_exposure_yn: 'y',
    estimate_exposure_yn: 'y',
    exposure_yn: 'y',
    option_price_list: [...optionPriceList]
}
export default function Create() {
    const { id } = useParams()
    const [inputs, setInputs] = useState({vendor_id: '', product_name: ''})
    const [detail, setDetail] = useState()
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

        

        if(id){
            adminApi('product/detail', '', {product_id: id})
                .then((result)=>{
                    if(result.result){
                        setInputs(prev => ({...prev, product_id: result.data.product_id, vendor_id: result.data.vendor_id/* , product_name: result.data.product_name */}))
                        setDetail(result.data)
                    }
                })
        }
    },[id])

    useEffect(()=>{
        if(inputs.vendor_id){
            adminApi('product', '', {all_yn: 'y'})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setProduct({
                            text: result.list.filter((data)=> data.vendor_id === inputs.vendor_id && data.exposure_yn === 'y').map((data)=>data.product_name),
                            value: result.list.filter((data)=> data.vendor_id === inputs.vendor_id && data.exposure_yn === 'y').map((data)=>data.product_id),
                        })
                    }
                })
        }
    },[inputs.vendor_id])

    useEffect(()=>{
        if(inputs.product_id){
            adminApi('product/detail', '', {product_id: inputs.product_id})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        // setDetail(result.data)
                        let optionArr = [{...optionForm}]
                        if(!!result.data.optionList.length){
                            optionArr = result.data.optionList.map((data)=>{
                                const obj = {
                                    product_option_id: data.product_option_id,
                                    option_name: data.option_name,
                                    standard: data.standard,
                                    minimum_quantiry: data.minimum_quantiry,
                                    payment_exposure_yn: data.payment_exposure_yn,
                                    estimate_exposure_yn: data.estimate_exposure_yn,
                                    exposure_yn: data.exposure_yn,
                                }
                                
                                const priceArr = []
                                // console.log(data.optionPriceList);
                                for(let a = 0; a < 3; a++){
                                    if(data.optionPriceList[a]){
                                        priceArr.push({
                                            price_type: data.optionPriceList[a].price_type,
                                            vat_include_price: data.optionPriceList[a].vat_include_price,
                                            vat_exclude_price: data.optionPriceList[a].vat_exclude_price,
                                        })
                                    }else{
                                        priceArr.push({...optionPriceList[a]})
                                    }
                                }
                                return {...obj, option_price_list: [...priceArr]}
                            })
                        }
                        setOptions([...optionArr])
                        setInputs(prev => ({...prev, product_name: result.data.product_name}))
                    }
                })
        }
    },[inputs.product_id])

    const optionChange = (e, i) =>{
        e.stopPropagation()
        const { value, name, checked, type, dataset: { parents, formet } } = e.target;

        if(formet === 'decimal' && value){
            
            console.log(value);
            let decimal = value;
            let cur = e.target.selectionStart;
            // console.log('-------------------------');
            // console.log(cur);
            // console.log(value.includes(','));
            if(decimal.includes(',')){
                console.log(parseInt(cur / 3));
            }
            // cur += parseInt(cur / 4)
            decimal = decimal.replace(/[^0-9.]/g, '')
            // if(!/^\d+(\.\d{1,2})?$/.test(decimal)){
            //     cur = /[^0-9.]/.test(decimal) ? e.target.selectionStart - 1 : e.target.selectionStart;
            //     decimal = decimal.replace(/[^0-9.]/g, '')
            //     if(decimal.includes('.')){
            //         decimal = decimal.split('.')
            //         decimal = Number(decimal[0]).toLocaleString() + '.' + decimal.slice(1);
            //         decimal = decimal.replace(/(\.\d{2})\d+/, '$1');
            //     }

            //     // console.log(2);
                
            //     e.target.value = decimal
            //     // cur = cur + decimal.split(',').length - 1
            //     e.target.setSelectionRange(cur, cur);
            //     return
            // }

            if(decimal.includes('.')){
                decimal = decimal.split('.')
                decimal = Number(decimal[0])/* .toLocaleString() */ + '.' + decimal.slice(1);
                decimal = decimal.replace(/(\.\d{2})\d+/, '$1');
            }else{
                decimal = Number(decimal)/* .toLocaleString() */
                // cur = cur + 1
            }
            
            e.target.value = decimal
            // cur = cur + decimal.split(',').length - 1
            e.target.setSelectionRange(cur, cur);

            setOptions((prev)=> {
                const arr = [...prev]
                if(parents === undefined){
                    arr[i][name] = value
                }else{
                    arr[i].option_price_list[parents][name] = decimal
                }
                return arr
            })
            return
        }
        console.log('?');
        
        
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

    const optionListChange = (e, i)=>{
        e.stopPropagation()
        const { name, checked } = e.target
        // console.log(name);
        // console.log(checked);
        if(checked){
            setOptions((prev)=> {
                const arr = [...prev]
                // console.log(arr);
                // 함수는 한번 실행하는데 setOptions 가 두번 실행 됨 확인해야 함
                if(!arr[i].option_price_list.filter((data)=>data.price_type === name).length){
                    arr[i].option_price_list = [...arr[i].option_price_list, {
                        price_type: name,
                        vat_include_price: '',
                        vat_exclude_price: '',
                    }]
                }
                return arr
            })
        }else{
            setOptions((prev)=> {
                const arr = [...prev]
                arr[i].option_price_list = [...arr[i].option_price_list.filter((data)=> data.price_type !== name) ]
                return arr
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(inputs);
        // console.log(options);
        if(!inputs.vendor_id || !inputs.product_name){
            return
        }
        // console.log(1);
        const isOptions = options.some((data)=>{
            return Object.entries(data).some(([key, value]) =>{
                if(!value){
                    return true
                }

                if(key === 'option_price_list'){
                    return Object.entries(value[0]).some(([key, value]) =>{
                        if(!value){
                            return true
                        }else{
                            return false
                        }
                    })
                }
                return false;
            })
        })

        // console.log(isOptions);
        if(isOptions){
            return
        }
        // console.log(2);

        const test = {...inputs, option_list: [...options]}
        // console.log(test);
        // const funcType = !id ? 'insert' : 'update';

        adminApi('product/manage', 'update', test)
            .then((result)=>{
                // console.log(result);
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
                                    <SelectBox text={vendor.text} value={vendor.value} name='vendor_id' firstText={vendor.text.length === 1 ? vendor.text[0] : (detail?.vendor_name)} setInputs={setInputs} placeholder='벤더사명을 선택하세요.' disabled={id}/>
                                }
                            </div>
                        </li>
                        <li>
                            <label htmlFor='comment'>제품명</label>
                            <div>
                                {/* {product && */}
                                    <SelectBox text={product?.text} value={product?.value} name='product_id' firstText={detail?.product_name} setInputs={setInputs} placeholder='제품명을 선택하세요.' key={inputs.vendor_id} disabled={!product || id}/>
                                {/* } */}
                            </div>
                        </li>
                        { !!options.length && 
                            options.map((data, i)=>
                                <li className='optionArea' key={i} onChange={(e)=>optionChange(e, i)}>
                                    <label htmlFor="" onClick={()=>console.log(options)}>옵션</label>
                                    <div>
                                        <div>
                                            <input type="checkbox" name='payment_exposure_yn' id={`payment_exposure_yn${i}`} checked={data.payment_exposure_yn === 'y' || ''} onChange={(e)=>optionChange(e, i)}/>
                                            <label htmlFor={`payment_exposure_yn${i}`}>구매</label>
                                            <input type="checkbox" name='estimate_exposure_yn' id={`estimate_exposure_yn${i}`} checked={data.estimate_exposure_yn === 'y' || ''} onChange={(e)=>optionChange(e, i)}/>
                                            <label htmlFor={`estimate_exposure_yn${i}`}>견적</label>
                                        </div>
                                        <div>
                                            <input type="text" placeholder='옵션명을 입력하세요.' name='option_name' value={data.option_name} onChange={(e)=>optionChange(e, i)} required/>
                                            <SelectBox text={standard} value={standard} name='standard' setOptions={setOptions} firstText={data.standard} optionIdx={i} key={options.length}/>
                                            <input type="number" name='minimum_quantiry' min='0' value={data.minimum_quantiry} onChange={(e)=>optionChange(e, i)} required/>
                                        </div>
                                        <div>
                                            <p htmlFor="">신규</p>
                                            <label>기본가</label>
                                            <input type="text" name='vat_include_price' data-parents='0' data-formet='decimal' defaultValue={data.option_price_list?.[0].vat_include_price || ''} onChange={(e)=>optionChange(e, i)} required/>
                                            <label>VAT 포함가</label>
                                            <input type="text" name='vat_exclude_price' data-parents='0' data-formet='decimal' defaultValue={data.option_price_list?.[0].vat_exclude_price || ''} onChange={(e)=>optionChange(e, i)} required/>
                                        </div>
                                        <div>
                                            <input type="checkbox" id={`renewal_${i}`} name='갱신' checked={!!data.option_price_list.filter((data2)=>data2.price_type === '갱신').length} onChange={(e)=>optionListChange(e, i)}/>
                                            <label htmlFor={`renewal_${i}`}></label>
                                            <p htmlFor="">갱신</p>
                                            <label>기본가</label>
                                            <input type="text" name='vat_include_price' data-parents='1' data-formet='decimal' defaultValue={data.option_price_list?.[1] && (data.option_price_list[1].vat_include_price || '')} onChange={(e)=>optionChange(e, i)} disabled={!data.option_price_list.filter((data2)=>data2.price_type === '갱신').length}/>
                                            <label>VAT 포함가</label>
                                            <input type="text" name='vat_exclude_price' data-parents='1' data-formet='decimal' defaultValue={data.option_price_list?.[1] && (data.option_price_list[1].vat_exclude_price || '')} onChange={(e)=>optionChange(e, i)} disabled={!data.option_price_list.filter((data2)=>data2.price_type === '갱신').length}/>
                                        </div>
                                        <div>
                                            <input type="checkbox" id={`update_${i}`} name='업데이트' checked={!!data.option_price_list.filter((data2)=>data2.price_type === '업데이트').length} onChange={(e)=>optionListChange(e, i)}/>
                                            <label htmlFor={`update_${i}`}></label>
                                            <p htmlFor="">업데이트</p>
                                            <label>기본가</label>
                                            <input type="text" name='vat_include_price' data-parents='2' data-formet='decimal' defaultValue={data.option_price_list?.[2] && (data.option_price_list[2].vat_include_price || '')} onChange={(e)=>optionChange(e, i)} disabled={!data.option_price_list.filter((data2)=>data2.price_type === '업데이트').length}/>
                                            <label>VAT 포함가</label>
                                            <input type="text" name='vat_exclude_price' data-parents='2' data-formet='decimal' defaultValue={data.option_price_list?.[2] && (data.option_price_list[2].vat_exclude_price || '')} onChange={(e)=>optionChange(e, i)} disabled={!data.option_price_list.filter((data2)=>data2.price_type === '업데이트').length}/>
                                        </div>
                                    </div>
                                    { options.length > 1 &&
                                        <button className='btn-point-border' type='button'
                                            onClick={()=> options.length > 1 && setOptions((prev)=> prev.filter((_, j)=> i !== j))}
                                        >삭제</button>
                                    }
                                </li>
                            )
                        }
                    </ul>
                    <button className='btn-point' type='button'
                        onClick={()=>setOptions(prev=>{
                            console.log(optionForm);
                            return [...prev, {...optionForm, option_price_list : [{
                                price_type: '신규',
                                vat_include_price: '',
                                vat_exclude_price: '',
                            }]}]
                        })}
                    >옵션 추가</button>
                    <div className='buttonArea'>
                        <input type="submit" className='btn-point' value={id ? '수정' : '등록'} onClick={onSubmit}/>
                    </div>
                </fieldset>
            </form>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

