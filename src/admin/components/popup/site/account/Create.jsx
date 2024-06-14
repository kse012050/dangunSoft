import React, { useEffect, useState } from 'react';
import { inputChange, inputsRequiredAdd } from '../../../../api/validation';
import { adminApi, isSubmit } from '../../../../api/api';

export default function Create({ popup, setPopup, close }) {
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
    }
    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>등록</strong>
            <p>아래 정보를 입력하세요</p>
            <form onChange={(e)=>inputChange(e, setInputs)} onKeyDown={(e)=> e.key === 'Enter' && onSubmit(e)}>
                <fieldset>
                    <ul>
                        <li>
                            <div>
                                <input type="text" name='name' placeholder='관리자이름을 입력하세요.' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='branch_department' placeholder='지사/부서를 입력하세요.' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='contact_information' placeholder='연락처(내선)을 입력하세요.' data-formet='numb' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='id' placeholder='ID를 입력하세요.' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="password" name='password' placeholder='비밀번호를 입력하세요.' required  autoComplete="off"/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='email' placeholder='이메일을 입력하세요.' required/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='etc_information' placeholder='기타 정보를 입력하세요.' required/>
                            </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
            <div className='buttonArea'>
                <button className="btn-point-border" type="button" onClick={close}>취소</button>
                <button className="btn-point" type="button" onClick={onSubmit}>등록</button>
            </div>
            <button className='close' onClick={close}>닫기</button>
        </div>
    );
}

