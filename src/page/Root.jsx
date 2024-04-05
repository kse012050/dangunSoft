import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header'

export default function Root() {
    const location = useLocation().pathname.slice(1) || 'main';
    return (
        <div className={`${location}Page`}>
            <Header />
            <Outlet />
        </div>
    );
}

