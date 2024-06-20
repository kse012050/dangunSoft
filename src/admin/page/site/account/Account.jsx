import React, { useCallback, useLayoutEffect, useState } from 'react';
import { adminApi } from '../../../api/api';
import Popup from '../../../components/popup/Popup';

export default function Account() {
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()

    const boardFunc = useCallback(()=>{
        adminApi('list', '')
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

    const onExposure = (e, admin_id) => {
        const { checked } = e.target
        adminApi('manage', 'update', {admin_id, super_admin_yn: checked ? 'y' : 'n'})
            .then((result)=>{
                // console.log(result);
                if(result.result){

                }
            })
    }

    return (
        <>
            <h2>계정 관리</h2>

            <div className="boardBox-site-account">

                <button className='btn-point' 
                    onClick={()=>{
                        setPopup({
                            type: 'siteAccount',
                            func: boardFunc
                        })
                    }}
                >등록</button>
                <div className="board-title">
                    <b>No.</b>
                    <b>ID</b>
                    <b>이름</b>
                    <p>
                        <span>지사 부서</span>
                    </p>
                    <p>
                        <span>연락처(내선)</span>
                    </p>
                    <p>
                        <span>이메일</span>
                    </p>
                    <b>슈퍼관리자 설정</b>
                    <b className='button'>관리</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={data.admin_id}>
                            <b>{ data.admin_id }</b>
                            <b>{ data.id }</b>
                            <b>{ data.name }</b>
                            <p>
                                <span>{ data.branch_department }</span>
                            </p>
                            <p>
                                <span>{ data.contact_information }</span>
                            </p>
                            <p>
                                <span>{ data.email }</span>
                            </p>
                            <div className='exposure'>
                                <input type="checkbox" id={`check_${data.admin_id}`} defaultChecked={data.super_admin_yn === 'y'} onChange={(e)=>onExposure(e, data.admin_id)}/>
                                <label htmlFor={`check_${data.admin_id}`}>노출 여부</label>
                            </div>
                            <div className='button'>
                                <button className='btn-point'
                                    onClick={()=>{
                                        setPopup({
                                            type: 'siteAccount',
                                            data: data,
                                            func: boardFunc
                                        })
                                    }}
                                >수정</button>
                                { data.delete_able_yn === 'y' &&
                                    <button className='btn-point-border'
                                        onClick={()=>setPopup({
                                            type: 'cancel', 
                                            title: '알림',
                                            description: [
                                                '해당 계정를 삭제하겠습니까?',
                                                '삭제된 정보는 복구할 수 없습니다.',
                                            ],
                                            func: () => {
                                                adminApi('manage', 'delete', {admin_id: data.admin_id})
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
                                }
                            </div>
                        </li>
                    )}
                </ol>
            </div>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

