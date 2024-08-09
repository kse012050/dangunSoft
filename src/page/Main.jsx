import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import { inputChange, inputsRequiredAdd } from '../api/validation';
import { userApi, isSubmit } from '../api/api';
import Popup from '../components/popup/Popup';

export default function Main() {
    const [inputs, setInputs] = useState()
    const [popup, setPopup] = useState()
    const [firstPopup, setFirstPopup] = useState()

    useEffect(()=>{
        inputsRequiredAdd(setInputs);

        userApi('popup')
            .then((result)=>{
                if(result.result){
                    setFirstPopup(result.data)
                }
            })
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        if(isSubmit(inputs)){
            return;
        }
        
        const copyInputs = {
            board_type: 'simple_inquiry',
            write_name: `${inputs.write_name_last} ${inputs.write_name_first}`,
            company_name: inputs.company_name,
            email: inputs.email
        }

        if(inputs.title){
            copyInputs.title = inputs.title
        }
        // console.log(copyInputs);
      
        userApi('board/manage', 'insert', copyInputs)
            .then((result)=>{
                if(result.result){
                    setPopup({
                        type: 'confirm',
                        description: [
                            'お問い合わせを受け付けいたしました。',
                            '担当者よりご連絡いたしますので 今しばらくお待ちください。'
                        ],
                        func: () => {
                            document.querySelectorAll('input[name]').forEach((selector)=>{
                                selector.value = ''
                            })
                            Object.keys(inputs).forEach((key) => {
                                setInputs(prev => ({...prev, [key]: ''}))
                            })
                        }
                    })
                }
            })
    }

    return (
        <>
            <section className='welcomeArea'>
                <h2>
                    Welcome to the <br className='pc_tablet'/>
                    NATTOSYSTEM
                </h2>
                <p>
                    {/* NATTOSYSTEM은 JetBrains 공식 공급 기업입니다.
                    당사는 제품에 대한 전문적인 지식을 바탕으로<br className='pc_tablet'/>
                    고객들의 개발 환경, 고객이 당면한 문제점 등을 파악하여 
                    그에 맞는 제품과 서비스를 합리적인 가격으로 제공합니다.  */}
                    NATTOSYSTEMはJetBrains公式代理店です。弊社は製品に関する専門的な知識をもとに <br className='pc_tablet'/>
                    お客様の開発環境、直面している問題点などを把握し、それらに合った製品とサービスをリーズナブルな価格で提供します。 
                </p>
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
                        <Link to='/product/IntelliJ IDEA'>
                            <strong>IntelliJ IDEA</strong>
                            <p>IntelliJ IDEAは、JavaとKotlin開発者のためのIDE(統合開発環境)です。IntelliJ IDEAのスマートなコード完成により、開発者の生産性が向上します。 また、IntelliJ IDEAの多様なフレームワークのサポートにより、開発者が自由に開発することができます。</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/product/All Products Pack'>
                            <strong>All Products Pack</strong>
                            <p>All Products Packは、文字通りJetBrainsのすべてのデスクトップツールを1つのライセンスにまとめた製品です。 All Products Packを利用することで、多数のライセンスをよりお得に利用できるようになりました。</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/product/Qodana'>
                            <strong>Qodana</strong>
                            <p>Qodanaはコード品質検査プラットフォームです。Qodanaの2,500以上のコード検査は、コード品質をさらに向上させます。 また、Qodanaのライセンスチェック機能は、不適切なライセンスの使用を防止します。</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/product/WebStorm'>
                            <strong>WebStorm</strong>
                            <p>WebStormはJavaScriptとTypeScriptのためのIDE(統合開発環境)です。WebStormはReactをはじめ、Vue、Angular、NodeJSまでさまざまな技術スタックを完全にサポートします。</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/product/JetBrains AI'>
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
                <p>JetBrainsは、より便利なコーディング環境と協業環境を提供します。</p>
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
                    <strong>マスコット</strong>
                    <dl>
                        <dt>ヌル</dt>
                        <dd>
                        つややかで健康な納豆になるのが目標の納豆村の1位黄色い豆ヌル。<br/>
                        ヌルはべたつきが強く、誰でもヌルにぴったり！ くっついた瞬間、ヌルと仲良くなれます。
                        </dd>
                    </dl>
                    <dl>
                        <dt>ツル</dt>
                        <dd>
                            まだ小さい枝豆に過ぎない鶴ですが誰よりも賢くて明るい性格を持っています。<br/>
                            ツルはヌルがどんな困難に陥ってもてきぱき解決してくれるありがたい解決師でありかけがえのない友達です。
                        </dd>
                    </dl>
                </div>
            </section>

            <div className='snsArea'>
                <strong><mark>NATTOSYSTEM</mark>と友達になりましょう !</strong>
                <p>今すぐNATTOSYSTEMと友達になって、最新ニュースと割引特典をお楽しみください ! </p>
                <ul data-styleidx>
                    <li>
                        @Twitter
                        <Link to='https://x.com/nattosystem'>+Follow</Link>
                    </li>
                    <li>
                        @Line_ID
                        <Link to='https://liff.line.me/1645278921-kWRPP32q/?accountId=827gemiv'>+友達登録</Link>
                    </li>
                </ul>
            </div>

            <section className='inquiryArea'>
                <h3>お問い合わせ</h3>
                <ul data-styleidx>
                    <li>
                        <b>Phone</b>
                        <Link to='tel:+8207080805970'>82-070-8080-5970</Link>
                    </li>
                    <li>
                        <b>Email</b>
                        <Link to='mailto:sales@nattosystem.com'>sales@nattosystem.com</Link>
                    </li>
                    <li>
                        <b>Address</b>
                        <p>東京都港区南青山2-2-8 DFビル6F</p>
                    </li>
                </ul>
                <form onChange={(e)=>inputChange(e, setInputs)}>
                    <fieldset>
                        <strong>手軽なお問い合わせ</strong>
                        <ul>
                            <li>
                                <label htmlFor="write_name_last">名前</label>
                                <div>
                                    <input type="text" placeholder='姓' name='write_name_last' id='write_name_last' required/>
                                    <input type="text" placeholder='名' name='write_name_first' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="company_name">企業名</label>
                                <div>
                                    <input type="text" placeholder='企業名を入力してください' name='company_name' id='company_name' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="email">メール</label>
                                <div>
                                    <input type="text" placeholder='メールアドレスを入力してください' name='email' id='email' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="title">内容</label>
                                <div>
                                    <input type="text" placeholder='お問い合わせの内容' name='title' id='title'/>
                                </div>
                            </li>
                        </ul>
                         <input type="submit"  value='確認' onClick={onSubmit}/>
                    </fieldset>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.24431736511!2d139.72150827625802!3d35.670985730535854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c82fbd6ae09%3A0xee70acf788450c72!2z5pel5pys44CB44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yS5LiB55uu77yS4oiS77yYIERG44OT44Or!5e0!3m2!1sja!2skr!4v1713921721212!5m2!1sja!2skr" title='동영상'></iframe>
            </section>
            {firstPopup &&
                <div className='firstPopup' onClick={()=>setFirstPopup(false)}>
                    <div onClick={(e)=>e.stopPropagation()}>
                        <Link to={firstPopup.link}>
                            <img src={firstPopup.board_picture_list[0].file_url} alt="" />
                        </Link>
                        <button onClick={()=>setFirstPopup(false)}>닫기</button>
                    </div>
                </div>
            }
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

