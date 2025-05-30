import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { adminApi } from '../../api/api';

export default function Detail() {
    const { id } = useParams()
    const [detail, setDetail] = useState()

    useLayoutEffect(()=>{
        adminApi('order/detail', '', {order_id: id})
            .then((result)=>{
                // console.log(result.data.file_info);
                if(result.result){
                    setDetail({...result.data})
                }
            })
    },[id])

    return (
        <>
            <h2>구매 상세 정보</h2>   

            <div className='infoBox'>
                <strong>고객 정보</strong>
                <ul>
                    <li>
                        <span>No.</span>
                        <div>
                            <p>{ detail?.board_id }</p>
                        </div>
                    </li>
                    <li>
                        <span>주문번호</span>
                        <div>
                            <p>{ detail?.order_code }</p>
                        </div>
                    </li>
                    <li>
                        <span>결제금액</span>
                        <div>
                            <p>{ detail?.final_pay_price.toLocaleString() }</p>
                        </div>
                    </li>
                    <li>
                        <span>상태</span>
                        <div>
                            <p>
                                { detail?.state === 'request' && '결제 요청' }
                                { detail?.state === 'complete' && '결제 완료' }
                                { detail?.state === 'cancel' && '결제 전 취소' }
                                { detail?.state === 'refund' && '환불(결제 후 취소)' }
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>결제정보</span>
                        <div>
                            <p>
                                {/* { detail?.state === 'request' && detail?.charge_info_obj }
                                { detail?.state === 'refund' && detail?.refund_charge_info_obj } */}
                                { detail?.state === 'complete' && detail?.charge_info_obj?.id}
                                { detail?.state === 'refund' && detail?.refund_charge_info_obj?.id}
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>구매일시</span>
                        <div>
                            <p>{ detail?.reg_date }</p>
                        </div>
                    </li>
                </ul>

                {!!detail?.order_product_list?.length &&
                    <>
                        <strong>구매 상품 정보</strong>
                        <p>총 {detail?.order_product_list.length}건</p>
                        {detail?.order_product_list.map((data)=>
                            <ul data-count key={data.order_with_product_id}>
                                <li>
                                    <span>벤더사</span>
                                    <div>
                                        <p>{ data.vendor_name }</p>
                                    </div>
                                </li>
                                <li>
                                    <span>제품명</span>
                                    <div>
                                        <p>{ data.product_name }</p>
                                    </div>
                                </li>
                                <li>
                                    <span>옵션</span>
                                    <div>
                                        <p>{ data.option_name }</p>
                                    </div>
                                </li>
                                <li>
                                    <span>수량</span>
                                    <div>
                                        <p>{ data.order_quantiry }</p>
                                    </div>
                                </li>
                                <li>
                                    <span>구독 옵션</span>
                                    <div>
                                        <p>{ data.option_price_type }</p>
                                    </div>
                                </li>
                                {/* <li>
                                    <span>구독 기간</span>
                                    <div>
                                        <p>{ data.option_price_info_obj }</p>
                                    </div>
                                </li> */}
                                <li>
                                    <span>견적 금액</span>
                                    <div>
                                        <p>{ data.total_price.toLocaleString() }</p>
                                    </div>
                                </li>
                                <li className='full'>
                                    <span>최종 금액</span>
                                    <div>
                                        <p>{ data.total_price.toLocaleString() }</p>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </>
                }

                {!!detail?.file_info && 
                    <>
                        <strong>첨부파일</strong>
                        <div className='fileArea'>
                            <iframe src={detail.file_info.file_url} title='pdf 파일'></iframe>
                        </div>
                    </>
                }

                {/* <strong>동의 정보</strong>
                <div className='agreeArea'>
                    <input type="checkbox" id='order' defaultChecked/>
                    <label htmlFor="">주문 동의</label>
                    <input type="checkbox" id='privacy'/>
                    <label htmlFor="">개인정보 취급위탁 동의</label>
                </div> */}
            </div>
        </>
    );
}

