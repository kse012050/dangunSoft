import React, { useLayoutEffect, useState } from 'react';
import { adminApi } from '../../api/api';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
    const { id } = useParams()
    const [detail, setDetail] = useState()

    useLayoutEffect(()=>{
        adminApi('board/detail', '', {board_id: id})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setDetail(result.data)
                }
            })
    },[id])

    return (
        <>
            <h2>견적 요청 상세 정보</h2>

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
                        <span>작성시간</span>
                        <div>
                            <p>{ detail?.reg_date }</p>
                        </div>
                    </li>
                    <li>
                        <span>글쓴이</span>
                        <div>
                            <p>{ detail?.write_name }</p>
                        </div>
                    </li>
                    <li>
                        <span>기업명</span>
                        <div>
                            <p>{ detail?.company_name }</p>
                        </div>
                    </li>
                    <li>
                        <span>이메일</span>
                        <div>
                            <p>{ detail?.email }</p>
                        </div>
                    </li>
                    <li>
                        <span>연락처</span>
                        <div>
                            <p>{ detail?.contact_information }</p>
                        </div>
                    </li>
                </ul>

                {!!detail?.order_product_list?.length &&
                    <>
                        <strong>견적 요청 제품</strong>
                        <p>총 {detail?.order_product_list.length}건</p>
                        {detail?.order_product_list?.map((data)=>
                            <ul data-count key={ data.product_option_id }>
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
                                <li>
                                    <span>기본 견적</span>
                                    <div>
                                        <p>{ data.total_price.toLocaleString() }</p>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </>
                }
                {detail?.order_product_list?.length &&
                    <div className='buttonArea'>
                        <Link to={`/admin/estimate/calculation/${id}`} className='btn-point'>견적 작성</Link>
                    </div>
                }
            </div>
        </>
    );
}

