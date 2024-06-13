import React, { useEffect, useState } from 'react';
import { inputChange, inputsRequiredAdd } from '../../api/validation';
import { adminApi, isSubmit } from '../../api/api';

export default function VendorCreate({ setPopup, close }) {
    const [inputs, setInputs] = useState()

    useEffect(()=>{
        inputsRequiredAdd(setInputs);
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        if(isSubmit(inputs)){
            return;
        }
        
        adminApi('vendor/manage', 'insert', inputs)
            .then((result)=>{
                console.log(result);
                if(result.result){
                    setPopup(prev => ({
                        type: 'confirm',
                        title: '알림',
                        description: ['저장되었습니다'],
                        func: ()=> {
                            prev.finFunc()
                            setPopup()
                        }
                    }))
                }
            })
    }

    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>등록</strong>
            <p>
                벤더사명을 입력하세요.
            </p>
            <input type="text" placeholder='벤더사명을 입력하세요.' name='vendor_name' onChange={(e)=>inputChange(e, setInputs)} onKeyDown={(e)=> e.key === 'Enter' && onSubmit(e)} required autoFocus/>
            <mark className='point'>
                해당 정보는 제품 등록을 위한 정보로<br/>
                웹사이트에 직접 반영되지 않습니다.
            </mark>
            <input type="submit" value='등록' className='btn-point' onClick={onSubmit}/>
            <button className='close' onClick={close}>닫기</button>
        </div>
    );
}

