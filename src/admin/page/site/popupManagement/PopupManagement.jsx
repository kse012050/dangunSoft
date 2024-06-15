import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminApi } from '../../../api/api';

export default function PopupManagement() {
    const [board, setBoard] = useState()


    useLayoutEffect(()=>{
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

    const onExposure = (e, admin_id) => {
        const { checked } = e.target
        // adminApi('manage', 'update', {admin_id, super_admin_yn: checked ? 'y' : 'n'})
        //     .then((result)=>{
        //         // console.log(result);
        //         if(result.result){

        //         }
        //     })
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
                                <input type="checkbox" id={`check_${data.board_id}`} defaultChecked={data.exposure_yn === 'y'} onChange={(e)=>onExposure(e, data.admin_id)}/>
                                <label htmlFor={`check_${data.board_id}`}>노출 여부</label>
                            </div>
                            <time className='time'>{ data.reg_date }</time>
                            <div className='button'>
                                <Link to={`/admin/site/popup/${data.board_id}`} className='btn-point'>수정</Link>
                                <button className='btn-point-border'>삭제</button>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );
}

