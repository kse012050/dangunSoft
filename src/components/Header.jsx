import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation().pathname;
    const [isMenu, setIsMenu] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenu(false)
    },[location])
    return (
        <header>
            <h1><Link to='/'>NATTOSYSYEM logo</Link></h1>
            <nav className={isMenu ? 'active': ''}>
                <ul>
                    <li><NavLink to='/'>ホーム</NavLink></li>
                    <li><NavLink to='/product'>製品</NavLink></li>
                    <li>
                        <NavLink to='/solution'>ソリューション</NavLink>
                        <div>
                            {/* <NavLink to='/support/board'>掲示板</NavLink>
                            <NavLink to='/support/inquiry'>お問い合わせ</NavLink> */}
                            <NavLink to='/solution/solution'>ソリューション</NavLink>
                            <NavLink to='/solution/solution2'>솔루션 제품</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to='/support'>サポート</NavLink>
                        <div>
                            {/* <NavLink to='/support/board'>掲示板</NavLink>
                            <NavLink to='/support/inquiry'>お問い合わせ</NavLink> */}
                            <NavLink to='/support/board'>お問い合わせ</NavLink>
                            <NavLink to='/support/faq'>FAQ</NavLink>
                        </div>
                    </li>
                </ul>
                <button onClick={()=>setIsMenu(false)}>메뉴 닫기</button>
            </nav>
            <Link to='/estimate'>お見積もり</Link>
            <div>
                <Link to='https://x.com/nattosystem'>Twitter</Link>
                <Link to='https://liff.line.me/1645278921-kWRPP32q/?accountId=827gemiv'>Line_ID</Link>
            </div>
            <button onClick={()=>setIsMenu(true)}>메뉴 열기</button>
        </header>
    );
}

