import React from 'react';
import { iconList } from '../js/product'
import { Link, useParams } from 'react-router-dom';
import EstimateLink from '../components/EstimateLink';

export default function ProductDetail() {
    const { productIdx } = useParams()
    const productData = iconList[productIdx]
    console.log(productData);
    return (
        <>
            <section className='topArea' style={{'--styleTotal': iconList.length, '--styleIdx': productData.idx}}>
                <h2>{ productData.title }</h2>
                <p>
                    { productData.summary }
                </p>
                <EstimateLink />
            </section>

            <section className='infoArea'>
                <h3>제품 정보</h3>
                <p>{ productData.info }</p>
                <ul>
                    {productData.function.map((data, i)=>
                        <li key={i}>
                            <div>
                                <strong>{ data.title }</strong>
                                <p>{ data.description }</p>
                            </div>
                        </li>
                    )}
                </ul>
            </section>

            <section className='purchaseBox-white'>
                <h3>구매 옵션</h3>
                { productData.purchase.map((data, i)=>
                    <div key={i}>
                        <b><span>{ data.title }</span></b>
                        <ul>
                            {data.details.map((detailData, i)=>
                                <li title={ detailData.title } key={i}>
                                    <span title={ detailData.include ? '포함': ''}>{ detailData.detail }</span>
                                </li>
                            )}
                            <li><span><Link to='/estimate' className='btn-border-black'>견적요청</Link></span></li>
                            <li><span><Link to='/buy' className='btn-bg'>구매하기</Link></span></li>
                        </ul>
                    </div>
                )}
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
                <ul className='FAQBox'>
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

