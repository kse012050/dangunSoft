import React, { useLayoutEffect, useState } from 'react';
import Products from './Product';
import { useParams } from 'react-router-dom';
import { adminApi } from '../../api/api';

const productObj = {
    vendor_id: '',
    product_id: '',
    product_option_id: '',
    order_quantiry: '',
    option_price_id: '',
    total_price: '',
    final_pay_pric: ''
}

export default function Calculation() {
    const { id } = useParams()
    const [productList, setProductList] = useState()

    useLayoutEffect(()=>{
        adminApi('board/detail', '', {board_id: id})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setProductList(result.list.map(({ vendor_id, product_id, product_option_id, order_quantiry, option_price_id, option_price_type, total_price, final_pay_price })=>({
                        vendor_id,
                        product_id,
                        product_option_id,
                        order_quantiry,
                        option_price_id,
                        option_price_type,
                        total_price,
                        final_pay_price
                    })))
                }
            })
    },[id])

    return (
        <>
            <h2>견적 산정</h2>

            <div className='boardArea'>
                <strong>견적 산정</strong>
                <div className='board-title'>
                    <b>구분</b>
                    <b>벤더사</b>
                    <b>제품명</b>
                    <b>옵션</b>
                    <b>수량</b>
                    <b>구독옵션</b>
                    <b>기본 견적</b>
                    <b>최종금액</b>
                    <b></b>
                </div>
                <ol className="board-detail">
                    {productList?.map((data, i)=>
                        <li key={i}>
                            <Products data={data}/>
                        </li>
                    )}
                </ol>
                <button className='btn-point'
                    onClick={()=>setProductList(prev=>([...prev, {...productObj}]))}
                >제품 추가</button>
            </div>

            <div>
                <strong>최종 견적</strong>
                <dl>
                    <dt></dt>
                    <dd></dd>
                </dl>
                <dl>
                    <dt></dt>
                    <dd></dd>
                </dl>
                <dl>
                    <dt></dt>
                    <dd></dd>
                </dl>
            </div>

            <div>
                <strong>내용</strong>
                <textarea name="" id=""></textarea>
            </div>
        </>
    );
}

