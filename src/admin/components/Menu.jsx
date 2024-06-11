import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <ul className='menuArea'>
            <li>
                <button>관리자 통계</button>
                <div><NavLink to='/'>통계</NavLink></div>
            </li>
            <li>
                <button>상품 관리</button>
                <div>
                    <NavLink to='/admin/product/vendor'>벤더사 관리</NavLink>
                    <NavLink to='/admin/product/product'>제품 관리</NavLink>
                    <NavLink to='/'>제품 상세 관리</NavLink>
                </div>
            </li>
            <li>
                <button>견적 관리</button>
                <div><NavLink to='/'>견젝 요청 내역</NavLink></div>
            </li>
            <li>
                <button>구매 관리</button>
                <div><NavLink to='/'>구매 내역</NavLink></div>
            </li>
            <li>
                <button>관리 문의</button>
                <div><NavLink to='/'>문의 내역</NavLink></div>
            </li>
            <li>
                <button>지원 관리</button>
                <div>
                    <NavLink to='/admin/support/faq'>FAQ 카테고리 관리</NavLink>
                    <NavLink to='/admin/support/qna'>카테고리별 문답 관리</NavLink>
                </div>
            </li>
            <li>
                <button>사이트 관리</button>
                <div>
                    <NavLink to='/'>계정 관리</NavLink>
                    <NavLink to='/'>팝업 관리</NavLink>
                </div>
            </li>
            <li>
                <NavLink to='/admin/myInfo'>내 정보 관리</NavLink>
            </li>
        </ul>
    );
}

