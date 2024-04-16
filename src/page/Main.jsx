import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import EstimateLink from '../components/EstimateLink';
import { Pagination } from 'swiper/modules';

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
                    <h3>主な製品</h3>
                    <p>JetBrainsは、ソフトウェア開発に必要なすべてのツールを提供します。JetBrainsは、単純なコーディングサポートだけでなく、コード品質チェック、コラボレーションなど、すべての開発プロセスをサポートします。</p>
                </div>
                <Swiper
                    modules={[Pagination]}
                    pagination={true}
                    breakpoints={{
                        // 해상도가 768px 미만일 때
                        1023: {
                            slidesPerView: 1, // 슬라이드 뷰 1개
                            // allowSlideNext: true,
                            // allowSlidePrev: true,
                            pagination: true
                        },
                        // 해상도가 768px 이상일 때
                        1024: {
                            slidesPerView: 'auto', // 슬라이드 뷰를 자동으로 설정
                            allowSlideNext: false,
                            allowSlidePrev: false,
                        },
                    }}
                >
                    {/* 슬라이드 추가 */}
                    <SwiperSlide>
                        <Link to='/product/0'>
                            <strong>IntelliJ IDEA</strong>
                            <p>IntelliJ IDEAは、JavaとKotlin開発者のためのIDE(統合開発環境)です。IntelliJ IDEAのスマートなコード完成により、開発者の生産性が向上します。 また、IntelliJ IDEAの多様なフレームワークのサポートにより、開発者が自由に開発することができます。</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/product/0'>
                            <strong>All Products Pack</strong>
                            <p>All Products Packは、文字通りJetBrainsのすべてのデスクトップツールを1つのライセンスにまとめた製品です。 All Products Packを利用することで、多数のライセンスをよりお得に利用できるようになりました。</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/product/0'>
                            <strong>Qodana</strong>
                            <p>Qodanaはコード品質検査プラットフォームです。Qodanaの2,500以上のコード検査は、コード品質をさらに向上させます。 また、Qodanaのライセンスチェック機能は、不適切なライセンスの使用を防止します。</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/product/0'>
                            <strong>WebStorm</strong>
                            <p>WebStormはJavaScriptとTypeScriptのためのIDE(統合開発環境)です。WebStormはReactをはじめ、Vue、Angular、NodeJSまでさまざまな技術スタックを完全にサポートします。</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/product/0'>
                            <strong>JetBrains AI</strong>
                            <p>JetBrains AIは、IDE(統合開発環境) 内部で強力なAI機能を提供するJetBrainsのプラグインです。JetBrains AIは、AIチャットからリファクタリング、ランタイムエラーの説明、コード完成まで、数多くのAI機能を提供します。</p>
                        </Link>
                    </SwiperSlide>
                    {/* 추가 슬라이드 */}
                </Swiper>
                
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
                <h3>主な機能</h3>
                <p>JetBrains는 더욱 편리한 코딩 환경 및 협업 환경을 제공합니다.</p>
                <ul data-styleidx>
                    <li>
                        <strong>コーディングサポート</strong>
                        <p>JetBrains製品は、コード完成からコード重複チェック、デバッガ、逆コンパイラなど、さまざまなコーディングサポート機能を提供します。特にJetBrains AIの登場により、これまでとは異なる開発フローを体験することができます。</p>
                    </li>
                    <li>
                        <strong>すべての技術スタックをサポート</strong>
                        <p>JetBrainsの製品は、プログラミング言語、フレームワーク、プラットフォームなど、さまざまな技術スタックをサポートしています。開発者は、JetBrainsを使用することで、好きな技術を制限なく自由に使用することができます。</p>
                    </li>
                    <li>
                        <strong>コラボレーション</strong>
                        <p>現代のソフトウェア開発プロセスは、以前よりもはるかに複雑に構成されています。各分野の専門家の協力が不可欠です。JetBrainsのすべての製品には簡単なコラボレーション機能が搭載されており、特にJetBrainsのチームツールを使用すると、チームメンバー間のコラボレーション能力を大幅に向上させることができます。</p>
                    </li>
                    <li>
                        <strong>プラグイン</strong>
                        <p>JetBrainsのプラグインは、JetBrains製品の機能を無制限に拡張することができます。JetBrainsのプラグインエコシステムには、開発者が必要とする実証済みのプラグインがすべて揃っています。</p>
                    </li>
                    <li>
                        <strong>あらゆる環境対応</strong>
                        <p>JetBrainsはあらゆる開発環境をサポートします。JetBrainsでは、オンラインからオフライン、クラウド、オンプレミス、リモート環境まで、さまざまな環境での作業が可能です。</p>
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

