import React, { useCallback, useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { adminApi } from '../../../api/api';
import Popup from '../../../components/popup/Popup';

export default function FAQCategory() {
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()

    const boardFunc = useCallback(()=>{
        adminApi('board', '', {board_type: 'faq', page: '1'/* , limit: '100' */})
            .then((result)=>{
                console.log(result);
                if(result.result){
                    setBoard({
                        page: result.data,
                        list: result.list
                    })
                }
            })
    },[])

    useLayoutEffect(()=>{
        boardFunc()
    },[boardFunc])

    return (
        <>
            <h2>FAQ 카테고리</h2>
            
            <div className="boardBox-suppot-faq">
                <div className="board-tab">
                    <NavLink to='/admin/support/faq'>카테고리 관리</NavLink>
                    <NavLink to='/admin/support/qna'>문답 관리</NavLink>
                    <button className='btn-point' onClick={()=>setPopup({type: 'supportFAQCreate'})}>등록</button>
                </div>

                <div className="board-title">
                    <b>1 depth</b>
                    <b>2 depth</b>
                    <p>
                        <span>제목</span>
                    </p>
                    <b>문답 수</b>
                    <b>노출 여부</b>
                    <b>관리</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={ data.board_id }>
                            <b>1 depth</b>
                            <b>2 depth</b>
                            <p>
                                <span>{ data.title }</span>
                            </p>
                            <b>문답 수</b>
                            <div className='exposure'>
                                <input type="checkbox" id='test'/>
                                <label htmlFor="test">노출 여부</label>
                            </div>
                            <div>
                                <button className='btn-point'>수정</button>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
            
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

