import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Period from '../../components/Period';
import { adminApi } from '../../api/api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import { urlParams } from '../../../js/common';
import SelectBox from '../../components/SelectBox';
import Popup from '../../components/popup/Popup';

const stateList = [
    {
        text: '전체',
        value: ''
    },
    {
        text: '진행중',
        value: 'request'
    },
    {
        text: '결제 완료',
        value: 'complete'
    },
    {
        text: '결제 전 취소',
        value: 'cancel'
    },
    {
        text: '환불(결제 후 취소)',
        value: 'refund'
    }
]

export default function Purchase() {
    const { start_date, end_date, state, search_text, page } = urlParams(useLocation())
    const [inputs, setInputs] = useState({})
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()
    const searchRef = useRef()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        adminApi('order', '', {page: page || 1, limit: 30, start_date, end_date, state, search_text: search_text})
            .then((result) => {
                // console.log(result);
                if(result.result){
                    setBoard({
                        page: result.data,
                        list: result.list
                    })
                }
            })
        },[start_date, end_date, state, search_text, page])

    useEffect(()=>{
        if(inputs?.hasOwnProperty('state')){
            navigate(`${start_date ? `?start_date=${start_date}?end_date=${end_date}`: ''}?state=${inputs.state}${search_text? `?search_text=${search_text}` : ''}`)
        }/* else{
            navigate(`${start_date ? `?start_date=${start_date}?end_date=${end_date}`: ''}?state=${inputs.state}${search_text? `?search_text=${search_text}` : ''}`)
        } */
    },[inputs?.state])

    const onSearch = () => {
        if(!searchRef.current.value && !inputs?.search_text && !search_text){
            searchRef.current.focus()
            return
        }
        navigate(`${start_date ? `?start_date=${start_date}?end_date=${end_date}`: ''}${state ? `?state=${state}`: ''}?search_text=${searchRef.current.value}`)
    }
    
    return (
        <>
            <h2>구매 관리</h2>

            <div className='boardBox-purchase'>
                <Period inputs={inputs} setInputs={setInputs} key={start_date}/>

                <div className='board-count'>
                    <strong className="total">{ board?.page.totalCount }</strong>
                    <SelectBox text={stateList.map(data=> data.text)} value={stateList.map(data=> data.value)} firstText={state ? stateList.filter(data=>data.value === state)[0].text: ''} name='state' setInputs={setInputs} key={state}/>
                    <div className='searchBox'>
                        <input type="search" name='search_text' placeholder='검색어를 입력하세요.' ref={searchRef} onKeyDown={(e)=> e.key === 'Enter' && onSearch()} defaultValue={search_text || ''}/>
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
                    {/* <b>후리가나</b> */}
                    <p>
                        <span>연락처</span>
                    </p>
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
                    <b>결제상태</b>
                    <b>구매일시</b>
                    <b className='button'>관리</b>
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
                                {/* <span>{ data.board_id }</span> */}
                                <p>
                                    <span>{ data.contact_Information }</span>
                                </p>
                                <p>
                                    <span>{ data.email }</span>
                                </p>
                                <p>
                                    <span>{ data.vendor_name }</span>
                                </p>
                                <p>
                                    <span>{ data.product_name }</span>
                                </p>
                                <span>{ data.final_pay_price.toLocaleString() }</span>
                                <span>
                                    {data.state === 'request' && '결제 요청'}
                                    {data.state === 'complete' && '결제 완료'}
                                    {data.state === 'cancel' && '결제 전 취소'}
                                    {data.state === 'refund' && '환불(결제 후 취소)'}
                                </span>
                                <span>{ data.reg_date }</span>
                                <div className='button'>
                                    <button className='btn-point-border'
                                        onClick={()=>setPopup({
                                            type: 'cancel', 
                                            title: '알림',
                                            description: [
                                                '해당 구매 내역를 삭제하겠습니까?',
                                                '삭제된 구매 내역은 복구할 수 없습니다.',
                                            ],
                                            func: () => {
                                                adminApi('order/delete', '', {order_id: data.order_id})
                                                    .then((result)=>{
                                                        if(result.result){
                                                            setPopup({
                                                                type: 'confirm',
                                                                title: '알림',
                                                                description: ['해당 구매 내역이 삭제 되었습니다.'],
                                                                func: () =>{
                                                                    navigate(0)
                                                                }
                                                            })
                                                        }
                                                    })
                                            }
                                        })}
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

