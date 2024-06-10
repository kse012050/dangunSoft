import React, { useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {styleIdx} from '../js/style.js';

export default function Root() {
    const location = useLocation().pathname;
    const navigate = useNavigate()
    let pageName = location === '/' ? false : location.slice(1).split('/');
    if(pageName){
        if(!isNaN(location.slice(1).split('/').at(-1))){
            pageName = pageName.filter((data)=>isNaN(data)).map((data, i)=> i ? data.replace(/^\w/, c => c.toUpperCase()) : data).join('') + 'DetailPage';
        }else{
            pageName = pageName.map((data, i)=> i ? data.replace(/^\w/, c => c.toUpperCase()) : data).join('') + 'Page'
        }
    }
    const adminToken = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');

    

    useEffect(()=>{
        adminToken || navigate('/admin')
    },[adminToken, navigate])

    useEffect(() => {
        return (
            document.querySelectorAll('[data-styleidx]').length ? styleIdx() : undefined
        )
    },[location])

    return (
        <div className='adminPage'>
            <Header />
            <div>
                <Menu />
                <div className={pageName}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

