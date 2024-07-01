import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {styleIdx} from '../js/style.js';
import Header from '../components/Header'
import Footer from '../components/Footer.jsx';
import '../css/import.css';
import { userPageLog } from '../api/api.js';

export default function Root() {
    const location = useLocation().pathname.slice(1).split('/');
    let className = !location[0] ? 
                            'main' : 
                            (isNaN(Number(location.at(-1))) ? location.at(-1) : `${location.at(-2)}Detail`)
    className === 'support' && (className = 'board')

    // 나중에 삭제
    if(className === 'board2'){
        className = 'board'
    }

    if(className === 'faq2'){
        className = 'faq'
    }
    // console.log(className);
    if(className === 'orderDetail'){
        className = 'buyDetail'
    }

    useEffect(()=>{
        userPageLog(location.join('/'), window.location.href, window.navigator.userAgent, document.referrer)
        return(
            document.querySelectorAll('[data-styleidx]').length ? styleIdx() : undefined
        )
    },[location])

    return (
        <div className={`userPage ${className}Page`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

