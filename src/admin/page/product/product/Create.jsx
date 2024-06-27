import React, { useLayoutEffect, useState } from 'react';
import SelectBox from '../../../components/SelectBox';
import { adminApi, isSubmit } from '../../../api/api';
import { inputChange } from '../../../api/validation';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '../../../components/popup/Popup';

export default function Create() {
    const { id } = useParams()
    const [inputs, setInputs] = useState({vendor_id: ''})
    const [detail, setDetail] = useState()
    const [vendor, setVendor] = useState()
    const [popup, setPopup] = useState()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        adminApi('vendor', '', {page: '1'/* , limit: '100' */, all_yn: 'n'})
            .then((result)=>{
                if(result.result){
                    setVendor({
                        text: result.list.map((data)=> data.vendor_name),
                        value: result.list.map((data)=> data.vendor_id),
                    })

                    if(result.list.length === 1){
                        setInputs(prev => ({...prev, vendor_id: result.list[0].vendor_id}))
                    }
                }
            })

        if(id){
            adminApi('product/detail', '', {product_id: id})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setInputs(prev => ({...prev, product_id: result.data.product_id, vendor_id: result.data.vendor_id, product_name: result.data.product_name}))
                        setDetail(result.data)
                    }
                })
        }
    },[id])

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        if(!inputs.vendor_id){
            return
        }

        if(isSubmit(inputs)){
            return;
        }

        const funcType = !id ? 'insert' : 'update';
    //    console.log(inputs);
        // adminApi('product/manage', funcType, inputs)
        //     .then((result)=>{
        //         // console.log(result);
        //         if(result.result){
        //             setPopup({
        //                 type: 'confirm',
        //                 title: '알림',
        //                 description: id ? ['수정되었습니다.'] : ['등록되었습니다.'],
        //                 func: () =>{
        //                     navigate('/admin/product/product')
        //                 }
        //             })
        //         }else{
        //             setPopup({
        //                 type: 'confirm',
        //                 title: '알림',
        //                 description: [result.error_message],
        //             })
        //         }
        //     })
    }

    return (
        <>
            <h2 onClick={()=>console.log(detail)}>제품 정보</h2>   
            <form onChange={(e)=>inputChange(e, setInputs)}>
                <fieldset className="inputBox">
                    <ul>
                        { id &&
                            <li>
                                <label>No.</label>
                                <div>{ id }</div>
                            </li>
                        }
                        <li>
                            <label>벤더사명</label>
                            <div onClick={(e)=> e.preventDefault()}>
                                <SelectBox text={vendor?.text} value={vendor?.value} name='vendor_id' firstText={vendor?.text.length === 1 && vendor?.text[0]} setInputs={setInputs} placeholder='벤더사명을 선택하세요.'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor='product_name'>제품명</label>
                            <div>
                                <input type="text" name='product_name' id='product_name' defaultValue={inputs?.product_name} required/>
                            </div>
                        </li>
                    </ul>
                    <div className='buttonArea'>
                        <input type="submit" className='btn-point' value={id ? '수정' : '등록'} onClick={onSubmit}/>
                    </div>
                </fieldset>
            </form>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

