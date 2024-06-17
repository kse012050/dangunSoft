import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminApi } from '../../../api/api';

export default function DetailedManagement() {
    const [board, setBoard] = useState()

    useLayoutEffect(()=>{
        adminApi('product', '', {page: '1'/* , limit: '100' */, all_yn: 'n'})
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

    const onExposure = (e, data) => {
        const { checked } = e.target
        adminApi('product/manage', 'update', {product_id: data.product_id, exposure_yn: checked ? 'y' : 'n', vendor_id: data.vendor_id, product_name: data.product_name})
            .then((result)=>{
                if(result.result){
                }
            })
    }

    return (
        <>
            <h2>제품 상세 관리</h2>

            <div className="boardBox-productDetail">
                <Link to='create' className='btn-point'>등록</Link>

                <div className="board-title">
                    <b>No.</b>
                    <p>
                        <span>벤더사 명</span>
                    </p>
                    <p>
                        <span>제품명</span>
                    </p>
                    <b>옵션</b>
                    <b>사용 구분</b>
                    <b>최소 수량</b>
                    <b className='exposure'>노출 여부</b>
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
                            <ul className='option'>
                                <li>123</li>
                                <li>123</li>
                            </ul>
                            <span>사용 구분</span>
                            <span>최소 수량</span>
                            <div className='exposure'>
                                <input type="checkbox" id={`check_${data.product_id}`} defaultChecked={data.exposure_yn === 'y'} onChange={(e)=>onExposure(e, data)}/>
                                <label htmlFor={`check_${data.product_id}`}>노출 여부</label>
                            </div>
                            <div>
                                <Link to={`${data.product_id}`} className='btn-point'>수정</Link>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );
}

