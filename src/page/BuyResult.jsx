import React from 'react';

export default function BuyResult() {
    return (
        <section>
            <h2>구매가 완료되었습니다.</h2>
            <p>라이센스는 기재하신 이메일로 영업일 기준 1~2일 이내로 납품됩니다.</p>

            <div className='productBox'>
                <figure>
                    <img src="https://placehold.co/120x120" alt="임시 이미지" />
                    <figcaption>
                        <strong>Mindiet MindManager Single New License</strong>
                        <p>475,000원</p>
                        <div>1개</div>
                    </figcaption>
                </figure>
                <dl className='deliveryArea'>
                    <dt>배송비</dt>
                    <dd>0원</dd>
                </dl>
                <dl className="amountBox">
                    <dt>최종 결제 금액</dt>
                    <dd>475,000원</dd>
                </dl>
            </div>
            
            <div className='resultBox'>
                <strong>주문자 정보</strong>
                <dl>
                    <dt>주문자 이름</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>주문자 회사명</dt>
                    <dd>일구팔오 / 개인</dd>
                </dl>
                <dl>
                    <dt>연락처</dt>
                    <dd>010-5555-8888</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>dykang@tangunsoft.com</dd>
                </dl>

                <strong>라이선스 사용자 정보</strong>
                <dl>
                    <dt>사용자 이름</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>사용자 이름(영문)</dt>
                    <dd>Hong Gil Dong</dd>
                </dl>
                <dl>
                    <dt>사용자 회사명</dt>
                    <dd>홍길동 / 개인</dd>
                </dl>
                <dl>
                    <dt>사용자 회사명(영문)</dt>
                    <dd>Hong Gil Dong / 개인</dd>
                </dl>
                <dl>
                    <dt>우편번호</dt>
                    <dd>우편번호</dd>
                </dl>
                <dl>
                    <dt>사용자 주소</dt>
                    <dd>서울시 서초구 서초대로 67 성령빌딩 2층</dd>
                </dl>
                <dl>
                    <dt>우편번호(영문)</dt>
                    <dd>우편번호</dd>
                </dl>
                <dl>
                    <dt>사용자 주소(영문)</dt>
                    <dd>67, Seocho-daero, Seocho-gu, Seoul, Republic of Korea</dd>
                </dl>
                <dl>
                    <dt>연락처</dt>
                    <dd>010-5555-8888</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>dykang@tangunsoft.com</dd>
                </dl>
                <dl>
                    <dt>주문 시 요구사항</dt>
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

                <strong>결제 정보</strong>
                <dl>
                    <dt>결제 방법</dt>
                    <dd>신용카드 (OO카드 / 5555)</dd>
                </dl>
            </div>
        </section>
    );
}

