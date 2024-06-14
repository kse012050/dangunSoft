import React, { useEffect, useState } from 'react';
import { inputChange, inputsRequiredAdd } from '../../../../api/validation';
import { adminApi, isSubmit } from '../../../../api/api';

export default function Account({ popup, setPopup, close }) {
    const [inputs, setInputs] = useState()

    useEffect(()=>{
        console.log(popup.data);
        if(!popup.data){
            inputsRequiredAdd(setInputs);
        }else{
            setInputs({
                admin_id: popup.data.admin_id,
                name: popup.data.name,
                branch_department: popup.data.branch_department,
                contact_information: popup.data.contact_information,
                id: popup.data.id,
                password: popup.data.password,
                email: popup.data.email,
                etc_information: popup.data.etc_information,
            })
        }
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        if(isSubmit(inputs)){
            return;
        }

        if(!popup.data){
            adminApi('manage', 'insert', inputs)
                .then((result)=>{
                    // console.log(result);
                    setPopup(prev => ({
                        type: 'confirm',
                        title: '알림',
                        description: [
                            '해당 계정이 등록되었습니다.',
                            'ID/비밀번호를 공유하고 이용자는\n 내 정보 관리 메뉴에서 비밀번호를 수정하고 이용하도록 안내해주세요.'
                        ],
                        func: () =>{
                            prev.func()
                        }
                    }))
                })
        }else{
            adminApi('manage', 'update', inputs)
                .then((result)=>{
                    // console.log(result);
                    setPopup(prev => ({
                        type: 'confirm',
                        title: '알림',
                        description: [
                            '저장되었습니다.',
                        ],
                        func: () =>{
                            prev.func()
                        }
                    }))
                })
        }
    }
    return (
        <div onClick={(e)=> e.stopPropagation()}>
            { !popup.data ?
                <>
                    <strong>등록</strong>
                    <p>아래 정보를 입력하세요.</p>
                </> :
                <>
                    <strong>수정</strong>
                    <p>정보를 수정하고 저장하세요.</p>
                </>
            }
            <form onChange={(e)=>inputChange(e, setInputs)} onKeyDown={(e)=> e.key === 'Enter' && onSubmit(e)}>
                <fieldset>
                    <ul>
                        <li>
                            <div>
                                <input type="text" name='name' defaultValue={inputs?.name} placeholder='관리자이름을 입력하세요.' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='branch_department' defaultValue={inputs?.branch_department} placeholder='지사/부서를 입력하세요.' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='contact_information' defaultValue={inputs?.contact_information} placeholder='연락처(내선)을 입력하세요.' data-formet='numb' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='id' defaultValue={inputs?.id} placeholder='ID를 입력하세요.' required disabled={popup.data}/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="password" name='password' defaultValue={inputs?.password} placeholder='비밀번호를 입력하세요.' required  autoComplete="off"/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='email' defaultValue={inputs?.email} placeholder='이메일을 입력하세요.' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='etc_information' defaultValue={inputs?.etc_information} placeholder='기타 정보를 입력하세요.' required/>
                            </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
            <div className='buttonArea'>
                <button className="btn-point-border" type="button" onClick={close}>취소</button>
                <button className="btn-point" type="button" onClick={onSubmit}>
                    { !popup.data ?
                        '등록':
                        '저장'
                    }
                </button>
            </div>
            <button className='close' onClick={close}>닫기</button>
        </div>
    );
}

