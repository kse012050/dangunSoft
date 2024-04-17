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
            <strong>購入について </strong>
            <ul className='FAQBox'>
                <li>
                    <details>
                        <summary>Q.ライセンス購入の手順を教えてください。</summary>
                        <div>
                            <p>弊社で製品を購入する手順は以下の通りです。</p>
                            <p>→1. 上記の見積依頼からご希望の商品と数量を選択し、記入します。2.お客様の情報を入力します。3.更新やアップグレードの場合、備考欄にCustomer ID、License IDなどを一緒に入力します。4.確認ボタンをクリックします。5.入力されたメールに見積書と決済リンクをお送りします。6.そのリンクから決済すると、注文が完了します。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.ライセンス発行はどのくらいかかりますか？</summary>
                        <div>
                            <p>当日の納品を原則としており、通常、支払いが確認されてから最短30分以内に発行されます。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.支払い方法はクレジットカードしかできませんか？</summary>
                        <div>
                            <p>弊社では、クレジットカード決済と口座振替に対応しております。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.見積書の有効期限が過ぎてしまった場合の解決方法を教えてください。</summary>
                        <div>
                            <p>お手数ですが、再度お見積り依頼をお願いします。お見積もり依頼は、ホームページやメールでご依頼いただいても構いません。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.領収書は発行してもらえますか？</summary>
                        <div>
                            <p>クレジットカード決済については、領収書をお送りいたします。銀行振込でのお支払いの領収書は、弊社様式の納品書で代用させていただきます。 また、書面の郵送は対応しておりません。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.納品書の発行可能でしょうか？</summary>
                        <div>
                            <p>弊社フォームにて発行可能です。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.後払いでの購入はできませんか？</summary>
                        <div>
                            <p>法人の場合は後払い対応可能です。 (初めて購入される法人様は要相談) 個人の場合は、申し訳ございませんが、前払いのみとなります。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.数量(金額)が多いのですが、個別に相談できますか？</summary>
                        <div>
                            <p></p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.お問い合わせのフォームやメールでお問い合わせください。 (salesメール追加)注文をキャンセルすることはできますか？</summary>
                        <div>
                            <p>注文のキャンセル依頼メールと一緒に見積り番号とメールアドレスをお知らせください。キャンセル可能期間内のご注文に限り、キャンセルさせていただきます。</p>
                            <p>(JetBrains年間サブスクリプションの購入日から30日以内の注文に限り、払い戻しが可能です。)</p>
                        </div>
                    </details>
                </li>
            </ul>
            <strong>サポート</strong>
            <ul className='FAQBox'>
                <li>
                    <details>
                        <summary>Q.LINEで問い合わせました。回答はいつ届きますか？</summary>
                        <div>
                            <p>順次回答をさせて頂いております。申し訳ございませんが、少々お待ちいただければ幸いです。</p>
                            <p>LINEの回答可能時間は9:00～18:00です。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.メールで問い合わせました。回答はいつ届きますか？</summary>
                        <div>
                            <p>入力されたメールアドレスが間違っていたり、メールが迷惑メールに振り分けられている場合があります。再確認をお願いします。もし1～2日待っても返信がない場合は、再度お問い合わせください。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.他の代理店から購入したライセンスもサポート可能ですか？</summary>
                        <div>
                            <p>申し訳ございませんが、弊社で購入されたライセンスを優先的にサポートさせていただきます。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.JetBrains製品のトレーニングは可能ですか？</summary>
                        <div>
                            <p>ユーザー向けの製品教育は現在サポートしておりません。 ライセンスの使用中に発生するエラーや単発的なその他のお問い合わせは、弊社ホームページの「お問い合わせ」をご利用ください。</p>
                        </div>
                    </details>
                </li>
            </ul>
            <strong>その他</strong>
            <ul className='FAQBox'>
                <li>
                    <details>
                        <summary>Q.ライセンス証書をなくしてしまったのですが、再発行できますか？</summary>
                        <div>
                            <p>お問い合わせから製品名、購入日、注文番号などをご記入の上、お問い合わせください。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.ライセンスの譲渡・譲受は可能ですか？</summary>
                        <div>
                            <p>可能かどうかについては、JetBrains社の確認が必要であり、許可された譲渡/譲受については、transfer formに管理者の署名が必要です。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.月額ライセンスは購入できませんか？</summary>
                        <div>
                            <p>申し訳ございませんが、弊社では年間サブスクリプションの形でのみ注文が可能です。ただし、既存のライセンスの有効期限に合わせて1年未満の注文は可能です。</p>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.スタートアップ割引条件はありますか？</summary>
                        <div>
                            <p>スタートアップ割引の条件は以下の通りです。 詳細なお問い合わせは、弊社ホームページからお問い合わせください。</p>
                            <ol>
                                <li>1.非上場企業であること。</li>
                                <li>2.設立後5年未満であるこ1と。</li>
                                <li>3.インターネット上にウェブ1サイトまたは会社に関する公開された資料があること。</li>
                            </ol>
                        </div>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Q.数量割引はありますか？</summary>
                        <div>
                            <p>はい、JetBrainsは数量割引を提供しています。</p>
                            <p>Activeのサブスクリプションの数が10個以上 - 5% 割引</p>
                            <p>アクティブなサブスクリプションの数が20個以上 - 7%割引</p>
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

