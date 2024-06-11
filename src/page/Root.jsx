import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {styleIdx} from '../js/style.js';
import Header from '../components/Header'
import Footer from '../components/Footer.jsx';
import '../css/import.css';

export default function Root() {
    const location = useLocation().pathname.slice(1).split('/');
    let className = !location[0] ? 
                            'main' : 
                            (isNaN(Number(location.at(-1))) ? location.at(-1) : `${location.at(-2)}Detail`)
    className === 'support' && (className = 'board')

    useEffect(()=>{
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

