import React, { useLayoutEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { adminApi } from '../api/api';

export default function Menu() {
    const location = useLocation().pathname.slice(1).split('/')[1];
    const [superYN, setSuperYN] = useState()
    // const [isOpen, setIsOpen] = useState(()=>{
    //     const obj = {
    //         statistics: location.includes('statistics') ? true: false,
    //         product: location.includes('product') ? true: false,
    //         estimate: location.includes('estimate') ? true: false,
    //         purchase: location.includes('purchase') ? true: false,
    //         inquiry: location.includes('inquiry') ? true: false,
    //         support: location.includes('support') ? true: false,
    //         site: location.includes('site') ? true: false,
    //     }
    //     return obj
    // })
    const [isOpen, setIsOpen] = useState(location)

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
                <button onClick={()=>setIsOpen('statistics')}>관리자 통계</button>
                {isOpen === 'statistics' &&
                    <div><NavLink to='/admin/statistics'>통계</NavLink></div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen('product')}>상품 관리</button>
                {isOpen === 'product' &&
                    <div>
                        <NavLink to='/admin/product/vendor'>벤더사 관리</NavLink>
                        <NavLink to='/admin/product/product'>제품 관리</NavLink>
                        <NavLink to='/admin/product/detailManagement'>제품 상세 관리</NavLink>
                    </div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen('estimate')}>견적 관리</button>
                {isOpen === 'estimate' &&
                    <div><NavLink to='/admin/estimate'>견적 요청 내역</NavLink></div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen('purchase')}>구매 관리</button>
                {isOpen === 'purchase' &&
                    <div><NavLink to='/admin/purchase'>구매 내역</NavLink></div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen('inquiry')}>문의 관리</button>
                {isOpen === 'inquiry' &&
                    <div><NavLink to='/admin/inquiry'>문의 내역</NavLink></div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen('support')}>지원 관리</button>
                {isOpen === 'support' &&
                    <div>
                        <NavLink to='/admin/support/faq'>FAQ 카테고리 관리</NavLink>
                        <NavLink to='/admin/support/qna'>카테고리별 문답 관리</NavLink>
                    </div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen('site')}>사이트 관리</button>
                {isOpen === 'site' &&
                    <div>
                        {superYN === 'y' &&
                            <NavLink to='/admin/site/account'>계정 관리</NavLink>
                        }
                        <NavLink to='/admin/site/popup'>팝업 관리</NavLink>
                    </div>
                }
            </li>
            <li>
                <NavLink to='/admin/myInfo'>내 정보 관리</NavLink>
            </li>
        </ul>
    );
}

