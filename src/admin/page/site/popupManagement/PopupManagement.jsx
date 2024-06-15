import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminApi } from '../../../api/api';
import Popup from '../../../components/popup/Popup';

export default function PopupManagement() {
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()

    const boardFunc = useCallback(()=>{
        adminApi('board', '', {board_type: 'popup'})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setBoard({
                        list : result.list
                    })
                }
            })

    },[])


    useLayoutEffect(()=>{
        boardFunc()
    },[boardFunc])

    const onExposure = (e, data) => {
        const { checked } = e.target
        // "필수 파라미터가 존재하지 않습니다.(board_picture_ids,title,link,exposure_yn)"
        adminApi('board/manage', 'update', {board_id: data.board_id, title: data.title, link: data.link, board_picture_ids: data.board_picture_ids, exposure_yn: checked ? 'y' : 'n'})
            .then((result)=>{
                if(result.result){
                }
            })
    }

    return (
        <>
            <h2>팝업 관리</h2>
            
            <div className="boardBox-site-popup">
                <Link to='/admin/site/popup/create' className='btn-point'>등록</Link>

                <div className="board-title">
                    <b>No.</b>
                    <b>썸네일</b>
                    <p>
                        <span>설명</span>
                    </p>
                    <p>
                        <span>페이지 링크</span>
                    </p>
                    <b>노출여부</b>
                    <b className='time'>등록일시</b>
                    <b className='button'>관리</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={data.board_id}>
                            <span>{ data.board_id }</span>
                            <div className='img'>
                                <img src={data.board_picture_list[0].file_url} alt="" />
                            </div>
                            <p>
                                <span>{ data.title }</span>
                            </p>
                            <p>
                                <span>{ data.link }</span>
                            </p>
                            <div className='exposure' onClick={(e)=>e.stopPropagation()}>
                                <input type="checkbox" id={`check_${data.board_id}`} defaultChecked={data.exposure_yn === 'y'} onChange={(e)=>onExposure(e, data)}/>
                                <label htmlFor={`check_${data.board_id}`}>노출 여부</label>
                            </div>
                            <time className='time'>{ data.reg_date }</time>
                            <div className='button'>
                                <Link to={`/admin/site/popup/${data.board_id}`} className='btn-point'>수정</Link>
                                <button className='btn-point-border'
                                    onClick={()=>setPopup({
                                        type: 'cancel', 
                                        title: '알림',
                                        description: [
                                            '해당 계정를 삭제하겠습니까?',
                                            '삭제된 정보는 복구할 수 없습니다.',
                                        ],
                                        func: () => {
                                            adminApi('board/manage', 'delete', {board_id: data.board_id})
                                                .then((result)=>{
                                                    if(result.result){
                                                        setPopup({
                                                            type: 'confirm',
                                                            title: '알림',
                                                            description: ['해당 계정이 삭제 되었습니다.'],
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

