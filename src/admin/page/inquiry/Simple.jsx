import React, { useLayoutEffect, useRef, useState } from 'react';
import { adminApi } from '../../api/api';
import Period from '../../components/Period';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { urlParams } from '../../../js/common';
import Pagination from '../../components/Pagination';
import Popup from '../../components/popup/Popup';


export default function Simple() {
    const { start_date, end_date, search_text, page } = urlParams(useLocation())
    const currentInputs = {board_type: 'simple_inquiry', page:1, limit: 30}
    const [board, setBoard] = useState()
    const [inputs, setInputs] = useState({...currentInputs})
    const [popup, setPopup] = useState()
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
    }
    
    return (
        <>
            <h2>문의 관리</h2>
            
            <div className={`boardBox-suppot-inquiry-simple_inquiry`}>
                <Period />
                
                <div className="board-tab">
                    <NavLink to='/admin/inquiry/inquiry'>문의 게시판</NavLink>
                    <NavLink to='/admin/inquiry/simple'>간편 문의</NavLink>
                </div>

                <div className='board-count'>
                    <strong className="total">{ board?.page.totalCount }</strong>
                    <div className='searchBox'>
                        <input type="search" name='search_text' placeholder='검색어를 입력하세요.' ref={searchRef} onKeyDown={(e)=> e.key === 'Enter' && onSearch()}/>
                        <button onClick={onSearch}>검색</button>
                    </div>
                </div>
                <div className="board-title">
                    <b className='test02'>No.</b>
                    <b className='test01'>글쓴이</b>
                    <p>
                        <span>기업명</span>
                    </p>
                    <p>
                        <span>이메일</span>
                    </p>
                    <p className='pTest'>
                        <span>비고</span>
                    </p>
                    <b className='test01'>작성시간</b>
                    <b className='test02'>답변</b>
                    <b className='button'>관리</b>
                </div>
                
                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={data.board_id}>
                            <Link to={`/admin/inquiry/${data.board_id}`}>
                                <b className='test02'>{ data.board_id }</b>
                                <b className='test01'>{ data.write_name }</b>
                                <p>
                                    <span>{ data.company_name }</span>
                                </p>
                                <p>
                                    <span>{ data.email }</span>
                                </p>
                                <p className='pTest'>
                                    <span>{ data.title }</span>
                                </p>
                                <b className='test01'>{ data.reg_date }</b>
                                <b className='test02'>{ data.answer ? '답변': '미답변' }</b>
                                <div className='button'>
                                    <button className='btn-point-border'
                                        type='button'
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            setPopup({
                                                type: 'cancel', 
                                                title: '알림',
                                                description: [
                                                    '해당 문의를 삭제하겠습니까?',
                                                    '삭제된 문의는 복구할 수 없습니다.',
                                                ],
                                                func: () => {
                                                    adminApi('board/manage', 'delete', {board_id: data.board_id})
                                                        .then((result)=>{
                                                            if(result.result){
                                                                setPopup({
                                                                    type: 'confirm',
                                                                    title: '알림',
                                                                    description: ['해당 문의가 삭제 되었습니다.'],
                                                                    func: () =>{
                                                                        navigate(0)
                                                                    }
                                                                })
                                                            }
                                                        })
                                                }
                                            })
                                        }}
                                    >삭제</button>
                                </div>
                            </Link>
                        </li>
                    )}
                </ol>
                
                { board && 
                    <Pagination page={board.page} curruntParam={`${start_date ? `?start_date=${start_date}?end_date=${end_date}`: ''}${search_text ? `?search_text=${search_text}`: ''}`}/>
                }
                { popup && <Popup popup={popup} setPopup={setPopup}/>}
            </div>
        </>
    );
}

