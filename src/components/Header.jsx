import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenu, setIsMenu] = useState(false);
    return (
        <header>
            <h1><Link to='/'>NATTOSYSYEM logo</Link></h1>
            <nav className={isMenu ? 'active': ''}>
                <ul>
                    <li><NavLink to='/'>홈</NavLink></li>
                    <li><NavLink to='/product'>제품</NavLink></li>
                    <li><NavLink to='/solution'>솔루션</NavLink></li>
                    <li>
                        <NavLink to='/support'>지원</NavLink>
                        <div>
                            <NavLink to='board'>게시판</NavLink>
                            <NavLink to='inquiry'>문의하기</NavLink>
                            <NavLink to='faq'>FAQ</NavLink>
                        </div>
                    </li>
                </ul>
                <button onClick={()=>setIsMenu(false)}>메뉴 닫기</button>
            </nav>
            <Link to='/'>견적요청</Link>
            <div>
                <Link to='/'>Twitter</Link>
                <Link to='/'>Line_ID</Link>
            </div>
            <button onClick={()=>setIsMenu(true)}>메뉴 열기</button>
        </header>
    );
}

