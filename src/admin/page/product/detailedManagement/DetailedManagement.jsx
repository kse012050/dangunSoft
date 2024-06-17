import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminApi } from '../../../api/api';
import Popup from '../../../components/popup/Popup';

export default function DetailedManagement() {
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()

    const boardFunc = useCallback(()=>{
        adminApi('product', '', {page: '1'/* , limit: '100' */, all_yn: 'n', detail_yn: 'y'})
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

    useLayoutEffect(()=>{
        boardFunc()
    },[boardFunc])

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
                    <b className='option'>옵션</b>
                    <b className='option'>사용 구분</b>
                    <b className='option'>최소 수량</b>
                    <b className='exposure'>노출 여부</b>
                    <b className='button'>관리</b>
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
                                {data.optionList.map((data2, i)=>
                                    <li key={i}>{ data2.option_name }</li>
                                )}
                            </ul>
                            <ul className='option'>
                                {data.optionList.map((data2, i)=>
                                    <li key={i}>{ data2.standard }</li>
                                )}
                            </ul>
                            <ul className='option'>
                                {data.optionList.map((data2, i)=>
                                    <li key={i}>{ data2.minimum_quantiry }</li>
                                )}
                            </ul>
                            {/* <span>사용 구분</span> */}
                            {/* <span>최소 수량</span> */}
                            <div className='exposure'>
                                <input type="checkbox" id={`check_${data.product_id}`} defaultChecked={data.exposure_yn === 'y'} onChange={(e)=>onExposure(e, data)}/>
                                <label htmlFor={`check_${data.product_id}`}>노출 여부</label>
                            </div>
                            <div className='button'>
                                <Link to={`${data.product_id}`} className='btn-point'>수정</Link>
                                <button className='btn-point-border'
                                    onClick={()=>setPopup({
                                        type: 'cancel', 
                                        title: '알림',
                                        description: [
                                            '해당 계정를 삭제하겠습니까?',
                                            '삭제된 정보는 복구할 수 없습니다.',
                                        ],
                                        func: () => {
                                            adminApi('product/manage', 'delete', {product_id: data.product_id})
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

