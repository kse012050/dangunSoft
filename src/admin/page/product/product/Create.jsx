import React, { useLayoutEffect, useState } from 'react';
import SelectBox from '../../../components/SelectBox';
import { adminApi } from '../../../api/api';

export default function Create() {
    const [inputs, setInputs] = useState()
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

    return (
        <>
            <h2 onClick={()=>console.log(vendor)}>제품 정보</h2>   
            <form>
                <fieldset className="infoBox">
                    <ul>
                        <li className='full'>
                            <span>No.</span>
                            <div></div>
                        </li>
                        <li className='full'>
                            <span>벤더사명</span>
                            <div onClick={(e)=> e.preventDefault()}>
                                <SelectBox text={vendor?.text} value={vendor?.value} name='parent_category_id' setInputs={setInputs} placeholder='벤더사명을 선택하세요.'/>
                            </div>
                        </li>
                        <li className='full'>
                            <span>제품명</span>
                            <div>
                                <input type="text" />
                            </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </>
    );
}

