import React, { useCallback, useLayoutEffect, useState } from 'react';
import { adminApi } from '../api/api';
import { inputChange } from '../api/validation';
import Popup from '../components/popup/Popup';

export default function MyInfo() {
    const [inputs, setInputs] = useState();
    const [popup, setPopup] = useState()

    const reset = useCallback(()=>{
        adminApi('profile')
            .then((result)=>{
                // console.log(result.data);
                if(result.result){
                    setInputs({
                        id: result.data.id || 'admin',
                        name: result.data.name,
                        branch_department: result.data.branch_department,
                        contact_information: result.data.contact_information,
                        email: result.data.email,
                        password: result.data.password
                    })
                }
            })
    },[])

    useLayoutEffect(()=>{
        reset()
    },[reset])

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        // if(isSubmit(inputs)){
        //     return;
        // }
        // console.log('완료');
        // console.log(inputs);
        adminApi('profile/update', '', inputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setPopup({
                        type: 'confirm',
                        title: '알림',
                        description: ['변경된 정보가 저장되었습니다.'],
                        func: () =>{
                            reset()
                        }
                    })
                   
                }
            })
    }

    return (
        <>
            <h2>내 정보 관리</h2>
            <form onChange={(e)=>inputChange(e, setInputs)}>
                <fieldset className='myInfoArea'>
                    <ul>
                        <li>
                            <label htmlFor="">ID</label>
                            <div>
                                <input type="text" value={inputs?.id || ''} onChange={(e)=>inputChange(e, setInputs)} readOnly/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="name">이름</label>
                            <div>
                                <input type="text" id='name' name='name' value={inputs?.name || ''} onChange={(e)=>inputChange(e, setInputs)} required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="branch_department">지사/부서</label>
                            <div>
                                <input type="text" id='branch_department' name='branch_department' value={inputs?.branch_department || ''} onChange={(e)=>inputChange(e, setInputs)} required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="contact_information">연락처(내선)</label>
                            <div>
                                <input type="text" id='contact_information' name='contact_information' value={inputs?.contact_information || ''} onChange={(e)=>inputChange(e, setInputs)} required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="email">이메일</label>
                            <div>
                                <input type="text" id='email' name='email' value={inputs?.email || ''} onChange={(e)=>inputChange(e, setInputs)} required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="password">비번</label>
                            <div>
                                <input type="password" id='password' name='password' value={inputs?.password || ''} onChange={(e)=>inputChange(e, setInputs)} autoComplete="off"/>
                            </div>
                        </li>
                    </ul>
                    <input type="submit" value="저장" className="btn-point" onClick={onSubmit}/>
                </fieldset>
            </form>

            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

