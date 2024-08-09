import React from 'react';
import { Link } from 'react-router-dom';

export default function Solution2() {
    return (
        <>
            <div className='topArea'>
                <div>
                    <strong>JetBrains IDE Services</strong>
                    <b>開発者の生産性をエンタープライズ規模まで向上</b>
                    <p>JetBrains IDE Services は組織規模での生産性を解放する開発者エクスペリエンススイートです。AI Assistant による繰り返しタスクの自動化から効率的なコラボレーションの促進まで、複数のソリューションによって開発者ツールを大規模に管理しやすくしながら、ソフトウェア開発を高速化します。</p>
                    <Link to=''>お見積もり</Link>
                </div>
            </div>
            <section className='hubArea'>
                <h2>
                    <mark>A central hub</mark>
                    for all things IDE
                </h2>
                <p>JetBrains が提供する以下のエンタープライズソリューションを組み合わせることで、組織の開発者が各種 JetBrains IDE を使用してより多くのタスクを達成できるようにします。</p>
                <ul>
                    <li style={{'--img': `url(${require(`../images/24.png`)})`}}>
                        <Link to=''>
                            <b>IDE Provisioner</b>
                            <p>IntelliJ ベース IDE 大規模管理</p>
                        </Link>
                    </li>
                    <li style={{'--img': `url(${require(`../images/25.png`)})`}}>
                        <Link to=''>
                            <b>License Vault</b>
                            <p>JetBrains IDEライセンスを効率的に管理</p>
                        </Link>
                    </li>
                    <li style={{'--img': `url(${require(`../images/18.png`)})`}}>
                        <Link to=''>
                            <b>Code With Me Enterprise</b>
                            <p>セキュリティを重視する組織向けのペアプログラミングソリューション</p>
                        </Link>
                    </li>
                    <li style={{'--img': `url(${require(`../images/1.png`)})`}}>
                        <Link to=''>
                            <b>AI Enterprise</b>
                            <p>AIの力を活用して開発者の生産性を向上</p>
                        </Link>
                    </li>
                    <li style={{'--img': `url(${require(`../images/26.png`)})`}}>
                        <Link to=''>
                            <b>Codecanvas</b>
                            <p>拡張可能なリモート開発オーケストレーション</p>
                        </Link>
                    </li>
                </ul>
            </section>

            <div className='chooseArea'>
                <strong>
                    Why choose JetBrains IDE<br/>
                    Services for your organization?
                </strong>
                <ul>
                    <li style={{'--img': `url(${require(`../images/solution2-01.png`)})`}}><p>開発者ツールの管理を簡素化</p></li>
                    <li style={{'--img': `url(${require(`../images/solution2-02.png`)})`}}><p>開発者の生産性を向上</p></li>
                    <li style={{'--img': `url(${require(`../images/solution2-03.png`)})`}}><p>コードへの影響を制御</p></li>
                    <li style={{'--img': `url(${require(`../images/solution2-04.png`)})`}}><p>自社所有設備での安全な構成を確保</p></li>
                    <li style={{'--img': `url(${require(`../images/solution2-05.png`)})`}}><p>エンタープライズサポートでビジネス継続性を確保</p></li>
                    <li style={{'--img': `url(${require(`../images/solution2-06.png`)})`}}><p>柔軟なライセンス体系と請求方法でビジネスの成長を支援</p></li>
                </ul>
            </div>

            <section className='platformArea'>
                <h2>
                    <mark>One platform</mark>
                    five products
                </h2>
                <ul>
                    <li style={{'--img': `url(${require(`../images/24.png`)})`}}>
                        <strong>IDE Provisioner</strong>
                        <b>組織全体にIntelliJベースのIDEをプロビジョニング</b>
                        <p>IDE、プラグイン、およびそれぞれのバージョンを承認し、設定を組織の開発者ツールにプッシュして、承認されていないツールや古いツールに関連するリスクを回避します。</p>
                        <div>
                            <span>Distribute IDE builds</span>
                            <span>Handpick plugins</span>
                            <span>Propagate IDE settings</span>
                            <span>Restrict IDE versions</span>
                        </div>
                        <Link to=''>詳細情報</Link>
                    </li>
                    <li style={{'--img': `url(${require(`../images/25.png`)})`}}>
                        <strong>License Vault</strong>
                        <b>ライセンス配布を自動化することで時間とコストを節約</b>
                        <p>組織内でのライセンスの使用方法を最適化し、必要なときにライセンスを開発者に自動的に割り当て、実際に使用されたライセンスに対してのみ支払います。</p>
                        <Link to=''>詳細情報</Link>
                    </li>
                    <li style={{'--img': `url(${require(`../images/18.png`)})`}}>
                        <strong>AI Enterprise</strong>
                        <b>JetBrains AIのパワーを安全に活用し、開発者の生産性を向上</b>
                        <p>セキュリティと支出を管理しながら、クラス最高の AI 機能を開発者に提供し、チームのソフトウェア開発の効率を高めます。</p>
                        <Link to=''>詳細情報</Link>
                    </li>
                    <li style={{'--img': `url(${require(`../images/1.png`)})`}}>
                        <strong>Code With Me Enterprise</strong>
                        <b>効率的なリアルタイムコラボレーションの促進</b>
                        <p>開発者が使い慣れたツールのコンテキストと快適さを離れることなく、デバッグ、コードのレビュー、相互指導を行えるようにすることで、フィードバック ループを削減します。</p>
                        <Link to=''>詳細情報</Link>
                    </li>
                    <li style={{'--img': `url(${require(`../images/26.png`)})`}}>
                        <strong>CodeCanvas</strong>
                        <b>環境設定にかかる時間をコーディング時間に転換</b>
                        <p>標準化されたリモート環境により、開発者は数秒でコーディングを開始でき、IT セキュリティも維持できます。機密コードは組織のサーバーにのみ保存されます。</p>
                        <Link to=''>詳細情報</Link>
                    </li>
                </ul>
            </section>

            <div className='tableArea'>
                <strong>購入オプション</strong>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>IDE Provisioner</th>
                            <th>License Vault</th>
                            <th>AI Enterprise</th>
                            <th>Code With Me Enterprise</th>
                            <th>CodeCanvas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                オンプレミス<br/>
                                ホスティング
                            </td>
                            <td className='check'>포함</td>
                            <td className='check'>포함</td>
                            <td className='check'>포함</td>
                            <td className='check'>포함</td>
                            <td className='check'>포함</td>
                        </tr>
                        <tr>
                            <td>クラウドホスティング</td>
                            <td className='check'>포함</td>
                            <td className='check'>포함</td>
                            <td className='check'>포함</td>
                            <td className='check'>포함</td>
                            <td className='check'>포함</td>
                        </tr>
                        <tr>
                            <td>価格(年間)</td>
                            <td>
                                $120<br/>
                                (税込み$132)
                            </td>
                            <td>使用量によって異なる</td>
                            <td>
                                $360<br/>
                                (税込み$396)
                            </td>
                            <td>
                                $420<br/>
                                (税込み$462)
                            </td>
                            <td>
                                $600<br/>
                                (税込み$660)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

