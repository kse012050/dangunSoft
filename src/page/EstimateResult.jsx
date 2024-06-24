import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EstimateResult() {
    const navigate = useNavigate();

    const estimateDetail = JSON.parse(sessionStorage.getItem('estimateDetail'))

    useEffect(()=>{
        estimateDetail || navigate('/estimate')
        // console.log(estimateDetail);
        sessionStorage.setItem('estimateDetail', sessionStorage.getItem('estimateDetail'))
        return () => {
            sessionStorage.removeItem('estimateDetail')
        }
    },[estimateDetail, navigate])
    return (
        <section>
            <h2>見積もり依頼が完了しました。</h2>
            <p>
                見積もり依頼ありがとうございます。<br/>
                確認後、記載のメールで見積もりの金額をお知らせいたします。
             </p>
            <div className='resultBox'>
                <dl>
                    <dt>メーカー</dt>
                    <div>
                        { estimateDetail?.order_product_list.map((data, i)=>
                            <dd key={i}>{ data.vendor_name }</dd>
                        ) }
                    </div>
                </dl>
                <dl>
                    <dt>製品</dt>
                    <div>
                        { estimateDetail?.order_product_list.map((data, i)=>
                            <dd key={i}>{ data.product_name }</dd>
                        ) }
                    </div>
                </dl>
                <dl>
                    <dt>オプション</dt>
                    <div>
                        { estimateDetail?.order_product_list.map((data, i)=>
                            <dd key={i}>{ data.option_name }</dd>
                        ) }
                    </div>
                </dl>
                <dl>
                    <dt>数量</dt>
                    <div>
                        { estimateDetail?.order_product_list.map((data, i)=>
                            <dd key={i}>{ data.order_quantiry }</dd>
                        ) }
                    </div>
                </dl>
                <dl>
                    <dt>サブスクリプションオプション</dt>
                    <div>
                        { estimateDetail?.order_product_list.map((data, i)=>
                            // <dd key={i}>{ data.product_name }</dd>
                            <dd key={i}>
                                {data.option_price_type === '신규' && '新規'}
                                {data.option_price_type === '갱신' && '更新'}
                                {data.option_price_type === '업데이트' && 'アップグレード'}
                            </dd>
                        ) }
                    </div>
                </dl>
                <dl>
                    <dt>企業名</dt>
                    <dd>{ estimateDetail?.company_name }</dd>
                </dl>
                <dl>
                    <dt>名前</dt>
                    <dd>{ estimateDetail?.write_name }</dd>
                </dl>
                <dl>
                    <dt>ふりがな</dt>
                    <dd>{ estimateDetail?.phonetic_guide }</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>{ estimateDetail?.email }</dd>
                </dl>
                <dl>
                    <dt>電話番号</dt>
                    <dd>{ estimateDetail?.contact_information }</dd>
                </dl>
                <dl>
                    <dt>備考</dt>
                    <dd>
                        { estimateDetail?.comment }
                    </dd>
                </dl>
            </div>
            
            <Link to='/' className='btn-bg'>確認</Link>
        </section>
    );
}

