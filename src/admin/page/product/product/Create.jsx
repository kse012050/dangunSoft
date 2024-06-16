import React, { useLayoutEffect, useState } from 'react';
import SelectBox from '../../../components/SelectBox';
import { adminApi, isSubmit } from '../../../api/api';
import { inputChange } from '../../../api/validation';

export default function Create() {
    const [inputs, setInputs] = useState({vendor_id: ''})
    const [vendor, setVendor] = useState()

    useLayoutEffect(()=>{
        adminApi('vendor', '', {page: '1'/* , limit: '100' */, all_yn: 'n'})
            .then((result)=>{
                console.log(result);
                if(result.result){
                    setVendor({
                        text: result.list.map((data)=> data.vendor_name),
                        value: result.list.map((data)=> data.vendor_id),
                    })
                }
            })
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);

        if(!inputs.vendor_id){
            return
        }

        if(isSubmit(inputs)){
            return;
        }
       
        adminApi('product/manage', 'insert', inputs)
            .then((result)=>{
                console.log(result);
                if(result.result){
                    // setPopup({
                    //     type: 'confirm',
                    //     title: '알림',
                    //     description: id ? ['수정되었습니다.'] : ['등록되었습니다.'],
                    //     func: () =>{
                    //         navigate('/admin/support/qna')
                    //     }
                    // })
                }
            })
    }

    return (
        <>
            <h2 onClick={()=>console.log(vendor)}>제품 정보</h2>   
            <form onChange={(e)=>inputChange(e, setInputs)}>
                <fieldset className="inputBox">
                    <ul>
                        <li>
                            <label>No.</label>
                            <div></div>
                        </li>
                        <li>
                            <label>벤더사명</label>
                            <div onClick={(e)=> e.preventDefault()}>
                                <SelectBox text={vendor?.text} value={vendor?.value} name='vendor_id' setInputs={setInputs} placeholder='벤더사명을 선택하세요.'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor='product_name'>제품명</label>
                            <div>
                                <input type="text" name='product_name' id='product_name' required/>
                            </div>
                        </li>
                    </ul>
                    <div className='buttonArea'>
                        <input type="submit" className='btn-point' value='등록' onClick={onSubmit}/>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

