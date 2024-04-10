import React from 'react';
import { iconList } from '../js/product'
import { Link } from 'react-router-dom';

export default function ProductDetail() {
    return (
        <>
            <section className='topArea' style={{'--styleTotal': iconList.length, '--styleIdx': 2}}>
                <h2>IntelliJ IDEA</h2>
                <p>
                    IntelliJ IDEA는 Java 와 Kotlin 개발을 위한 IDE(통합 개발 환경) 입니다.<br />
                    IntelliJ IDEA는 전세계 수많은 사용자들이 신뢰하는 강력한 코딩 지원 기능을 제공합니다.
                </p>
            </section>

            <section className='infoArea'>
                <h3>제품 정보</h3>
                <p>IntelliJ IDEA는 Java 와 Kotlin 개발을 위한 IDE(통합 개발 환경) 입니다. IntelliJ IDEA는 코딩 지원 기능은 물론이고 그 이상의 기능들로 IDE를 확장합니다. IntelliJ IDEA의 코드 완성, 정적 코드 분석, 리팩토링 등 강력한 코딩 지원 기능들은 개발자의 생산성을 극대화 합니다. 또한 Spring 및 Spring Boot, Jakarta EE, JPA, Reactor 등 주요 기술 및 프레임워크도 IntelliJ IDEA에서 사용할 수 있습니다. 만약 필요한 기능이 있다면 플러그인을 추가해 IntelliJ IDEA 기능을 확장할 수 있습니다. 전세계 Java 개발자의 78%가 선택한 IntelliJ IDEA는 Java와 Kotlin 개발을 위한 최고의 환경을 제공합니다.</p>
                <ul>
                    <li>
                        <div>
                            <strong>지능적인 코드 완성</strong>
                            <p>IntelliJ IDEA는 코드 완성 기능을 제공합니다. IntelliJ IDEA에서 코드 입력을 시작하면 프로젝트 전체에 대한 인덱싱을 기반으로 정확한 코드 완성을 제안합니다. 이를 통해 개발 시간을 절약할 수 있습니다.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>다이어그램</strong>
                            <p>IntelliJ IDEA는 다이어그램을 지원합니다. IntelliJ IDEA에서 대형 프로젝트를 개발할때 다이어그램을 사용하면 프로젝트 구조를 손쉽게 설계하고 파악할 수 있습니다.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>JVM 프레임워크</strong>
                            <p>IntelliJ IDEA는 Spring, Spring Boot, Jakarta EE, JPA, Reactor 등 다양한 프레임워크를 지원합니다. </p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className='purchaseBox-white'>
                <h3>구매 옵션</h3>
                <div>
                    <b><span>상업용</span></b>
                    <ul>
                        <li title='신규 구매'>
                            <span>
                                $599<br/>
                                (VAT 포함가 $658.90)
                            </span>
                        </li>
                        <li title='2년차 갱신'>
                            <span>
                                $479<br/>
                                (VAT 포함가 $526.90)
                            </span>
                        </li>
                        <li title='3년차 이상 갱신'>
                            <span>
                                $359<br/>
                                (VAT 포함가 $394.90)
                            </span>
                        </li>
                        <li title='모든 기능'><span title='포함'></span></li>
                        <li title='폴백 라이선스'><span title='포함'></span></li>
                        <li title='라이선스 공유'><span title='포함'></span></li>
                        <li title='기술 문의'><span title='포함'></span></li>
                        <li title='라이선스 소유'><span>법인</span></li>
                        <li><span><Link to='' className='btn-border-black'>견적요청</Link></span></li>
                        <li><span><Link to='' className='btn-bg'>구매하기</Link></span></li>
                    </ul>
                </div>
                <div>
                    <b><span>개인용개인용</span></b>
                    <ul>
                        <li title='신규 구매'>
                            <span>
                                $169<br/>
                                (VAT 포함가 $185.90)
                            </span>
                        </li>
                        <li title='2년차 갱신'>
                            <span>
                                $135<br/>
                                (VAT 포함가 $148.50)
                            </span>
                        </li>
                        <li title='3년차 이상 갱신'>
                            <span>
                                $101<br/>
                                (VAT 포함가 $111.10)
                            </span>
                        </li>
                        <li title='모든 기능'><span title='포함'></span></li>
                        <li title='폴백 라이선스'><span title='포함'></span></li>
                        <li title='라이선스 공유'><span></span></li>
                        <li title='기술 문의'><span></span></li>
                        <li title='라이선스 소유'><span>개인</span></li>
                        <li><span><Link to='' className='btn-border-black'>견적요청</Link></span></li>
                        <li><span><Link to='' className='btn-bg'>구매하기</Link></span></li>
                    </ul>
                </div>
            </section>

            <section className='subscribeArea'>
                <h3>구독 옵션</h3>
                <strong>상업용</strong>
                <p>법인(영리 및 비영리)은 상업적 용도로 사용할 소프트웨어가 필요한 경우 상업용 Toolbox(JetBrains 데스크탑 개발자 도구) 구독을 이용할 수 있습니다. 법인은 Toolbox 구독을 통해 얻은 소프트웨어를 모든 컴퓨터 및 운영체제에서 사용할 수 있습니다. 단, 소프트웨어의 동시 사용자 수의 합이 법인이 구매한 구독 수량을 초과할 수 없습니다.</p>
                <strong>개인용</strong>
                <p>개인의 자금으로 Toolbox(JetBrains 데스크탑 개발자 도구) 구독을 구매하려는 경우, 개인용 Toolbox 구독이 적합합니다. 개인용 Toolbox 구독은 어떤 방식으로든 회사가 구매 및 상환할 수 없습니다. 개인용 Toolbox 구독을 통해 얻은 소프트웨어는 회사 하드웨어를 포함한 모든 하드웨어에서 사용할 수 있습니다.</p>
            </section>

            <section className='FAQBox'>
                <h3>FAQ</h3>
                <ul>
                    <li>
                        <details>
                            <summary>JetBrains의 라이선스 모델은 무엇인가요?</summary>
                            <div>
                                내용
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>JetBrains Toolbox란 무엇인가요?</summary>
                            <div>
                                <p>JetBrains Toolbox는 JetBrains 데스크탑 개발자 도구입니다. JetBrains Toolbox는 월간 또는 연간 구독으로 사용할 수 있으며 다음 제품들을 포함합니다.</p>
                                <ul>
                                    <li>CLion</li>
                                    <li>DataGrip</li>
                                    <li>dotCover</li>
                                    <li>dotMemory</li>
                                    <li>dotTrace</li>
                                    <li>DataSpell</li>
                                    <li>GoLand</li>
                                    <li>IntelliJ IDEA</li>
                                    <li>PhpStorm</li>
                                    <li>PyCharm</li>
                                    <li>ReSharper</li>
                                    <li>ReSharper C++</li>
                                    <li>Rider</li>
                                    <li>RubyMine</li>
                                    <li>WebStorm</li>
                                </ul>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>영구 폴백 라이선스란 무엇인가요?</summary>
                            <div>
                                <p>영구 폴백 라이선스는 JetBrains Toolbox(JetBrains 데스크탑 개발자 도구) 제품을 1년 간 구독했을때 제공되는 라이선스입니다. 영구 폴백 라이선스를 통해 특정 버전의 제품을 영구적으로 사용할 수 있습니다. JetBrains Toolbox 제품의 연간 구독을 구매하면 구매 시점에 최신 버전으로 영구 폴백 라이선스가 제공됩니다.</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>여러 사용자가 동일한 상업용 라이선스를 사용할 수 있나요?</summary>
                            <div>
                                <p>여러 사용자가 동시에 하나의 라이선스를 사용할 수 없습니다. 만약 두 명의 사용자가 동시에 제품을 사용해야 한다면 사용자는 각자의 라이선스를 보유해야 합니다. 하지만 동시에 제품을 사용하지 않는 경우라면 여러 사용자가 하나의 라이선스를 공유할 수 있습니다.</p>
                            </div>
                        </details>
                    </li>
                </ul>
            </section>
        </>
    );
}

