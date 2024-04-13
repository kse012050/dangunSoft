import React from 'react';
import { Link } from 'react-router-dom';
import EstimateLink from '../components/EstimateLink';

export default function Solution() {
    return (
        <>
            <section className='topArea'>
                <h2>JetBrains AI</h2>
                <b>
                    JetBrains 제품에 강력한 AI 기능을 결합해서 
                    개발자의 생산성을 더욱 극대화 합니다.
                </b>
                <p>
                    JetBrains AI를 사용하면 지금까지와는 다르게<br/>
                    IDE(통합 개발 환경)에서 더 많은 정보와 더 많은 기능을 사용할 수 있습니다.
                </p>
                <EstimateLink />
            </section>

            <section className='aboutArea'>
                <h3>About JetBrains AI</h3>
                <p>JetBrains AI는 IDE(통합 개발 환경) 내부에 AI 채팅, 리팩토링, 자동 완성, 런타임 에러 설명 등 강력한 AI 기능을 제공하는 플러그인입니다. JetBrains AI Service가 IDE와 LLM(대규모 언어 모델)을 안전하게 연결하여 IDE 내부에 다양한 AI 서비스를 제공합니다. JetBrains AI는 IDE에 열린 프로젝트 컨텍스트를 깊게 이해하고 있으며 이를 통해 사용자에게 최적화된 정보와 기능을 제공할 수 있습니다. JetBrains의 상업용 IDE 라이선스가 있는 경우 평가판을 통해 JetBrains AI를 경험할 수 있습니다.</p>
                <Link to='/estimate' className='btn-border-white'>견적요청</Link>
                <ul>
                    <li>
                        <strong>리팩토링</strong>
                        <p>JetBrains AI는 프로젝트 컨텍스트를 분석해서 정확한 리팩토링을 제안합니다. JetBrains AI의 리팩토링을 통해 프로젝트의 원하는 부분을 빠르고 안전하게 변경할 수 있습니다.</p>
                    </li>
                    <li>
                        <strong>AI 채팅</strong>
                        <p>JetBrains AI는 IDE(통합 개발 환경)에서 바로 사용 가능한 AI 채팅 기능을 제공합니다. JetBrains AI는 프로젝트에 대한 깊은 이해를 바탕으로 가장 정확한 답변을 제공합니다.</p>
                    </li>
                    <li>
                        <strong>코드 자동 완성</strong>
                        <p>사용자가 코드 입력을 시작하면 JetBrains AI가 주변 코드를 분석해서 가장 관련성이 높은 코드를 제안합니다. JetBrains AI의 코드 자동 완성 기능을 통해 반복적인 코드를 빠르게 작성할 수 있습니다.</p>
                    </li>
                </ul>
            </section>

            <section className='advantageArea'>
                <h3>주요 이점</h3>
                <p>
                    JetBrains AI를 사용하면 IDE(통합 개발 환경)에 다양한 AI 기능이 추가됩니다.<br/>
                    또한 JetBrains AI는 데이터 및 코드 보안을 보장하므로 IDE에서 안전하게 AI 기능을 사용할 수 있습니다.
                </p>
                <ul>
                    <li>
                        <b>AI 기능의 다양성</b>
                        <p>JetBrains AI는 AI 채팅부터 리팩토링, 런타임 에러 설명, 코드 자동 완성, 유닛 테스트 생성, 문서화에 이르기까지 다양한 AI 기능을 제공합니다.</p>
                    </li>
                    <li>
                        <b>IDE와 완벽한 통합</b>
                        <p>JetBrains AI는 JetBrains IDE(통합 개발 환경)의 UI와 완벽하게 통합됩니다. 따라서 사용자들은 IDE 내부에서 다양한 AI 기능을 쾌적하게 사용할 수 있습니다.</p>
                    </li>
                    <li>
                        <b>안전성</b>
                        <p>JetBrains는 데이터 및 코드 보안을 그 무엇보다 중요하게 생각합니다. JetBrains AI는 필요 이상의 데이터를 LLM에 보내지 않습니다. 또한 JetBrains 와 LLM 제공 업체는 고객의 데이터를 절대로 모델 교육에 사용하지 않습니다.</p>
                    </li>
                </ul>
            </section>

            <section className='purchaseBox-black'>
                <h3>구매 옵션</h3>
                <div>
                    <b><span>상업용</span></b>
                    <ul>
                        <li title='신규'>
                            <span>
                                $200<br/>
                                (VAT 포함가 $220)
                            </span>
                        </li>
                        <li title='모든 기능'><span title='포함'></span></li>
                        <li title='라이선스 공유'><span title='포함'></span></li>
                        <li title='기술 문의'><span title='포함'></span></li>
                        <li title='라이선스 소유'><span>법인</span></li>
                        <li><span><Link to='/estimate' className='btn-border-white'>견적요청</Link></span></li>
                    </ul>
                </div>
                <div>
                    <b><span>개인용</span></b>
                    <ul>
                        <li title='신규'>
                            <span>
                                $100<br/>
                                (VAT 포함가 $110)
                            </span>
                        </li>
                        <li title='모든 기능'><span title='포함'></span></li>
                        <li title='라이선스 공유'><span></span></li>
                        <li title='기술 문의'><span></span></li>
                        <li title='라이선스 소유'><span>개인</span></li>
                        <li><span><Link to='/estimate' className='btn-border-white'>견적요청</Link></span></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

