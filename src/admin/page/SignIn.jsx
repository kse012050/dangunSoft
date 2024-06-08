import React, { useEffect, useState } from 'react';
import '../css/import.css';
import { inputChange, inputsRequiredAdd } from '../api/validation';
import { adminApi, isSubmit } from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [inputs, setInputs] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        inputsRequiredAdd(setInputs);
    },[])

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
                    sessionStorage.setItem('adminToken', result.data.token);
                    navigate('/admin/dashboard')
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
                    </ul>
                    <button className="btn-point" type="button" onClick={onSubmit}>로그인</button>
                </form>
            </div>
        </div>
    );
}

