import React, { useEffect, useRef, useState } from 'react';
import '../css/import.css';
import { inputChange, inputsRequiredAdd } from '../api/validation';
import { adminApi, isSubmit } from '../api/api';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/popup/Popup';

export default function SignIn() {
    const [inputs, setInputs] = useState()
    const [popup, setPopup] = useState()
    const navigate = useNavigate()
    const rememberIDRef = useRef()
    const adminToken = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');

    useEffect(()=>{
        adminToken && navigate('/admin/statistics')
        inputsRequiredAdd(setInputs);
    },[adminToken, navigate])

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        if(isSubmit(inputs)){
            return;
        }
        
        adminApi('login', '', inputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    rememberIDRef.current.checked ? 
                        localStorage.setItem('adminToken', result.data.token) :
                        sessionStorage.setItem('adminToken', result.data.token);
                    navigate('/admin/statistics')
                }else{
                    setPopup({type: 'signIn'})
                }
            })
    }

    return (
        <div className="adminPage">
            <div className="page-body-wrapper">
                <form className="form-signin" id="adminInfo" onChange={(e)=>inputChange(e, setInputs)}>
                    <h2>단군 소프트</h2>
                    <ul>
                        <li><input type="text" name="id" id="id" placeholder="id" data-formet="id" required autoFocus /></li>
                        <li><input type="password" name="password" id="password" placeholder="password" required onKeyDown={(e)=> e.key === 'Enter' && onSubmit(e)} autoComplete="off"/></li>
                        <li><input type="checkbox" id='rememberID' ref={rememberIDRef}/><label htmlFor="rememberID">아이디 기억하기</label></li>
                    </ul>
                    <button className="btn-point" type="button" onClick={onSubmit} popovertarget="signIn">로그인</button>
                </form>
            </div>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </div>
    );
}

