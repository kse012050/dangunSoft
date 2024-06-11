import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inputChange, inputsRequiredAdd } from '../../api/validation';
import { isSubmit, userApi } from '../../api/api';
import Popup from '../../components/popup/Popup';

export default function Inquiry() {
    const [inputs, setInputs] = useState({board_type: 'inquiry'})
    const [popup, setPopup] = useState()
    const secretPasswordRef = useRef()
    const navigate = useNavigate();

    useEffect(()=>{
        inputsRequiredAdd(setInputs);
    },[])

    const onReset = () => {
        Object.keys(inputs).forEach((key) => {
            setInputs(prev => ({...prev, [key]: ''}))
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        if(isSubmit(inputs)){
            return;
        }

        const copyInputs = {...inputs}
        copyInputs.write_name = `${inputs.write_name_last}/${inputs.write_name_first}`
        delete copyInputs.write_name_last;
        delete copyInputs.write_name_first;
        copyInputs.phonetic_guide = `${inputs.phonetic_guide_last}/${inputs.phonetic_guide_first}`
        delete copyInputs.phonetic_guide_last;
        delete copyInputs.phonetic_guide_first;
        copyInputs.contact_information = `+81 ${copyInputs.contact_information}`

        if(copyInputs.secret_yn && copyInputs.secret_yn === 'y' && !copyInputs.secret_password){
            secretPasswordRef.current.focus()
            return
        }
        // console.log(copyInputs);

        userApi('board/manage', 'insert', copyInputs)
            .then((result)=>{
                if(result.result){
                    sessionStorage.setItem('inquiryDetail', JSON.stringify(copyInputs));
                    navigate('/support/inquiryResult')
                }
            })

    }

    return (
        <>
            <section>
                <h2>お問い合わせ</h2>
                <p>お問い合わせの依頼です。</p>
                <form onChange={(e)=>inputChange(e, setInputs)}>
                    <fieldset className='inputBox'>
                        <ul>
                            <li>
                                <label htmlFor="write_name_last">名前(姓 / 名)</label>
                                <div>
                                    <input type="text" placeholder='姓' name='write_name_last' id='write_name_last' required/>
                                    <input type="text" placeholder='名' name='write_name_first' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="phonetic_guide_last">ふりがな</label>
                                <div>
                                    <input type="text" placeholder='姓' name='phonetic_guide_last' id='phonetic_guide_last' required/>
                                    <input type="text" placeholder='名' name='phonetic_guide_first' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="company_name">会社名</label>
                                <div>
                                    <input type="text" placeholder='企業名を入力してください' name='company_name' id='company_name'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="contact_information">電話番号</label>
                                <div>
                                    <input type="text" placeholder='電話番号を入力してください' name='contact_information' id='contact_information' data-formet='numb' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="email">Email</label>
                                <div>
                                    <input type="text" placeholder='メールアドレスを入力してください' name='email' id='email' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="title">タイトル</label>
                                <div>
                                    <input type="text" placeholder='タイトルを入力してください' name='title' id='title'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="comment">お問い合わせ</label>
                                <div>
                                    <textarea name="comment" id="comment" placeholder='内容'></textarea>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" name='meeting_request_yn' id='meeting_request_yn' required/>
                                <label htmlFor="meeting_request_yn">ミーティング要請</label>
                            </li>
                        </ul>
                        <div>
                            <input type="checkbox" name='secret_yn' id='secret_yn'/>
                            <label htmlFor="secret_yn">秘密文書</label>
                            <input type="password" placeholder='パスワードを入力してください' name='secret_password' ref={secretPasswordRef} autoComplete="off"/>
                        </div>
                    </fieldset>
                    <div className='submitBox'>
                        <input type="reset" className='btn-border-black' value='キャンセル' onClick={onReset}/>
                        <input type="submit" className='btn-bg' value='確認' onClick={onSubmit}/>
                    </div>
                </form>
            </section>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

