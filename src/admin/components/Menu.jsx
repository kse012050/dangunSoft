import React, { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { adminApi } from '../api/api';

export default function Menu() {
    const [superYN, setSuperYN] = useState()
    const [isOpen, setIsOpen] = useState({
        statistics: true,
        product: false,
        estimate: false,
        purchase: false,
        inquiry: false,
        support: false,
        site: false,
    })

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
                <button onClick={()=>setIsOpen(prev=>({...prev, statistics: !prev.statistics}))}>관리자 통계</button>
                {isOpen.statistics &&
                    <div><NavLink to='/admin/statistics'>통계</NavLink></div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen(prev=>({...prev, product: !prev.product}))}>상품 관리</button>
                {isOpen.product &&
                    <div>
                        <NavLink to='/admin/product/vendor'>벤더사 관리</NavLink>
                        <NavLink to='/admin/product/product'>제품 관리</NavLink>
                        <NavLink to='/admin/product/detailManagement'>제품 상세 관리</NavLink>
                    </div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen(prev=>({...prev, estimate: !prev.estimate}))}>견적 관리</button>
                {isOpen.estimate &&
                    <div><NavLink to='/admin/estimate'>견적 요청 내역</NavLink></div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen(prev=>({...prev, purchase: !prev.purchase}))}>구매 관리</button>
                {isOpen.purchase &&
                    <div><NavLink to='/admin/purchase'>구매 내역</NavLink></div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen(prev=>({...prev, inquiry: !prev.inquiry}))}>문의 관리</button>
                {isOpen.inquiry &&
                    <div><NavLink to='/admin/inquiry'>문의 내역</NavLink></div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen(prev=>({...prev, support: !prev.support}))}>지원 관리</button>
                {isOpen.support &&
                    <div>
                        <NavLink to='/admin/support/faq'>FAQ 카테고리 관리</NavLink>
                        <NavLink to='/admin/support/qna'>카테고리별 문답 관리</NavLink>
                    </div>
                }
            </li>
            <li>
                <button onClick={()=>setIsOpen(prev=>({...prev, site: !prev.site}))}>사이트 관리</button>
                {isOpen.site &&
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

