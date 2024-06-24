import React, { useLayoutEffect, useRef, useState } from 'react';
import Period from '../../components/Period';
import { adminApi } from '../../api/api';
import { Link } from 'react-router-dom';

export default function Purchase() {
    const [inputs, setInputs] = useState({})
    const [board, setBoard] = useState()
    const searchRef = useRef()

    useLayoutEffect(()=>{
        adminApi('order', '', {...inputs})
            .then((result) => {
                // console.log(result);
                if(result.result){
                    setBoard({
                        page: result.data,
                        list: result.list
                    })
                }
            })
    },[inputs])

    const onSearch = () => {
        if(!searchRef.current.value && !inputs?.search_text){
            searchRef.current.focus()
            return
        }

        setInputs(prev=>({...prev, search_text: searchRef.current.value}))
    }

    return (
        <>
            <h2>구매 관리</h2>

            <div className='boardBox-purchase'>
                <Period inputs={inputs} setInputs={setInputs} />

                <div className='board-count'>
                    <strong className="total">{ board?.page.totalCount }</strong>
                    <div className='searchBox'>
                        <input type="search" name='search_text' placeholder='검색어를 입력하세요.' ref={searchRef} onKeyDown={(e)=> e.key === 'Enter' && onSearch()}/>
                        <button onClick={onSearch}>검색</button>
                    </div>
                </div>

                <div className="board-title">
                    <b>No.</b>
                    <p>
                        <span>주문번호</span>
                    </p>
                    <p>
                        <span>기업명</span>
                    </p>
                    <b>글쓴이</b>
                    <b>후리가나</b>
                    <b>연락처</b>
                    <p>
                        <span>이메일</span>
                    </p>
                    <p>
                        <span>벤더사</span>
                    </p>
                    <p>
                        <span>구매상품정보</span>
                    </p>
                    <b>결제금액</b>
                    <b>결제정보</b>
                    <b>결제상태</b>
                    <b>구매일시</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={data.order_id}>
                            <Link to={`/admin/purchase/${data.order_id}`}>
                                <span>{ data.order_id }</span>
                                <p>
                                    <span>{ data.order_code }</span>
                                </p>
                                <p>
                                    <span>{ data.company_name }</span>
                                </p>
                                <span>{ data.write_name }</span>
                                <span>{ data.board_id }</span>
                                <span>{ data.contact_Information }</span>
                                <p>
                                    <span>{ data.email }</span>
                                </p>
                                <p>
                                    <span>{ data.vendor_name }</span>
                                </p>
                                <p>
                                    <span>{ data.product_name }</span>
                                </p>
                                <span>{ data.final_pay_price }</span>
                                <span>결제 정보</span>
                                <span>결제 상태</span>
                                <span>구매일시</span>
                            </Link>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );
}

