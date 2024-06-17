import React, { useCallback, useEffect, useState } from 'react';
import { adminApi } from '../../api/api';
import Popup from '../../components/popup/Popup';

export default function Vendor() {
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()

    const boardFunc = useCallback(()=>{
        adminApi('vendor', '', {page: '1'/* , limit: '100' */, all_yn: 'n'})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setBoard({
                        page: result.data,
                        list: result.list
                    })
                }
            })
    },[])

    useEffect(()=>{
        boardFunc()
    },[boardFunc])

    const onExposure = (e, data) => {
        // console.log(data);
        const { checked } = e.target
        // console.log({vendor_id: data.vendor_id, vendor_name: data.vendor_name, exposure_yn: checked ? 'y' : 'n' });
        adminApi('vendor/manage', 'update', {vendor_id: 2, exposure_yn: checked ? 'y' : 'n' })
            .then((result)=>{
                console.log(result);
                if(result.result){
                }
            })
    }

    return (
        <>
            <h2>벤더사 관리</h2>
            <div className="boardBox-ventor">
                <div className="board-count">
                    <strong className='total'>{ board?.page.totalCount }</strong>
                    <button className='btn-point' onClick={()=>setPopup({type: 'vendorCreate', finFunc: boardFunc})}>등록</button>
                </div>

                <div className="board-title">
                    <b>No.</b>
                    <p>
                        <span>벤더사 명</span>
                    </p>
                    <b className='exposure'>노출 여부</b>
                    <b className='button'>관리</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={ data.vendor_id }>
                            <span>{ data.vendor_id }</span>
                            <p>
                                <span>{ data.vendor_name }</span>
                            </p>
                            <div className='exposure'>
                                <input type="checkbox" id={`check_${data.vendor_id}`} defaultChecked={data.exposure_yn === 'y'} onChange={(e)=>onExposure(e, data)}/>
                                <label htmlFor={`check_${data.vendor_id}`}>노출 여부</label>
                            </div>
                            <div className='button'>
                                <button className='btn-point' onClick={()=>setPopup({type: 'vendorUpdate', id: data.vendor_id, name: data.vendor_name, finFunc: boardFunc})}>수정</button>
                                <button className='btn-point-border'
                                    onClick={()=>setPopup({
                                        type: 'cancel', 
                                        title: '알림',
                                        description: [
                                            '해당 계정를 삭제하겠습니까?',
                                            '삭제된 정보는 복구할 수 없습니다.',
                                        ],
                                        func: () => {
                                            adminApi('vendor/manage', 'delete', {vendor_id: data.vendor_id})
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

