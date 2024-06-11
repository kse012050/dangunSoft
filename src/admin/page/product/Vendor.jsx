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
                    <b>관리</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={ data.vendor_id }>
                            <span>{ data.vendor_id }</span>
                            <p>
                                <span>{ data.vendor_name }</span>
                            </p>
                            <div>
                                <button className='btn-point' onClick={()=>setPopup({type: 'vendorUpdate', id: data.vendor_id, name: data.vendor_name, finFunc: boardFunc})}>수정</button>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

