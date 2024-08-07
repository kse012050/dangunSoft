import React, { useLayoutEffect, useRef, useState } from 'react';
import Period from '../../components/Period';
import { adminApi } from '../../api/api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { urlParams } from '../../../js/common';
import Pagination from '../../components/Pagination';
import Popup from '../../components/popup/Popup';

export default function Estimate() {
    const { start_date, end_date, search_text, page } = urlParams(useLocation())
    const [inputs, setInputs] = useState({board_type: 'estimate'})
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()
    const searchRef = useRef()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        adminApi('board', '', {board_type : 'estimate', page: page || 1, limit: 30, start_date, end_date, search_text: search_text})
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
        navigate(`?test=test?search_text=${searchRef.current.value}${start_date ? `&start_date=${start_date}&end_date=${end_date}`: ''}`)
    }

    return (
        <>
            <h2>견적 요청 관리</h2>

            <div className='boardBox-estimate'>
                <Period inputs={inputs} setInputs={setInputs} />

                <div className='board-count'>
                    <strong className="total">{ board?.page.totalCount }</strong>
                    <div className='searchBox'>
                        <input type="search" name='search_text' placeholder='검색어를 입력하세요.' ref={searchRef} onKeyDown={(e)=> e.key === 'Enter' && onSearch()} defaultValue={search_text}/>
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
                    <b className='button'>관리</b>
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
                                <span>{ data.estimation_yn === 'y' ? 'O' : 'X' }</span>
                                <div className='button'>
                                    <button className='btn-point-border'
                                        type='button'
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            setPopup({
                                                type: 'cancel', 
                                                title: '알림',
                                                description: [
                                                    '해당 견적 요청 내역을 삭제하겠습니까?',
                                                    '삭제된 견적 요청 내역은 복구할 수 없습니다.',
                                                ],
                                                func: () => {
                                                    adminApi('board/manage', 'delete', {board_id: data.board_id})
                                                        .then((result)=>{
                                                            if(result.result){
                                                                setPopup({
                                                                    type: 'confirm',
                                                                    title: '알림',
                                                                    description: ['해당 견적 요청 내역이 삭제 되었습니다.'],
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

