import React, { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { adminApi } from '../api/api';

export default function Menu() {
    const [superYN, setSuperYN] = useState()

    useLayoutEffect(()=>{
        adminApi('profile')
            .then((result)=>{
                // console.log(result.data);
                if(result.result){
                    setSuperYN(result.data.super_admin_yn)
                }
            })
    },[])

    return (
        <ul className='menuArea'>
            <li>
                <button>관리자 통계</button>
                <div><NavLink to='/admin/statistics'>통계</NavLink></div>
            </li>
            <li>
                <button>상품 관리</button>
                <div>
                    <NavLink to='/admin/product/vendor'>벤더사 관리</NavLink>
                    <NavLink to='/admin/product/product'>제품 관리</NavLink>
                    <NavLink to='/admin/product/detailManagement'>제품 상세 관리</NavLink>
                </div>
            </li>
            <li>
                <button>견적 관리</button>
                <div><NavLink to='/'>견적 요청 내역</NavLink></div>
            </li>
            <li>
                <button>구매 관리</button>
                <div><NavLink to='/'>구매 내역</NavLink></div>
            </li>
            <li>
                <button>문의 관리</button>
                <div><NavLink to='/admin/inquiry'>문의 내역</NavLink></div>
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
                    {superYN === 'y' &&
                        <NavLink to='/admin/site/account'>계정 관리</NavLink>
                    }
                    <NavLink to='/admin/site/popup'>팝업 관리</NavLink>
                </div>
            </li>
            <li>
                <NavLink to='/admin/myInfo'>내 정보 관리</NavLink>
            </li>
        </ul>
    );
}

