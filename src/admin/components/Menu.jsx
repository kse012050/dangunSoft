import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <ul className='menuArea'>
            <li><div><NavLink to=''>관리자 통계</NavLink></div></li>
            <li><div><NavLink to=''>상품 관리</NavLink></div></li>
            <li><div><NavLink to=''>견적 관리</NavLink></div></li>
            <li><div><NavLink to=''>구매 관리</NavLink></div></li>
            <li><div><NavLink to=''>관리 문의</NavLink></div></li>
            <li><div><NavLink to=''>지원 관리</NavLink></div></li>
            <li><div><NavLink to=''>사이트 관리</NavLink></div></li>
            <li><div><NavLink to='/admin/myInfo'>내 정보 관리</NavLink></div></li>
        </ul>
    );
}

