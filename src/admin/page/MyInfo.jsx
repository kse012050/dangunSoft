import React, { useLayoutEffect, useState } from 'react';
import { adminApi, isSubmit } from '../api/api';
import { inputChange } from '../api/validation';
import Popup from '../components/popup/Popup';
import { useNavigate } from 'react-router-dom';

export default function MyInfo() {
    const [inputs, setInputs] = useState();
    const [popup, setPopup] = useState()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        adminApi('profile')
            .then((result)=>{
                // console.log(result.data);
                if(result.result){
                    setInputs({
                        id: result.data.id || 'admin',
                        name: result.data.name,
                        branch_department: result.data.branch_department,
                        contact_Information: result.data.contact_Information,
                        email: result.data.email,
                        passwords: result.data.passwords
                    })
                }
            })
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        if(isSubmit(inputs)){
            return;
        }
        
        adminApi('profile/update', '', inputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setPopup({
                        type: 'confirm',
                        title: '알림',
                        description: ['변경된 정보가 저장되었습니다.'],
                        func: () =>{
                            adminApi('logout', '')
                                .then((result)=>{
                                    // console.log(result);
                                    if(result.result){
                                        sessionStorage.removeItem('adminToken')
                                        localStorage.removeItem('adminToken')
                                        navigate('/admin')
                                    }
                                })
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
                                <input type="text" defaultValue={inputs?.id} readOnly/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="name">이름</label>
                            <div>
                                <input type="text" id='name' name='name' defaultValue={inputs?.name}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="branch_department">지사/부서</label>
                            <div>
                                <input type="text" id='branch_department' name='branch_department' defaultValue={inputs?.branch_department}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="contact_Information">연락처(내선)</label>
                            <div>
                                <input type="text" id='contact_Information' name='contact_Information' defaultValue={inputs?.contact_Information} data-formet='numb' maxLength='11'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="email">이메일</label>
                            <div>
                                <input type="text" id='email' name='email' defaultValue={inputs?.email}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="password">비번</label>
                            <div>
                                <input type="password" id='password' name='password' defaultValue={inputs?.passwords} autoComplete="off"/>
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

