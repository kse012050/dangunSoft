import React, { useCallback, useLayoutEffect, useState } from 'react';
import { adminApi } from '../../api/api';

export default function Product() {
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()
    popup()

    const boardFunc = useCallback(()=>{
        adminApi('product', '', {page: '1'/* , limit: '100' */, all_yn: 'n'})
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
            <h2>제품 관리</h2>
            <div className="boardBox-product">
                <div className="board-count">
                    <strong className='total'>{ board?.page.totalCount }</strong>
                    <button className='btn-point' onClick={()=>setPopup({type: 'vendorCreate', finFunc: boardFunc})}>등록</button>
                </div>

                <div className="board-title">
                    <b>No.</b>
                    <p>
                        <span>벤더사 명</span>
                    </p>
                    <p>
                        <span>제품명</span>
                    </p>
                    <b>노출 여부</b>
                    <b>관리</b>
                </div>

                
                <ol className="board-detail">
                    { board?.list.map((data)=>
                        <li key={ data.product_id }>
                            <span>{ data.product_id }</span>
                            <p>
                                <span>{ data.vendor_name }</span>
                            </p>
                            <p>
                                <span>{ data.product_name }</span>
                            </p>
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
        </>
    );
}

