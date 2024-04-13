import React from 'react';
import { Link } from 'react-router-dom';
import EstimateLink from '../components/EstimateLink';

export default function Main() {
    return (
        <>
            <section className='welcomeArea'>
                <h2>
                    Welcome to the <br className='pc_tablet'/>
                    NATTOSYSTEM
                </h2>
                <p>
                    NATTOSYSTEM은 JetBrains 공식 공급 기업입니다.
                    당사는 제품에 대한 전문적인 지식을 바탕으로<br className='pc_tablet'/>
                    고객들의 개발 환경, 고객이 당면한 문제점 등을 파악하여 
                    그에 맞는 제품과 서비스를 합리적인 가격으로 제공합니다. 
                </p>
                <EstimateLink />
            </section>

            <section className='productArea'>
                <div>
                    <h3>주요제품</h3>
                    <p>JetBrains는 소프트웨어 개발에 필요한 모든 도구를 제공합니다. JetBrains는 단순한 코딩 지원뿐만 아니라 코드 품질 검사, 협업 등 모든 개발 과정을 지원합니다.</p>
                </div>
                <ul>
                    <li style={{'--styleIdx': 2}}>
                        <Link to='/product/0'>
                            <strong>IntelliJ IDEA</strong>
                            <p>IntelliJ IDEA는 Java 와 Kotlin 개발자를 위한 IDE(통합 개발 환경) 입니다. IntelliJ IDEA의 지능적인 코드 완성으로 개발자의 생산성이 증가합니다. 또한 IntelliJ IDEA의 다양한 프레임워크 지원으로 개발자가 자유롭게 개발할 수 있습니다.</p>
                        </Link>
                    </li>
                    <li style={{'--styleIdx': 0}}>
                        <Link to='/product/0'>
                            <strong>All Products Pack</strong>
                            <p>All Products Pack은 말 그대로 모든 JetBrains 데스크탑 도구를 단 하나의 라이선스에 담은 제품입니다. 이제 All Products Pack을 통해 수많은 라이선스를 더욱 경제적으로 사용할 수 있습니다.</p>
                        </Link>
                    </li>
                    <li style={{'--styleIdx': 22}}>
                        <Link to='/product/0'>
                            <strong>Qodana</strong>
                            <p>Qodana는 코드 품질 검사 플랫폼입니다. Qodana의 2천5백여 개의 코드 검사는 코드 품질을 더욱 높여줍니다. 또한 Qodana의 라이선스 감사 기능은 부적절한 라이선스 사용을 방지합니다.</p>
                        </Link>
                    </li>
                    <li style={{'--styleIdx': 8}}>
                        <Link to='/product/0'>
                            <strong>WebStorm</strong>
                            <p>WebStorm은 JavaScript 와 TypeScript 를 위한 IDE(통합 개발 환경) 입니다. WebStorm은 React를 시작으로 Vue, Angular, NodeJS 까지 다양한 기술 스택을 완벽하게 지원합니다.</p>
                        </Link>
                    </li>
                    <li style={{'--styleIdx': 1}}>
                        <Link to='/product/0'>
                            <strong>JetBrains AI</strong>
                            <p>JetBrains AI는 IDE(통합 개발 환경) 내부에 강력한 AI 기능을 제공하는 JetBrains 플러그인 입니다. JetBrains AI는 AI 채팅 부터 리팩토링, 런타임 에러 설명, 코드 완성 까지 수많은 AI 기능을 제공합니다.</p>
                        </Link>
                    </li>
                </ul>
            </section>

            <section className='functionArea'>
                <h3>주요기능</h3>
                <p>JetBrains는 더욱 편리한 코딩 환경 및 협업 환경을 제공합니다.</p>
                <ul data-styleidx>
                    <li>
                        <strong>코딩 지원</strong>
                        <p>JetBrains 제품은 코드 완성부터 코드 중복 검사, 디버거, 역 컴파일러 등 다양한 코딩 지원 기능을 제공합니다. 특히 JetBrains AI의 등장으로 이전과는 차원이 다른 개발 흐름을 경험할 수 있습니다.</p>
                    </li>
                    <li>
                        <strong>모든 기술 스택 지원</strong>
                        <p>JetBrains 제품은 프로그래밍 언어, 프레임워크, 플랫폼 등 다양한 기술 스택을 지원합니다. 개발자는 JetBrains를 통해 원하는 기술을 제한없이 자유롭게 사용할 수 있습니다.</p>
                    </li>
                    <li>
                        <strong>협업</strong>
                        <p>현대의 소프트웨어 개발 과정은 이전보다 훨씬 복잡하게 구성됩니다. 이제 각 분야 전문가들의 협력은 필수적입니다. JetBrains의 모든 제품에는 간편한 협업 기능이 제공됩니다. 특히 JetBrains의 팀툴을 사용하면 팀원 간 협업 능력을 크게 향상시킬 수 있습니다.</p>
                    </li>
                    <li>
                        <strong>플러그인</strong>
                        <p>JetBrains 플러그인은 JetBrains 제품 기능을 무제한으로 확장할 수 있도록 도와줍니다. JetBrains 플러그인 에코시스템은 개발자에게 필요한 모든 검증된 플러그인을 보유하고 있습니다.</p>
                    </li>
                    <li>
                        <strong>모든 환경 지원</strong>
                        <p>JetBrains는 가능한 모든 개발 환경을 지원합니다. JetBrains를 통해 온라인부터 오프라인, 클라우드, 온프레미스, 원격 환경에 이르기까지 다양한 환경에서 작업이 가능합니다.</p>
                    </li>
                </ul>
            </section>

            <section className='nattoArea'>
                <h3><img src={require('../images/main-logo.png')} alt="NATTOSYSYEM" /></h3>
                <div>
                    <strong>마스코트</strong>
                    <dl>
                        <dt>누루</dt>
                        <dd>
                            윤기나는 건강한 낫또가 되는게 목표인 낫또 마을의 1등 노란 콩 누루.<br/>
                            누루는 끈적임이 강해 그 누구든 누루에게 착! 붙는 순간 누루와 친해질 수 있습니다.
                        </dd>
                    </dl>
                    <dl>
                        <dt>츠루</dt>
                        <dd>
                            아직 작은 완두콩에 불과한 츠루지만 누구보다 현명하고 밝은 성격을 가지고 있습니다.<br className='mobile'/>
                            츠루는 누루가 어떠한 어려움에 빠져서 척척 해결해주는 고마운 해결사이자 둘도 없는 친구 입니다.
                        </dd>
                    </dl>
                </div>
            </section>

            <div className='snsArea'>
                <strong>Friends with <mark>NATTOSYSTEM</mark></strong>
                <p>지금 NATTOSYSTEM과 친구 맺고 최신 소식과 할인 혜택을 받아보세요!</p>
                <ul data-styleidx>
                    <li>
                        @Twitter
                        <Link to=''>+ 친구</Link>
                    </li>
                    <li>
                        @Line_ID
                        <Link to=''>+ 친구</Link>
                    </li>
                </ul>
            </div>

            <section className='inquiryArea'>
                <h3>문의하기</h3>
                <ul data-styleidx>
                    <li>
                        <b>Phone</b>
                        <Link to=''>+82-10-3951-6206</Link>
                    </li>
                    <li>
                        <b>Email</b>
                        <Link to=''>info@nattosystem.com</Link>
                    </li>
                    <li>
                        <b>Address</b>
                        <p>東京都江東区豊洲六丁目２番<br className='tablet_mobile'/>３１－１９１７号</p>
                    </li>
                </ul>
                <form>
                    <fieldset>
                        <strong>Get in Touch</strong>
                        <ul>
                            <li>
                                <label htmlFor="">이름</label>
                                <div>
                                    <input type="text" placeholder='성'/>
                                    <input type="text" placeholder='이름'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">Email</label>
                                <div>
                                    <input type="text" placeholder='이메일 주소를 입력해 주세요'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">주소</label>
                                <div>
                                    <input type="text" placeholder='주소를 입력해 주세요'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">비고</label>
                                <div>
                                    <input type="text" placeholder='문의를 남겨주세요'/>
                                </div>
                            </li>
                        </ul>
                         <input type="submit"  value='확인'/>
                    </fieldset>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.208763150456!2d139.78802818820756!3d35.64722786119988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018899618e75f09%3A0x9024041a7f367e9a!2z5pel5pys44CB44CSMTM1LTAwNjEg5p2x5Lqs6YO95rGf5p2x5Yy66LGK5rSy77yW5LiB55uu77yS4oiS77yT77yRIOOCueOCq-OCpOOCuuOCv-ODr-ODvCbjgqzjg7zjg4fjg7MgMTkxNw!5e0!3m2!1sja!2skr!4v1712521574682!5m2!1sja!2skr" title='東京都江東区豊洲六丁目２番３１－１９１７号' loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </section>
        </>
    );
}

