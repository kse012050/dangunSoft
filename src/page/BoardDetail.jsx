import React from 'react';
import { Link } from 'react-router-dom';

export default function BoardDetail() {
    return (
        <section>
            <h2>お問い合わせ掲示板</h2>
            <strong>프로모션으로 제품을 구매했는데요~ 문의드려요~ 프로모션으로 제품을 구매했는데요~</strong>
            <dl>
                <dt>名前</dt>
                <dd>홍길동</dd>
            </dl>
            <dl>
                <dt>企業名</dt>
                <dd>기업명명</dd>
            </dl>
            <div className='detailArea'>
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
            </div>
            <div className='answerArea'>
                안녕하세요.<br/>
                <br/>
                답변드립니다~ 답변답변답변<br/>
                답변답변답변<br/>
                답변답변답변<br/>
                답변답변답변<br/>
                답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변<br/>
                <br/>
                감사합니다.
            </div>
            <Link to='/support/board' className='btn-border-black'>リスト</Link>
        </section>
    );
}

