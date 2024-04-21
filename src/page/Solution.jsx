import React from 'react';
import { Link } from 'react-router-dom';
import EstimateLink from '../components/EstimateLink';

export default function Solution() {
    return (
        <>
            <section className='topArea'>
                <h2>JetBrains AI</h2>
                <b>JetBrainsの製品に強力なAI機能を組み合わせることで、開発者の生産性をさらに向上させます。</b>
                <p>
                    JetBrains AIを使用することで、これまでとは異なる<br/>
                    IDE（統合開発環境）でより多くの情報と機能を利用できるようになります。
                </p>
                <EstimateLink />
            </section>

            <section className='aboutArea'>
                <h3>About JetBrains AI</h3>
                <p>JetBrains AIは、IDE(統合開発環境)内部にAIチャット、リファクタリング、自動補完、ランタイムエラー説明などの強力なAI機能を提供するプラグインです。JetBrains AI ServiceがIDEとLLM（大規模言語モデル）を安全に接続し、IDE内部に多様なAIサービスを提供します。JetBrains AIは、IDEに開かれたプロジェクトのコンテキストを深く理解しており、これにより、ユーザーに最適化された情報と機能を提供することができます。JetBrainsの商用IDEライセンスをお持ちの場合は、トライアル版でJetBrains AIを体験することができます。</p>
                <Link to='/estimate' className='btn-border-white'>お見積もり</Link>
                <ul>
                    <li>
                        <strong>リファクタリング</strong>
                        <p>JetBrains AIは、プロジェクトのコンテキストを分析し、正確なリファクタリングを提案します。JetBrains AIのリファクタリングにより、プロジェクトの必要な部分を迅速かつ安全に変更することができます。</p>
                    </li>
                    <li>
                        <strong>AI チャット</strong>
                        <p>JetBrains AIは、IDE（統合開発環境）ですぐに使えるAIチャット機能を提供します。JetBrains AIは、プロジェクトに対する徹底した理解に基づいて、最も正確な回答を提供します。</p>
                    </li>
                    <li>
                        <strong>コード自動完成</strong>
                        <p>ユーザーがコードを入力し始めると、JetBrains AIが周囲コードを分析し、最も関連性の高いコードを提案します。JetBrains AIのコード自動補完機能により、反復的なコードを素早く作成することができます。</p>
                    </li>
                </ul>
            </section>

            <section className='advantageArea'>
                <h3>主なメリット</h3>
                <p>
                    JetBrains AIを使用すると、IDE（統合開発環境）にさまざまなAI機能が追加されます。<br/>
                    また、JetBrains AIはデータとコードのセキュリティを保証するため、IDEで安全にAI機能を使用することができます。
                </p>
                <ul>
                    <li>
                        <b>さまざまなAI機能</b>
                        <p>JetBrains AIは、AIチャットからリファクタリング、ランタイムエラーの説明、コード自動補完、ユニットテストの作成、ドキュメントの作成まで、さまざまなAI機能を提供します。</p>
                    </li>
                    <li>
                        <b>IDEとの完璧な統合</b>
                        <p>JetBrains AIは、JetBrains IDE（統合開発環境）のUIと完璧に統合されているため、ユーザーはIDE内で様々なAI機能を快適に使用することができます。</p>
                    </li>
                    <li>
                        <b>안전성</b>
                        <p>JetBrainsは、データとコードのセキュリティを何よりも重要視しています。 JetBrains AIは、必要以上のデータをLLMに送信しません。 また、JetBrainsとLLMプロバイダーは、お客様のデータをモデルトレーニングに使用することは絶対にありません。</p>
                    </li>
                </ul>
            </section>

            <section className='purchaseBox-black'>
                <h3>購入オプション</h3>
                <div>
                    <b><span>業務用	個人用</span></b>
                    <ul>
                        <li title='新規購入'>
                            <span>
                                $200<br/>
                                (incl. VAT $220)
                            </span>
                        </li>
                        <li title='すべての機能'><span title='포함'></span></li>
                        <li title='ライセンスの共有'><span title='포함'></span></li>
                        <li title='技術的なお問い合わせ'><span title='포함'></span></li>
                        <li title='ライセンス所有'><span>法人</span></li>
                        <li><span><Link to='/estimate' className='btn-border-white'>お見積もり</Link></span></li>
                    </ul>
                </div>
                <div>
                    <b><span>業務用	個人用</span></b>
                    <ul>
                        <li title='新規購入'>
                            <span>
                                $100<br/>
                                (incl. VAT $110)
                            </span>
                        </li>
                        <li title='すべての機能'><span title='포함'></span></li>
                        <li title='ライセンスの共有'><span></span></li>
                        <li title='技術的なお問い合わせ'><span></span></li>
                        <li title='ライセンス所有'><span>個人</span></li>
                        <li><span><Link to='/estimate' className='btn-border-white'>お見積もり</Link></span></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

