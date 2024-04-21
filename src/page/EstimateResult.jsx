import React from 'react';
import { Link } from 'react-router-dom';

export default function EstimateResult() {
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
                    <dd>제조사명 노출</dd>
                </dl>
                <dl>
                    <dt>製品</dt>
                    <dd>제품명 노출</dd>
                </dl>
                <dl>
                    <dt>オプション</dt>
                    <dd>옵션 선택 노출</dd>
                </dl>
                <dl>
                    <dt>数量</dt>
                    <dd>5</dd>
                </dl>
                <dl>
                    <dt>サブスクリプションオプション</dt>
                    <dd>신규</dd>
                </dl>
                <dl>
                    <dt>企業名</dt>
                    <dd>기업명 노출</dd>
                </dl>
                <dl>
                    <dt>名前</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>ふりがな</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>dykang@tangunsoft.com</dd>
                </dl>
                <dl>
                    <dt>電話番号</dt>
                    <dd>010-5555-5555</dd>
                </dl>
                <dl>
                    <dt>備考</dt>
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
            </div>
            
            <Link to='/' className='btn-bg'>確認</Link>
        </section>
    );
}

