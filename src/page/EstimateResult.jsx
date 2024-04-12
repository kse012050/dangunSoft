import React from 'react';

export default function EstimateResult() {
    return (
        <section>
            <h2>견적 요청이 완료되었습니다.</h2>
            <p>
                확인 후 메일로 회신드리겠습니다.<br/>
                감사합니다.
            </p>
            <div className='resultBox'>
                <dl>
                    <dt>제조사</dt>
                    <dd>제조사명 노출</dd>
                </dl>
                <dl>
                    <dt>제품명</dt>
                    <dd>제품명 노출</dd>
                </dl>
                <dl>
                    <dt>옵션</dt>
                    <dd>옵션 선택 노출</dd>
                </dl>
                <dl>
                    <dt>수량</dt>
                    <dd>5</dd>
                </dl>
                <dl>
                    <dt>구독옵션</dt>
                    <dd>신규</dd>
                </dl>
                <dl>
                    <dt>기업명</dt>
                    <dd>기업명 노출</dd>
                </dl>
                <dl>
                    <dt>이름</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>후리가나</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>dykang@tangunsoft.com</dd>
                </dl>
                <dl>
                    <dt>연락처</dt>
                    <dd>010-5555-5555</dd>
                </dl>
                <dl>
                    <dt>비고</dt>
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
        </section>
    );
}

