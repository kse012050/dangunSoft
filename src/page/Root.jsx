import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {styleIdx} from '../js/style.js';
import Header from '../components/Header'

export default function Root() {
    const location = useLocation().pathname.slice(1) || 'main';

    useEffect(()=>{
        return(
            document.querySelectorAll('[data-styleidx]').length ? styleIdx() : undefined
        )
    },[location])

    return (
        <div className={`${location}Page`}>
            <Header />
            <Outlet />
        </div>
    );
}

