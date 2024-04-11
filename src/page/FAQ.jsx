import React from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
    return (
        <section>
            <h2>FAQ</h2>
            <p>키워드를 검색하고 자주 묻는 질문을 확인하세요.</p>
            <div className='searchBox'>
                <input type="search" placeholder='ex) 라이선싱 모델 개요'/>
                <button>검색</button>
                <button>검색 지우기</button>
            </div>
            <div className='tabArea'>
                <button className='active'>전체</button>
                <button>구매</button>
                <button>지원</button>
                <button>라이선싱 모델 개요</button>
                <button>JetBrains 계정 도움말</button>
                <button>관리자 가이드</button>
                <button>기타</button>
            </div>
            <strong>구매</strong>
            <ul className='FAQBox'>
                <li>
                    <details>
                        <summary>Q.라이선스구매 순서는 어떻게 되나요?</summary>
                        <div>
                            내용
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.라이선스 발급은 얼마나 걸리나요?</summary>
                        <div>
                            입력하신메일 주소가 잘못된 경우나 메일이 정크로 빠지는 경우가 있습니다. 재확인을 부탁드리며, 만약 1~2일 기다려도 대답이 없는 경우에는 다시 문의를 해주시기바랍니다.
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.지불 옵션은 신용카드 결제만 가능한가요?</summary>
                        <div>
                            내용
                        </div>
                    </details>
                </li>
            </ul>
            <strong>지원</strong>
            <ul className='FAQBox'>
                <li>
                    <details>
                        <summary>Q.LINE으로 문의를 하였는데 답변은 언제 받을 수 있나요?</summary>
                        <div>
                            내용
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.메일으로 문의를 하였는데 답변은 언제 받을 수 있나요?</summary>
                        <div>
                            내용
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.어떤 언어로 지원 가능한가요?</summary>
                        <div>
                            내용
                        </div>
                    </details>
                </li>
            </ul>
            <strong>라이선싱 모델 개요</strong>
            <ul className='FAQBox'>
                <li>
                    <details>
                        <summary>Q.Toolbox구독 계악서에 명시된 '재배포 가능한 제품'이란 무엇인가요?</summary>
                        <div>
                            내용
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.JetBrains의 라이선스 모델은 무엇인가요?</summary>
                        <div>
                            내용
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.JetBrains Toolbox 구독의 이점은 무엇입니까?</summary>
                        <div>
                            내용
                        </div>
                    </details>
                </li>
            </ul>

            <div className='paginationBox'>
                <Link to=''>이전</Link>
                <ol>
                    <li><Link to='' className='active'>1</Link></li>
                    <li><Link to=''>2</Link></li>
                </ol>
                <Link to=''>다음</Link>
            </div>
        </section>
    );
}

