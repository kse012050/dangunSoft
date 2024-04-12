import React from 'react';
import Select from '../components/Select';
import { useNavigate } from 'react-router-dom';

export default function Buy() {
    const navigate = useNavigate();

    return (
        <section>
            <h2>구매하기</h2>
            <div className='productBox'>
                <figure>
                    <img src="https://placehold.co/120x120" alt="임시 이미지" />
                    <figcaption>
                        <strong>Mindiet MindManager Single New License</strong>
                        <p>475,000원</p>
                        <div>
                            <button>-</button>
                            1
                            <button>+</button>
                        </div>
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
            <form>
                <fieldset className='inputBox'>
                    <strong>주문자 정보</strong>
                    <ul>
                        <li>
                            <label htmlFor="">주문자 이름</label>
                            <div>
                                <input type="text" placeholder='이름을 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">주문자 회사명</label>
                            <div>
                                <input type="text" placeholder='회사명을 입력해 주세요'/>
                                <input type="checkbox" />
                                <label htmlFor="">개인</label>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">연락처</label>
                            <div>
                                <input type="text" placeholder='연락처를 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <div>
                                <input type="text" placeholder='연락처를 입력해 주세요'/>
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <fieldset className='inputBox'>
                    <strong>라이선스 사용자 정보 (담당자)</strong>
                    <ul>
                        <li>
                            <label htmlFor="">사용자 이름</label>
                            <div>
                                <input type="text" placeholder='이름을 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">사용자 이름(영문)</label>
                            <div>
                                <input type="text" placeholder='영문 이름을 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">사용자 회사명</label>
                            <div>
                                <input type="text" placeholder='회사명을 입력해 주세요'/>
                                <input type="checkbox" />
                                <label htmlFor="">개인</label>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">사용자 회사명(영문)</label>
                            <div>
                                <input type="text" placeholder='영문 회사명을 입력해 주세요'/>
                                <input type="checkbox" />
                                <label htmlFor="">개인</label>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">우편번호</label>
                            <div>
                                <Select />
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">사용자 주소</label>
                            <div>
                                <input type="text" placeholder='주소를 입력해 주세요'/>
                            </div>
                            <div>
                                <input type="text" placeholder='상세 주소를 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">우편번호(영문)</label>
                            <div>
                                <input type="text" placeholder='영문 도로명 및 우편번호를 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">사용자 주소(영문)</label>
                            <div>
                                <input type="text" placeholder='영문 주소를 입력해 주세요'/>
                            </div>
                            <div>
                                <input type="text" placeholder='상세 주소를 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">연락처</label>
                            <div>
                                <input type="text" placeholder='연락처를 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <div>
                                <input type="text" placeholder='이메일을 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">주문 시 요구사항</label>
                            <div>
                                <textarea name="" id=""></textarea>
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <fieldset className='inputArea'>
                    <strong>결제 정보</strong>
                    <ul>
                        <li>
                            <label htmlFor="">결제 방법</label>
                            <div>
                                <input type="radio" defaultChecked/>
                                <label htmlFor="">신용카드</label>
                                <input type="radio" />
                                <label htmlFor="">무통장입금</label>
                            </div>
                            <div>
                                <p>카드 : 현대카드, 국민카드, 롯데카드, 삼성카드, 비씨카드, 신한카드, 하나(외환)카드, NH농협카드</p>
                                {/* <dl>
                                    <dt>계좌번호</dt>
                                    <dd></dd>
                                </dl>
                                <dl>
                                    <dt>예금주</dt>
                                    <dd></dd>
                                </dl>
                                <p>입금 확인은 자동으로 진행되며 확인이 완료되면 영업일 기준 1-2일 이내로 라이선스 증서를 받아보실 수 있습니다.</p> */}
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <fieldset className='inputArea'>
                    <strong>최종 주문</strong>
                    <ul>
                        <li>
                            <label htmlFor="">주문 동의</label>
                            <p>주문할 상품의 상품명, 상품가격, 배송정보를 확인 하였으며, 구매에 동의하시겠습니까?</p>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">동의합니다. (전자상거래법 제8조 2항)</label>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">개인정보 취급위탁 동의</label>
                            <p>주문 처리 및 배송을 위한 목적으로만 제공됩니다.</p>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">동의합니다. 약관전체보기</label>
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <dl className="amountBox">
                    <dt>최종 결제 금액</dt>
                    <dd>475,000원</dd>
                </dl>
                <div className='submitBox'>
                    <input type="reset" className='btn-border-black' value='취소'/>
                    <input type="submit" className='btn-bg' value='확인' onClick={()=>navigate('/buyResult')}/>
                </div>
            </form>
        </section>
    );
}

