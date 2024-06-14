import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { adminApi } from '../api/api';

export default function Header() {
    const navigate = useNavigate()
    const onLogout = () =>{
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
    return (
        <header>
            <h1><Link to='/admin/dashboard' className='logo'>단군 소프트 </Link></h1>
            <div>
                <button className='btn-point' onClick={onLogout}>로그아웃</button>
            </div>
        </header>
    );
}

