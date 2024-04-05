import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1><Link to='/'>NATTOSYSYEM logo</Link></h1>
            <nav>
                <ul>
                    <li><NavLink to='/'>홈</NavLink></li>
                    <li><NavLink to=''>제품</NavLink></li>
                    <li><NavLink to=''>솔루션</NavLink></li>
                    <li>
                        <button>지원</button>
                        <div>
                            <NavLink to=''>게시판</NavLink>
                            <NavLink to=''>문의하기</NavLink>
                            <NavLink to=''>FAQ</NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

