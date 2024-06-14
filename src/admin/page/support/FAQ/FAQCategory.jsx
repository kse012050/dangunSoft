import React, { useCallback, useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from '../../../components/popup/Popup';
import { adminApi } from '../../../api/api';

export default function FAQCategory() {
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()

    const boardFunc = useCallback(()=>{
        adminApi('category', '', {depth: '1', all_yn: 'n'})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    const arr = []
                    const parentArr = result.list.filter((data)=> data.parent_category_id === 0)
                    const childArr = result.list.filter((data)=> data.parent_category_id !== 0)
                    // console.log(parentArr);
                    // console.log(childArr);
                    parentArr.forEach((data)=>{
                        arr.push(data)
                        childArr.filter((data2)=> data.category_id === data2.parent_category_id).forEach((data2)=>{
                            arr.push(data2)
                        })
                    })
                    setBoard({
                        list: arr
                    })
                }
            })
    },[])

    useLayoutEffect(()=>{
        boardFunc()
    },[boardFunc])

    const onExposure = (e, category_id) => {
        const { checked } = e.target
        adminApi('category/manage', 'update', {category_id: category_id, exposure_yn: checked ? 'y' : 'n'})
            .then((result)=>{
                // console.log(result);
                if(result.result){

                }
            })
    }

    return (
        <>
            <h2>FAQ 관리</h2>
            
            <div className="boardBox-suppot-faq">
                <div className="board-tab">
                    <NavLink to='/admin/support/faq'>카테고리 관리</NavLink>
                    <NavLink to='/admin/support/qna'>문답 관리</NavLink>
                    <button className='btn-point' onClick={()=>setPopup({type: 'supportFAQCreate', func: boardFunc})}>등록</button>
                </div>

                <div className="board-title">
                    <b>1 depth</b>
                    <b>2 depth</b>
                    <p>
                        <span>제목</span>
                    </p>
                    <b>문답 수</b>
                    <b>노출 여부</b>
                    <b className='button'>관리</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={ data.category_id }>
                            <b>{ !data.parent_category_id ? data.category_id : '' }</b>
                            <b>{ data.parent_category_id ? data.category_id : ''}</b>
                            <p>
                                <span>{ data.name }</span>
                            </p>
                            <b>문답 수</b>
                            <div className='exposure'>
                                <input type="checkbox" id={`check_${data.category_id}`} defaultChecked={data.exposure_yn === 'y'} onChange={(e)=>onExposure(e, data.category_id)}/>
                                <label htmlFor={`check_${data.category_id}`}>노출 여부</label>
                            </div>
                            <div className='button'>
                                <button className='btn-point' onClick={()=>setPopup({type: 'supportFAQUpdate', data: data, func: boardFunc})}>수정</button>
                                <button className='btn-point-border' 
                                    onClick={()=>setPopup({
                                        type: 'cancel', 
                                        title: '삭제',
                                        description: [
                                            '해당 정보를 삭제하겠습니까?',
                                            '삭제 후에는 복구할 수 없으며 상위 카테고리를 삭제 시 하단 내용이 없어질 수 있으니 주의하세요.'
                                        ],
                                        func: () => {
                                            adminApi('category/manage', 'delete', {category_id: data.category_id})
                                                .then((result)=>{
                                                    if(result.result){
                                                        setPopup({
                                                            type: 'confirm',
                                                            title: '알림',
                                                            description: ['완료되었습니다.'],
                                                            func: () =>{
                                                                boardFunc()
                                                            }
                                                        })
                                                    }
                                                })
                                        }
                                    })}
                                >삭제</button>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
            
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

