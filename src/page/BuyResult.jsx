import React from 'react';
import { Link } from 'react-router-dom';

export default function BuyResult() {
    return (
        <section>
            <h2>ご購入が完了しました。</h2>
            <p>ライセンスは確認後、記載のメールでにお伝えします。</p>

            <div className='productBox'>
                <figure>
                    <img src="https://placehold.co/120x120" alt="임시 이미지" />
                    <figcaption>
                        <strong>Mindiet MindManager Single New License</strong>
                        <p>475,000円</p>
                        <div>1つ</div>
                    </figcaption>
                </figure>
                <dl className='deliveryArea'>
                    <dt>税</dt>
                    <dd>0円</dd>
                </dl>
                <dl className="amountBox">
                    <dt>合計 (税込み)</dt>
                    <dd>475,000円</dd>
                </dl>
            </div>
            
            <div className='resultBox'>
                <strong>ご注文者情報</strong>
                <dl>
                    <dt>名前</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>会社名</dt>
                    <dd>일구팔오 / 개인</dd>
                </dl>
                <dl>
                    <dt>電話番号</dt>
                    <dd>010-5555-8888</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>dykang@tangunsoft.com</dd>
                </dl>

                <strong>ライセンスユーザー情報</strong>
                <dl>
                    <dt>名前</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>名前(英語)</dt>
                    <dd>Hong Gil Dong</dd>
                </dl>
                <dl>
                    <dt>会社名</dt>
                    <dd>홍길동 / 개인</dd>
                </dl>
                <dl>
                    <dt>会社名(英語)</dt>
                    <dd>Hong Gil Dong / 개인</dd>
                </dl>
                <dl>
                    <dt>郵便番号</dt>
                    <dd>우편번호</dd>
                </dl>
                <dl>
                    <dt>住所</dt>
                    <dd>서울시 서초구 서초대로 67 성령빌딩 2층</dd>
                </dl>
                <dl>
                    <dt>住所(英語)</dt>
                    <dd>67, Seocho-daero, Seocho-gu, Seoul, Republic of Korea</dd>
                </dl>
                <dl>
                    <dt>電話番号</dt>
                    <dd>010-5555-8888</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>dykang@tangunsoft.com</dd>
                </dl>
                <dl>
                    <dt>要求事項</dt>
                    <dd>
                        프로모션으로 제품을 구매했는데요~ 문의드려요~ 프로모션으로 제품을 구매했는데요~<br/>
                        문의드려요~ 프로모션으로 제품을 구매했는데요~<br/>
                        문의드려요~<br/>
                        문의드려요~<br/>
                        문의드려요~<br/>
                        문의드려요~<br/>
                        문의드려요~<br/>
                        문의드려요~<br/>
                        문의드려요~<br/>
                        문의드려요~
                    </dd>
                </dl>

                <strong>決済情報</strong>
                <dl>
                    <dt>決済方法</dt>
                    <dd>クレジットカード</dd>
                </dl>
            </div>

            <Link to='/' className='btn-bg'>確認</Link>
        </section>
    );
}

