import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { urlParams } from '../js/common';

export default function BuyResult() {
    const { idx } = urlParams(useLocation())
    const navigate = useNavigate();

    const buyDetail = JSON.parse(sessionStorage.getItem('buyDetail'))

    useEffect(()=>{
        buyDetail || navigate('/product')
        // console.log(buyDetail);
        sessionStorage.setItem('buyDetail', sessionStorage.getItem('buyDetail'))
        return () => {
            sessionStorage.removeItem('buyDetail')
        }
    },[buyDetail, navigate])

    return (
        <section>
            <h2>ご購入が完了しました。</h2>
            <p>ライセンスは確認後、記載のメールでにお伝えします。</p>

            <div className='productBox'>
                {buyDetail?.order_product_list && buyDetail?.order_product_list.map((data)=>
                    <figure>
                        {idx &&
                            <img src={require(`../images/${idx}.png`)} alt="" />
                        }
                            <figcaption>
                                <strong>{data.product_name} {data.option_name}</strong>
                                <p>{data.total_price.toLocaleString()}円</p>
                                <div>{data.order_quantiry}つ</div>
                            </figcaption>
                    </figure>
                )}
                <dl className="amountBox">
                    <dt>合計 (税込み)</dt>
                    <dd>{buyDetail?.order_product_list?.[0]?.total_price.toLocaleString()}円</dd>
                </dl>
            </div>
            
            <div className='resultBox'>
                <strong>ご注文者情報</strong>
                <dl>
                    <dt>名前</dt>
                    <dd>{buyDetail?.write_name}</dd>
                </dl>
                <dl>
                    <dt>会社名</dt>
                    <dd>{buyDetail?.company_name}</dd>
                </dl>
                <dl>
                    <dt>電話番号</dt>
                    <dd>{buyDetail?.contact_Information}</dd>
                </dl>
                <dl>
                    <dt>メール</dt>
                    <dd>{buyDetail?.email}</dd>
                </dl>

                <strong>ライセンスユーザー情報</strong>
                <dl>
                    <dt>名前</dt>
                    <dd>{buyDetail?.license_info_obj.write_name}</dd>
                </dl>
                <dl>
                    <dt>名前(英語)</dt>
                    <dd>{buyDetail?.license_info_obj.write_name_en}</dd>
                </dl>
                <dl>
                    <dt>会社名</dt>
                    <dd>{buyDetail?.license_info_obj.company_name}</dd>
                </dl>
                <dl>
                    <dt>会社名(英語)</dt>
                    <dd>{buyDetail?.license_info_obj.company_name_en}</dd>
                </dl>
                <dl>
                    <dt>郵便番号</dt>
                    <dd>{buyDetail?.license_info_obj.post_code}</dd>
                </dl>
                <dl>
                    <dt>住所</dt>
                    <dd>{buyDetail?.license_info_obj.address} {buyDetail?.license_info_obj.address_detail}</dd>
                </dl>
                <dl>
                    <dt>郵便番号(英語)</dt>
                    <dd>{buyDetail?.license_info_obj.post_code_en}</dd>
                </dl>
                <dl>
                    <dt>住所(英語)</dt>
                    <dd>{buyDetail?.license_info_obj.address_en} {buyDetail?.license_info_obj.address_detail_en}</dd>
                </dl>
                <dl>
                    <dt>電話番号</dt>
                    <dd>{buyDetail?.license_info_obj.contact_information}</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>{buyDetail?.license_info_obj.email}</dd>
                </dl>
                <dl>
                    <dt>要求事項</dt>
                    <dd>{buyDetail?.comment}</dd>
                </dl>

                <strong>決済情報</strong>
                <dl>
                    <dt>決済方法</dt>
                    <dd>
                        クレジットカード
                        결제 방법
                    </dd>
                </dl>
            </div>

            <Link to='/product' className='btn-bg'>確認</Link>
        </section>
    );
}

