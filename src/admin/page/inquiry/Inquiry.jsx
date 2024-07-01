import React, { useLayoutEffect, useRef, useState } from 'react';
import { adminApi } from '../../api/api';
import Period from '../../components/Period';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { urlParams } from '../../../js/common';
import Pagination from '../../components/Pagination';

export default function Inquiry() {
    const { start_date, end_date, search_text, page } = urlParams(useLocation())
    const currentInputs = {board_type: 'inquiry', page:1, limit: 10}
    const [board, setBoard] = useState()
    const [inputs, setInputs] = useState({...currentInputs})
    const searchRef = useRef()
    const navigate = useNavigate()
    // console.log(currentInputs);
    // console.log(inputs);
    useLayoutEffect(()=>{
        adminApi('board', '', {...inputs, start_date, end_date, search_text: search_text, page})
            .then((result) => {
                // console.log(result);
                if(result.result){
                    setBoard({
                        page: result.data,
                        list: result.list
                    })
                }
            })
    },[inputs, start_date, end_date, search_text, page])

    const onSearch = () => {
        if(!searchRef.current.value && !inputs?.search_text && !search_text){
            searchRef.current.focus()
            return
        }

        navigate(`${start_date ? `?start_date=${start_date}?end_date=${end_date}`: ''}?search_text=${searchRef.current.value}`)
        // setInputs(prev=>({...prev, search_text: searchRef.current.value}))
    }

    return (
        <>
            <h2>문의 관리</h2>
            
            <div className={`boardBox-suppot-inquiry-inquiry`}>
                <Period />
                
                <div className="board-tab">
                    <NavLink to='/admin/inquiry/inquiry'>문의 게시판</NavLink>
                    <NavLink to='/admin/inquiry/simple'>간편 문의</NavLink>
                </div>

                <div className='board-count'>
                    <strong className="total">{ board?.page.totalCount }</strong>
                    <div className='searchBox'>
                        <input type="search" name='search_text' placeholder='검색어를 입력하세요.' ref={searchRef} onKeyDown={(e)=> e.key === 'Enter' && onSearch()} defaultValue={search_text || ''}/>
                        <button onClick={onSearch}>검색</button>
                    </div>
                </div>

                <div className="board-title">
                    <b className='test02'>No.</b>
                    <p className='pTest'>
                        <span>제목</span>
                    </p>
                    <b className='test01'>글쓴이</b>
                    <b className='test01'>후라가나</b>
                    <p>
                        <span>기업명</span>
                    </p>
                    <p>
                        <span>연락처</span>
                    </p>
                    <p>
                        <span>이메일</span>
                    </p>
                    <b className='test02'>미팅요청</b>
                    <b className='test02'>비밀글</b>
                    <b className='test01'>작성시간</b>
                    <b className='test02'>답변</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={data.board_id}>
                            <Link to={`/admin/inquiry/${data.board_id}`}>
                                <b className='test02'>{ data.board_id }</b>
                                <p className='pTest'>
                                    <span>{ data.title }</span>
                                </p>
                                <b className='test01'>{ data.write_name }</b>
                                <b className='test01'>{ data.phonetic_guide }</b>
                                <p>
                                    <span>{ data.company_name }</span>
                                </p>
                                <p>
                                    <span>{ data.contact_information }</span>
                                </p>
                                <p>
                                    <span>{ data.email }</span>
                                </p>
                                <b className='test02'>{ data.meeting_request_yn === 'y' ? 'O' : 'X' }</b>
                                <b className='test02'>{ data.secret_yn === 'y' ? 'O' : 'X' }</b>
                                <b className='test01'>{ data.reg_date }</b>
                                <b className='test02'>{ data.answer ? '답변': '미답변' }</b>
                            </Link>
                        </li>
                    )}
                </ol>

                { board && 
                    <Pagination page={board.page} curruntParam={`${start_date ? `?start_date=${start_date}?end_date=${end_date}`: ''}${search_text ? `?search_text=${search_text}`: ''}`}/>
                }
            </div>
        </>
    );
}

