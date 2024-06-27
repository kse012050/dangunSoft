import React, { useLayoutEffect, useRef, useState } from 'react';
import Products from './Product';
import { useNavigate, useParams } from 'react-router-dom';
import { adminApi } from '../../api/api';
import Popup from '../../components/popup/Popup';

const productObj = {
    vendor_id: '',
    product_id: '',
    product_option_id: '',
    order_quantiry: '',
    option_price_id: '',
    total_price: '',
    final_pay_price: ''
}

export default function Calculation() {
    const { id } = useParams()
    const commentRef = useRef()
    const [productList, setProductList] = useState()
    const [popup, setPopup] = useState()
    const navigate = useNavigate()


    useLayoutEffect(()=>{
        adminApi('board/detail', '', {board_id: id})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setProductList(result.list.map(({ vendor_id, product_id, product_option_id, order_quantiry, option_price_info_obj, option_price_type, total_price, final_pay_price })=>({
                        vendor_id,
                        product_id,
                        product_option_id,
                        order_quantiry,
                        option_price_id: option_price_info_obj?.option_price_id ?? null,
                        option_price_type,
                        total_price,
                        final_pay_price
                    })))
                }
            })
    },[id])

    const onSubmit = (e) =>{
        e.preventDefault()

        // console.log(productList);
        if(!commentRef.current.value){
            commentRef.current.focus()
            return
        }
        const isProdect = productList.some((data)=>{
            return Object.entries(data).some(([key, value]) =>{
                if(!value && value !== 0){
                    return true
                }
                return false;
            })
        })

        // console.log(isProdect);
        if(isProdect){
            return
        }

        adminApi('board/manage/estimate', '', {board_id: id, comment: commentRef.current.value, order_product_list: [...productList.map(({ option_price_type, ...rest }) => rest)]})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setPopup({
                        type: 'confirm',
                        title: '알림',
                        description: ['결제 링크가 발송되었습니다.', '결제 진행 상태는 구매 이력에서 확인해 주세요.'],
                        func: () =>{
                            navigate('/admin/estimate')
                        }
                    })
                }
            })
    }

    return (
        <>
            <h2>견적 산정</h2>

            <div className='boardArea'>
                <strong /* onClick={()=> console.log(productList)} */>견적 산정</strong>
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
                            <Products data={data} productList={productList} setProductList={setProductList} productIdx={i} key={productList.lenght}/>
                        </li>
                    )}
                </ol>
                <button className='btn-point'
                    onClick={()=>setProductList(prev=>([...prev, {...productObj}]))}
                >제품 추가</button>
            </div>

            <div className='finalArea'>
                <strong>최종 견적</strong>
                <dl>
                    <dt>총 금액</dt>
                    <dd>{productList?.filter((data)=>data.total_price).map((data)=>data.total_price)?.length && productList?.filter((data)=>data.total_price).map((data)=>data.total_price).reduce((prev, next)=> { return prev + next}).toLocaleString()}</dd>
                </dl>
                <dl>
                    <dt>할인 금액</dt>
                    <dd>0</dd>
                </dl>
                <dl>
                    <dt>최종 금액</dt>
                    <dd>{productList?.filter((data)=>data.total_price).map((data)=>data.total_price)?.length && productList?.filter((data)=>data.total_price).map((data)=>data.total_price).reduce((prev, next)=> { return prev + next}).toLocaleString()}</dd>
                </dl>
            </div>

            <div className='commentArea'>
                <strong>내용</strong>
                <textarea name="comment" ref={commentRef}></textarea>
            </div>
            
            <div className="buttonArea">
                <button className='btn-point'
                    // onClick={onSave}
                >저장</button>
                <button className='btn-point-border'
                    onClick={onSubmit}
                >견적 전송</button>
            </div>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

