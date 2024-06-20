import React, { useLayoutEffect, useRef, useState } from 'react';
import Period from '../../components/Period';
import { adminApi } from '../../api/api';
import { Link } from 'react-router-dom';

export default function Estimate() {
    const [inputs, setInputs] = useState({board_type: 'estimate'})
    const [board, setBoard] = useState()
    const searchRef = useRef()

    useLayoutEffect(()=>{
        adminApi('board', '', {...inputs})
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
            <h2>견적 요청 관리</h2>

            <div className='boardBox-estimate'>
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
                    <b className='bigWidth'>기업명</b>
                    <b>글쓴이</b>
                    <b>후리가나</b>
                    <b className='bigWidth'>연락처</b>
                    <b className='bigWidth'>이메일</b>
                    <b className='bigWidth'>벤더사</b>
                    <b className='bigWidth'>제품명</b>
                    <b className='bigWidth'>작성시간</b>
                    <b>견적 신청</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={data.board_id}>
                            <Link to={`/admin/estimate/${data.board_id}`}>
                                <span>{ data.board_id }</span>
                                <span className='bigWidth'>{ data.company_name }</span>
                                <span>{ data.write_name }</span>
                                <span>{ data.phonetic_guide }</span>
                                <span className='bigWidth'>{ data.contact_information }</span>
                                <span className='bigWidth'>{ data.email }</span>
                                <span className='bigWidth'>{ data.vendor_name }</span>
                                <span className='bigWidth'>{ data.product_name }</span>
                                <span className='bigWidth'>{ data.reg_date }</span>
                                <span>{ data.estimation_yn }</span>
                            </Link>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );
}

