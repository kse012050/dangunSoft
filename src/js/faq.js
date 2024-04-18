const faqList = [
    {
        type: '購入について',
        title: 'ライセンス購入の手順を教えてください。',
        description: [
            {
                type: 'text',
                detail: '弊社で製品を購入する手順は以下の通りです。'
            },
            {
                type: 'text',
                detail: '1. 上記の見積依頼からご希望の商品と数量を選択し、記入します。2.お客様の情報を入力します。3.更新やアップグレードの場合、備考欄にCustomer ID、License IDなどを一緒に入力します。4.確認ボタンをクリックします。5.入力されたメールに見積書と決済リンクをお送りします。6.そのリンクから決済すると、注文が完了します。'
            }
        ]
    },
    {
        type: '購入について',
        title: 'ライセンス発行はどのくらいかかりますか？',
        description: [
            {
                type: 'text',
                detail: '当日の納品を原則としており、通常、支払いが確認されてから最短30分以内に発行されます。'
            }
        ]
    },
    {
        type: '購入について',
        title: '支払い方法はクレジットカードしかできませんか？',
        description: [
            {
                type: 'text',
                detail: '弊社では、クレジットカード決済と口座振替に対応しております。'
            }
        ]
    },
    {
        type: '購入について',
        title: '商品の価格の確認方法を教えてください。',
        description: [
            {
                type: 'text',
                detail: 'お手数ですが、見積依頼をお願いします。メールにてお見積もりを返信させていただきます。'
            }
        ]
    },
    {
        type: '購入について',
        title: '支払いの期限が過ぎてしまいました。',
        description: [
            {
                type: 'text',
                detail: '見積書上の有効期限が過ぎた場合：新しい見積書と決済リンクをお送りいたします。'
            },
            {
                type: 'text',
                detail: '見積書上の有効期限が過ぎていない場合：決済リンクを再送信させていただきます'
            }
        ]
    },
    {
        type: '購入について',
        title: '見積書の有効期限が過ぎてしまった場合の解決方法を教えてください。',
        description: [
            {
                type: 'text',
                detail: 'お手数ですが、再度お見積り依頼をお願いします。お見積もり依頼は、ホームページやメールでご依頼いただいても構いません。'
            }
        ]
    },
    {
        type: '購入について',
        title: '領収書は発行してもらえますか？',
        description: [
            {
                type: 'text',
                detail: 'クレジットカード決済については、領収書をお送りいたします。銀行振込でのお支払いの領収書は、弊社様式の納品書で代用させていただきます。 また、書面の郵送は対応しておりません。'
            }
        ]
    },
    {
        type: '購入について',
        title: '納品書の発行可能でしょうか？',
        description: [
            {
                type: 'text',
                detail: '弊社フォームにて発行可能です。'
            }
        ]
    },
    {
        type: '購入について',
        title: '後払いでの購入はできませんか？',
        description: [
            {
                type: 'text',
                detail: '法人の場合は後払い対応可能です。 (初めて購入される法人様は要相談) 個人の場合は、申し訳ございませんが、前払いのみとなります。'
            }
        ]
    },
    {
        type: '購入について',
        title: '数量(金額)が多いのですが、個別に相談できますか？',
        description: [
            {
                type: 'text',
                detail: 'お問い合わせのフォームやメールでお問い合わせください。 (salesメール追加)'
            }
        ]
    },
    {
        type: '購入について',
        title: '注文をキャンセルすることはできますか？',
        description: [
            {
                type: 'text',
                detail: '注文のキャンセル依頼メールと一緒に見積り番号とメールアドレスをお知らせください。キャンセル可能期間内のご注文に限り、キャンセルさせていただきます。'
            },
            {
                type: 'text',
                detail: '(JetBrains年間サブスクリプションの購入日から30日以内の注文に限り、払い戻しが可能です。)'
            }
        ]
    },
    {
        type: 'サポート',
        title: 'LINEで問い合わせました。回答はいつ届きますか？',
        description: [
            {
                type: 'text',
                detail: '順次回答をさせて頂いております。申し訳ございませんが、少々お待ちいただければ幸いです。'
            },
            {
                type: 'text',
                detail: 'LINEの回答可能時間は9:00～18:00です。'
            },
        ]
    },
    {
        type: 'サポート',
        title: 'メールで問い合わせました。回答はいつ届きますか？',
        description: [
            {
                type: 'text',
                detail: '入力されたメールアドレスが間違っていたり、メールが迷惑メールに振り分けられている場合があります。再確認をお願いします。もし1～2日待っても返信がない場合は、再度お問い合わせください。'
            },
        ]
    },
    {
        type: 'サポート',
        title: '他の代理店から購入したライセンスもサポート可能ですか？',
        description: [
            {
                type: 'text',
                detail: '申し訳ございませんが、弊社で購入されたライセンスを優先的にサポートさせていただきます。'
            },
        ]
    },
    {
        type: 'サポート',
        title: 'JetBrains製品のトレーニングは可能ですか？',
        description: [
            {
                type: 'text',
                detail: 'ユーザー向けの製品教育は現在サポートしておりません。 ライセンスの使用中に発生するエラーや単発的なその他のお問い合わせは、弊社ホームページの「お問い合わせ」をご利用ください。'
            },
        ]
    },
    {
        type: 'その他',
        title: 'ライセンス証書をなくしてしまったのですが、再発行できますか？',
        description: [
            {
                type: 'text',
                detail: 'お問い合わせから製品名、購入日、注文番号などをご記入の上、お問い合わせください。'
            },
        ]
    },
    {
        type: 'その他',
        title: 'ライセンスの譲渡・譲受は可能ですか？',
        description: [
            {
                type: 'text',
                detail: '可能かどうかについては、JetBrains社の確認が必要であり、許可された譲渡/譲受については、transfer formに管理者の署名が必要です。'
            },
        ]
    },
    {
        type: 'その他',
        title: '月額ライセンスは購入できませんか？',
        description: [
            {
                type: 'text',
                detail: '申し訳ございませんが、弊社では年間サブスクリプションの形でのみ注文が可能です。ただし、既存のライセンスの有効期限に合わせて1年未満の注文は可能です。'
            },
        ]
    },
    {
        type: 'その他',
        title: 'スタートアップ割引条件はありますか？',
        description: [
            {
                type: 'text',
                detail: 'スタートアップ割引の条件は以下の通りです。 詳細なお問い合わせは、弊社ホームページからお問い合わせください。'
            },
            {
                type: 'text',
                detail: '非上場企業であること。'
            },
            {
                type: 'text',
                detail: '設立後5年未満であること。'
            },
            {
                type: 'text',
                detail: 'インターネット上にウェブサイトまたは会社に関する公開された資料があること。'
            },
        ]
    },
    {
        type: 'その他',
        title: '数量割引はありますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、JetBrainsは数量割引を提供しています。'
            },
            {
                type: 'text',
                detail: 'Activeのサブスクリプションの数が10個以上 - 5% 割引'
            },
            {
                type: 'text',
                detail: 'アクティブなサブスクリプションの数が20個以上 - 7%割引'
            },
        ]
    },
    {
        type: 'ライセンスモデルとJetBrains Toolboxについて',
        title: 'JetBrains Toolboxとは何ですか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrains Toolboxは、JetBrainsのデスクトップ開発者向けツールです。JetBrains Toolboxは、月刊または年刊サブスクリプションで利用でき、以下の製品が含まれています。'
            },
            {
                type: 'list',
                detail: [
                    'CLion',
                    'DataGrip',
                    'dotCover',
                    'dotMemory',
                    'dotTrace',
                    'DataSpell',
                    'GoLand',
                    'IntelliJ IDEA',
                    'PhpStorm',
                    'PyCharm',
                    'ReSharper',
                    'ReSharper C++',
                    'Rider',
                    'RubyMine',
                    'WebStorm',
                ]
            },
        ]
    },
    {
        type: 'ライセンスモデルとJetBrains Toolboxについて',
        title: '',
        description: [
            {
                type: 'text',
                detail: '以下の製品は、サブスクリプション型ライセンスモデルで提供されます。'
            },
            {
                type: 'list',
                detail: [
                    'IntelliJ IDEA',
                    'CLion',
                    'DataGrip',
                    'DataSpell',
                    'GoLand',
                    'PhpStorm',
                    'PyCharm',
                    'Rider',
                    'RubyMine',
                    'WebStorm',
                    'ReSharper',
                    'dotUltimate',
                    'All Products Pack',
                    'JetBrains AI',
                    'Code With Me',
                    'Datalore Team',
                    'YouTrack Cloud',
                    'Space Cloud',
                    'Space On-Premises',
                    'Qodana',
                    'TeamCity Cloud',
                ]
            },
            {
                type: 'text',
                detail: '以下の製品は永久ライセンスモデルとして提供されます。'
            },
            {
                type: 'list',
                detail: [
                    'Datalore Enterprise',
                    'YouTrack Server',
                    'TeamCity On-Premises',
                ]
            },
        ]
    },
    {
        type: 'ライセンスモデルとJetBrains Toolboxについて',
        title: '永久フォールバックライセンスとは何ですか？',
        description: [
            {
                type: 'text',
                detail: '永久フォールバックライセンスは、JetBrains Toolbox（JetBrains Desktop Developer Tools）製品を1年間サブスクリプションした場合に提供されるライセンスで、購入時点のバージョンの製品を永久的に使用することができます。'
            },
        ]
    },
    {
        type: 'ライセンスモデルとJetBrains Toolboxについて',
        title: 'Toolbox サブスクリプション契約書に記載されている「再配布可能な製品」とは何ですか？ ',
        description: [
            {
                type: 'text',
                detail: 'JetBrainsは、IntelliJ IDEA、Rider、dotMemoryなどのIDE製品のライセンスを有料で販売しています。ここで、再配布可能な製品はこのようなIDE製品ではありません。 再配布可能な製品とは、IDE機能を拡張してくれる無料製品であり、ほとんどがAPI、SDKなどの独立した製品に該当し、その製品にはdotMemory Unit、dotTrace Self-Profiling API、dotPeekなどがあります。再配布可能な製品を通じて独自のプログラム、アルゴリズムなどを開発することができますが、これと関連した製品を販売する時、Toolboxサブスクリプション契約に注意する必要があります。'
            },
        ]
    },
    {
        type: 'ライセンスモデルとJetBrains Toolboxについて',
        title: 'JetBrains のライセンスモデルは何ですか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrains製品には、サブスクリプションライセンスと永久ライセンスがあります。まず、サブスクリプションライセンスの場合、お客様はJetBrains製品を月刊または年間サブスクリプションで購入することができます。サブスクリプションを更新することで、最新バージョンのJetBrains製品を継続的に使用することができ、特にIDE(統合開発環境)製品を365日連続でサブスクリプションすると、フォールバックライセンスを取得することができます。永久ライセンスの場合、一度購入すると、特定のバージョンのJetBrains製品を永続的に使用することができます。ただし、サポートされていない最新バージョンのJetBrains製品を使用したい場合は、ライセンス更新が必要です。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: 'Community EditionのJetBrains IDEを通じて商用ソフトウェア開発が可能ですか？',
        description: [
            {
                type: 'text',
                detail: 'はい、IntelliJ IDEA Community EditionとPyCharm Community Edition IDEs（Community IDEs）を通じて商用ソフトウェア開発を行うことができます。ただし、Community Edition製品自体の派生製品を作成したり、Community Edition製品の商用化はできません。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '商用ライセンスと個人用ライセンスの違いは何ですか？ ',
        description: [
            {
                type: 'text',
                detail: '商用ライセンスと個人用ライセンスの機能的な違いはありませんが、使用方法に違いがあります。商用ライセンスは会社で購入し、一つのライセンスを社内のどのユーザーでも使用することができます(ただし、一つのライセンスで同時に1人のユーザーしか使用できません)。'
            },
            {
                type: 'text',
                detail: 'しかし、個人用ライセンスは個人が購入し、1つのアカウントでのみ使用可能です。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '個人用ライセンスを商業的な開発作業に使用できますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、個人用ライセンスであらゆる種類の開発作業を行うことができます。'
            },
            {
                type: 'text',
                detail: 'ただし、自分の個人用ライセンスを使用する必要があり、個人用ライセンスを他のユーザーと共有することはできません。'
            },
            {
                type: 'text',
                detail: 'また、会社は個人用ライセンスの支払いを代行したり、払い戻しなど、いかなる方法でも購入をサポートしてはいけません。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '個人用ライセンスは商用ライセンスに比べて機能が制限されますか？',
        description: [
            {
                type: 'text',
                detail: 'いいえ、個人用ライセンスは商用ライセンスと同じ機能が提供されますが、商用ライセンスに比べてライセンス共有機能が制限されます。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '会社が個人用ライセンスを購入したり、その費用を処理することはできますか？',
        description: [
            {
                type: 'text',
                detail: 'いいえ、個人用ライセンスは必ず個人が費用を支払う必要があり、個人的な用途のみ使用することができます。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '個人用ライセンスは会社でも自宅でも使えますか？ ',
        description: [
            {
                type: 'text',
                detail: 'はい、個人用ライセンスを会社と自宅の両方で使用することができます。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '会社が個人用ライセンスを使用することはできますか？',
        description: [
            {
                type: 'text',
                detail: 'いいえ、個人用ライセンスは、そのライセンスを購入した個人ユーザーのみが使用しなければなりません。 そのため、会社がそのライセンスを使用したり、購入したり、所有権を主張したりすることはできません。会社が個人が使用するライセンスを購入するには、商用サブスクリプションを購入する必要があります。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '会社で購入した商用ライセンスを自宅で使用できますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、JetBrains EULAでは、会社の商用ライセンスを自宅で使用することを禁止していません。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '一つのライセンスで複数のデバイスでIDEを使用できますか？',
        description: [
            {
                type: 'text',
                detail: '個人用ライセンスの場合、一つのライセンスで同時に複数のデバイスでIDE(統合開発環境)を実行することができます。商用ライセンスの場合、一つのライセンスを使用する複数のデバイスに対して、OSにログインするユーザー名がすべて一致しなければなりません。 また、Floating License Serverはデバイスごとのライセンスモデルが適用されます。 したがって、Floating License Serverを使用する場合は、それぞれのデバイスにライセンスが必要です。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '複数のユーザーが同じ商用ライセンスを使用できますか？',
        description: [
            {
                type: 'text',
                detail: '2人以上のユーザーが同時に1つのライセンスを使用することはできません。 同時に作業しない場合、複数のユーザーが1つのライセンスを共有することは可能です。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '使用していた商用ライセンスを他の従業員に割り当てることはできますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、使用していた従業員がライセンスを使用しなくなった場合、組織またはチームの管理者がそのライセンスを回収し、他の従業員に再割り当てすることができます。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '10人の開発者がいる場合、何個の商用ライセンスを購入する必要がありますか？',
        description: [
            {
                type: 'text',
                detail: '一般的に、各ユーザーは自分のライセンスを持つ必要があります。10人の開発者が同じような時間帯にソフトウェアを実行する必要がある場合、10個の商用ライセンスが必要です。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '複数のユーザーが同時に使用できるライセンスはありますか？',
        description: [
            {
                type: 'text',
                detail: '複数のユーザーが使用可能な単一ライセンスは提供していません。 会社は各ユーザーに対して別途の商用ライセンスを購入する必要があります。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '商用ライセンスを他社に譲渡することはできますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、JetBrainsの書面による同意があれば可能です。商用ライセンスを他社に譲渡する場合は、JetBrainsの営業チームにお問い合わせください。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '試用版を使用する場合、クレジットカードは必要ですか？',
        description: [
            {
                type: 'text',
                detail: 'いいえ、試用版ソフトウェアを使用するためにクレジットカードは必要ありません。 ただし、無料試用期間が終了した後、製品を使用するには、クレジットカードを登録してサブスクリプションを購入する必要があります。'
            },
        ]
    },
    {
        type: 'ライセンスの種類とユーザー',
        title: '個人ユーザーがDatalore、Space、YouTrackなどのJetBrainsチームツールを購入できますか？',
        description: [
            {
                type: 'text',
                detail: '通常、JetBrainsのチームツールは商用顧客向けに提供されていますが、個人ユーザーもチームツールを購入することができます。例えば、他のフリーランサーとチームを組んだフリーランサーがJetBrainsのチームツールを購入することができます。 ただし、日本では、現地の税制上の理由により、個人ユーザーがチームツールを購入することはできません。'
            },
        ]
    },
    {
        type: '割引・特別プログラム',
        title: '教室用ライセンスとは何ですか、また利用資格は何ですか？',
        description: [
            {
                type: 'text',
                detail: '教室用ライセンスは、JetBrainsのソフトウェアを使用している認定教育機関は、教室用ライセンスを利用することができます。講義は各教育機関の教室で行う必要があり、教室用ライセンスは商業的な目的で使用することはできません。'
            },
            {
                type: 'text',
                detail: '教室用ライセンスは無料で提供されますが、JetBrainsのサイトからの事前申請が必要で、JetBrainsの承認が必要です。ライセンスは1年間有効で、有効期限が切れる30日前までに更新することができます。更新もJetBrainsの確認が必要で、自動的に行われるわけではありません。'
            },
        ]
    },
    {
        type: '割引・特別プログラム',
        title: 'OSS開発ライセンスとは何か、OSS開発ライセンスの利用資格は何ですか？',
        description: [
            {
                type: 'text',
                detail: '非商業的なオープンソースプロジェクトの開発者に無料で提供する製品ライセンスです。JetBrainsが提案する基準を満たしたオープンソースプロジェクトの開発者に製品ライセンスが無料で提供されます。'
            },
            {
                type: 'text',
                detail: '開発者は、無料のAll Products Packサブスクリプションだけでなく、すべてのチームツール（YouTrack、Datalore Enterprise、TeamCity、Qodana Ultimate Plus）の無料ライセンスを申請することができます。'
            },
            {
                type: 'text',
                detail: 'OSSライセンスは、JetBrainsが申請を審査して承認した後、1年間使用することができます。1年後、このプロジェクトがまだ要件を満たしている場合は、ライセンスを更新することができます。'
            },
        ]
    },
    {
        type: '割引・特別プログラム',
        title: '連続サブスクリプション割引とは何ですか？',
        description: [
            {
                type: 'text',
                detail: '連続サブスクリプション割引は、中断することなく継続的にサブスクリプションを購入するお客様に提供される特別割引です。連続サブスクリプション割引は、すべてのJetBrains IDE、ReSharper、Product Pack製品に対して提供されます。'
            },
            {
                type: 'text',
                detail: '年間サブスクリプションの場合、次のように割引が適用されます。'
            },
            {
                type: 'text',
                detail: '1年目：新規年間サブスクリプション価格'
            },
            {
                type: 'text',
                detail: '2年目：新規年間サブスクリプション価格の20％割引。'
            },
            {
                type: 'text',
                detail: '3年目以降：新規年間サブスクリプション価格の40%割引。'
            },
        ]
    },
    {
        type: '割引・特別プログラム',
        title: '学生と教師には教育用ライセンスを無料で提供していますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、提供しています。学生と教師は、JetBrains All Products Pack（JetBrains Toolboxのすべての製品を含むパッケージ）を教育目的で無料で使用することができます。教育用ライセンスは、商業的な目的で使用することはできません。'
            },
            {
                type: 'text',
                detail: 'さらに、JetBrainsは卒業を祝福し、40%の卒業割引を提供しています。卒業割引は、JetBrainsの単一製品またはAll Products Packライセンスのサブスクリプションに適用され、学生用ライセンスの有効期限から2年以内に使用する必要があります。'
            },
        ]
    },
    {
        type: '割引・特別プログラム',
        title: 'スタートアップ企業に割引はありますか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrainsは、スタートアップ企業にJetBrains製品を50%割引価格で提供しています。'
            },
        ]
    },
    {
        type: '割引・特別プログラム',
        title: '政府機関に特別価格を提供していますか？',
        description: [
            {
                type: 'text',
                detail: 'いいえ、政府機関には商用価格モデルが適用されます。'
            },
        ]
    },
    {
        type: '割引・特別プログラム',
        title: '競合他社製品を使用していた後にJetBrains製品を購入した場合、割引はありますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、JetBrains製品を購入する際に競合他社製品を使用中であっても、JetBrains製品の割引が適用されます。まず、競合他社の商用製品を使用していることを証明することで、JetBrains製品購入時の割引を申請することができます。証明資料によっては、最初のJetBrains製品購入時に25%の割引が適用されます。'
            },
        ]
    },
    {
        type: '割引・特別プログラム',
        title: 'JetBrains製品を大量に購入した場合、割引はありますか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrains Toolbox製品のサブスクリプションを大量に購入すると割引が適用されます。'
            },
            {
                type: 'table',
                detail: {
                    title: ['使用サブスクリプション数', '割引'],
                    details: [
                        ['10個以上', '5%']
                        ['20個以上', '7%']
                    ]
                }
            },
            {
                type: 'text',
                detail: 'ただし、Datalore、YouTrack、Sapce、Qodana、TeamCityなどのチームツールにはこの割引は適用されません。'
            },
        ]
    },
    {
        type: 'ライセンス提供',
        title: 'ライセンスはどのように提供されますか？',
        description: [
            {
                type: 'text',
                detail: '注文が正常に処理されると、ライセンス送信用のメールアドレスにライセンス認証メールが送信されます。'
            },
            {
                type: 'text',
                detail: 'ライセンス認証メールには、注文の詳細と、オンラインでライセンスを管理するためのJetBrains Accountへのリンクが記載されています。'
            },
            {
                type: 'text',
                detail: 'JetBrains Accountで製品のEULAに同意した後、ライセンス管理権限を取得できます。'
            },
        ]
    },
    {
        type: 'ライセンス提供',
        title: '実物の製品は発送されますか？',
        description: [
            {
                type: 'text',
                detail: 'いいえ、製品とライセンスはメールで送信されます。'
            },
        ]
    },
    {
        type: 'ライセンス提供',
        title: 'JetBrainsは実際に商品を発送しないのに、なぜ住所が必要なのですか？',
        description: [
            {
                type: 'text',
                detail: '住所は支払いと請求の目的で使用されます。 住所がないと、クレジットカードへの請求や請求書を発行することができません。 また、住所によってユーザーのVAT納税義務を判断します。'
            },
        ]
    },
    {
        type: 'ライセンスおよび製品情報管理',
        title: '永続フォールバックライセンスをアクティベーションさせながら使用するにはどうすればよいですか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrains製品の永続フォールバックバージョンを使用するには、以下の手順に従ってください。'
            },
            {
                type: 'text',
                detail: '(使用中のフォールバックバージョンの確認)'
            },
            {
                type: 'img',
                detail: 'サブスクリプションを一時停止することはできますか01'
            },
            {
                type: 'title',
                detail: '1.JetBrainsアカウントにログインします。ログインすると、アカウントページで利用可能なフォールバックライセンスを確認することができます。'
            },
            {
                type: 'text',
                detail: '2.使用したい製品のフォールバックバージョンを確認します。'
            },
            {
                type: 'title',
                detail: '(フォールバックバージョンのダウンロード)'
            },
            {
                type: 'text',
                detail: '1.フォールバックバージョンの製品をダウンロードするには、フォールバックバージョンをクリックします。'
            },
            {
                type: 'title',
                detail: '(最新バージョンの削除)'
            },
            {
                type: 'text',
                detail: '製品の永続フォールバックバージョンをインストールする前に、コンピュータに該当製品の最新バージョンがある場合、これを削除するか、Toolbox Appを使用して両方のバージョンを維持することができます。'
            },
            {
                type: 'title',
                detail: '(永続フォールバックバージョンのインストールとアクティベーション)'
            },
            {
                type: 'text',
                detail: '1.製品を起動し、JetBrainsアカウントの認証情報またはオフラインアクティベーションコードで永久フォールバックライセンスをアクティベーションします。'
            },
            {
                type: 'img',
                detail: 'サブスクリプションを一時停止することはできますか02'
            },
        ]
    },
    {
        type: 'ライセンスおよび製品情報管理',
        title: 'ReSharperまたはReSharper C++のみ購入できますか？',
        description: [
            {
                type: 'text',
                detail: '1. ReSharperライセンスにはReSharperとReSharper C++の両方が含まれています。'
            },
            {
                type: 'text',
                detail: '2. dotUltimateライセンスにはReSharper、ReSharper C++、Rider、dotTrace、dotMemory、dotCoverが含まれています。'
            },
            {
                type: 'text',
                detail: '3. All Products Packのサブスクリプションでは、すべてのdotUltimateの製品とJetBrainsのデスクトップツールを使用することができます。'
            },
        ]
    },
    {
        type: 'ライセンスおよび製品情報管理',
        title: 'All Productsライセンスで利用できる製品は何ですか？',
        description: [
            {
                type: 'text',
                detail: 'All Productsライセンスでは、IntelliJ IDEA, WebStorm, Rider, PyCharm, Clion, PhpStorm, DataGrip, DataSpell, RubyMine, GoLand, ReSharper, ReSharper C++, dotCover, dotMemory, dotTrace製品を使用できます。'
            },
        ]
    },
    {
        type: 'ライセンスおよび製品情報管理',
        title: 'All Productsライセンスで複数の製品を同時に使用できますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、All Products Packライセンスに含まれる様々なIDEを複数のデバイスで同時に使用することができます。ただし、商業用All Products Packライセンスの場合、同じIDEを複数のデバイスで使用するには、複数のデバイスに対してオペレーティングシステムにログインするユーザー名がすべて同じである必要があります。'
            },
        ]
    },
    {
        type: 'ライセンスおよび製品情報管理',
        title: 'JetBrains製品を使用するにはインターネットが必要ですか？',
        description: [
            {
                type: 'text',
                detail: 'インターネットにまったく接続できない場合は、オフラインアクティベーションコードを使用してJetBrains製品を使用することができます。 また、JetBrainsアカウントで最初に認証した後、最大30日間はインターネットに接続せずに製品を使用することができます。'
            },
        ]
    },
    {
        type: 'ライセンスおよび製品情報管理',
        title: 'ライセンスとライセンス情報はどこで確認できますか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrainsアカウントにログインすると、保有しているライセンスとライセンスの有効期限を確認できます。管理者は、組織のプロフィールページで、組織が保有するすべてのライセンスの有効期限、使用情報などを確認することができます。'
            },
        ]
    },
    {
        type: 'アップグレードと更新',
        title: 'JetBrains製品はどこでダウンロードできますか？',
        description: [
            {
                type: 'link',
                detail: {
                    link: 'https://www.jetbrains.com/products/?_gl=1*1cgm31o*_ga*MTQ3NDY5MTI0NC4xNjkwNDQ2NjM5*_ga_9J976DJZ68*MTcwODQxNTgxNC4zMDYuMS4xNzA4NDIxOTY4LjM5LjAuMA..&_ga=2.264071756.1340849096.1708395674-1474691244.1690446639',
                    text: 'ここからJetBrains製品のダウンロードが可能です。'
                }
            },
        ]
    },
    {
        type: 'アップグレードと更新',
        title: '他のIDEにアップグレードするにはどうすればいいですか？',
        description: [
            {
                type: 'text',
                detail: '他の製品にサブスクリプションを切り替える場合、以下の方法があります。'
            },
            {
                type: 'text',
                detail: '単一のIDE製品またはdotUltimateからAll Products Packへ。'
            },
            {
                type: 'text',
                detail: 'PyCharmからIntelliJ IDEAへ。'
            },
            {
                type: 'text',
                detail: 'RubyMineからIntelliJ IDEAへ。'
            },
            {
                type: 'text',
                detail: 'DataGripからIntelliJ IDEAへ'
            },
            {
                type: 'text',
                detail: 'GoLandからIntelliJ IDEAへ'
            },
            {
                type: 'text',
                detail: 'PhpStormからIntelliJ IDEAへ'
            },
            {
                type: 'text',
                detail: 'WebStormからIntelliJ IDEAへ'
            },
            {
                type: 'text',
                detail: 'WebStormからGoLandへ'
            },
            {
                type: 'text',
                detail: 'WebStormからPhpStormへ'
            },
            {
                type: 'text',
                detail: 'RiderからdotUltimateへ'
            },
            {
                type: 'text',
                detail: 'ReSharperからRiderへ'
            },
            {
                type: 'text',
                detail: 'ReSharperからdotUltimateへ'
            },
            {
                type: 'text',
                detail: 'また、製品をダウングレードすることもできます。'
            },
            {
                type: 'text',
                detail: 'All Products Packからすべての単一IDEまたはdotUltimateへ。'
            },
            {
                type: 'text',
                detail: 'dotUltimateからReSharperへのダウングレード'
            },
            {
                type: 'text',
                detail: 'dotUltimateからRiderへ'
            },
            {
                type: 'text',
                detail: 'RiderからReSharperへ'
            },
            {
                type: 'text',
                detail: '移行した製品は、移行日を基準にサブスクリプション期間が新たに開始され、以前のサブスクリプションの残り期間分が割引されます。連続サブスクリプション割引は、ライセンスのアップグレード時に適用されます。 また、ライセンスをIntelliJ IDEA、PhpStorm、GoLandにアップグレードした後のダウングレードはできません。'
            },
        ]
    },
    {
        type: '始める',
        title: 'どのメールアドレスでJetBrainsアカウントを作成する必要がありますか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrainsアカウントを作成するには、メールアドレスが必要です。'
            },
            {
                type: 'text',
                detail: 'すでにJetBrainsライセンスをお持ちの場合'
            },
            {
                type: 'text',
                detail: 'お持ちのJetBrainsライセンスにアクセスするためにアカウントを作成するには、そのライセンスに関連するメールアドレスを使用する必要があります。ライセンスに関連するメールアドレスは、次のいずれかを使用することができます。'
            },
            {
                type: 'text',
                detail: '1)ライセンス購入時に入力したメールアドレス'
            },
            {
                type: 'text',
                detail: '2) 所属機関の管理者がライセンスの割り当てに使用したメールアドレス。'
            },
            {
                type: 'text',
                detail: '複数のライセンスが異なるメールアドレスにリンクされている場合は、別のメールアドレスをアカウントにリンクすることで、すべてのライセンスを1つのアカウントで管理することができます。'
            },
            {
                type: 'text',
                detail: '2.まだJetBrainsのライセンスをお持ちでない場合'
            },
            {
                type: 'text',
                detail: 'すべてのメールアドレスでJetBrainsアカウントを作成することができます。JetBrainsライセンスを購入する場合は、登録時にメールアドレスを入力する必要があり、そのアカウントから購入したライセンスにアクセスすることができます。'
            },
        ]
    },
    {
        type: '始める',
        title: '複数のメールアドレスをJetBrainsアカウントに接続するにはどうすればよいですか',
        description: [
            {
                type: 'text',
                detail: '(JetBrainsアカウントに別のメールアドレスを接続する方法)'
            },
            {
                type: 'text',
                detail: '1. 既存のアカウントでJetBrains Accountにログインします。'
            },
            {
                type: 'text',
                detail: '2.ログイン後、ページ上部のYour Account(マイアカウント)のLinked emails(リンクされたメール)をクリックします。'
            },
            {
                type: 'img',
                detail: '複数のメールアドレスをJetBrainsアカウントに接続するにはどうすればよいですか01'
            },
            {
                type: 'text',
                detail: '3.アカウントに接続するメールアドレスを入力し、Link This Email(このメールのリンク)をクリックします。'
            },
            {
                type: 'img',
                detail: '複数のメールアドレスをJetBrainsアカウントに接続するにはどうすればよいですか02'
            },
            {
                type: 'text',
                detail: '4.新しく接続するメールアドレスに確認メールが送信されます。新しく接続するメールの受信トレイを確認し、確認リンクをクリックします。'
            },
            {
                type: 'img',
                detail: '複数のメールアドレスをJetBrainsアカウントに接続するにはどうすればよいですか03'
            },
            {
                type: 'text',
                detail: '5.接続されたメールアドレスのライセンスの契約に同意していない場合、基本アカウントのLicenses(ライセンス)ページで契約に同意するようメッセージが表示されます。接続されたアカウントのライセンスは、契約に同意してから使用することができます。'
            },
            {
                type: 'img',
                detail: '複数のメールアドレスをJetBrainsアカウントに接続するにはどうすればよいですか04'
            },
            {
                type: 'text',
                detail: '*制限事項'
            },
            {
                type: 'text',
                detail: '1つのアカウントに最大3つの異なるメールアドレスを接続することができます。'
            },
            {
                type: 'text',
                detail: '1つのメールアドレスは、1つのアカウントに1つしか接続できません。'
            },
            {
                type: 'text',
                detail: '1 回限りのメールアドレスは接続できません。'
            },
            {
                type: 'text',
                detail: '(アカウントからメールアドレスの紐付けを解除する方法)'
            },
            {
                type: 'text',
                detail: 'JetBrainsアカウントでは、いつでもメールアドレスのリンクを解除することができます。'
            },
            {
                type: 'text',
                detail: 'メールアドレスのリンクを解除するには、JetBrains アカウントにログインし、ページ上部の [Your Account (マイアカウント)] をクリックします。接続されているメールに移動し、接続を解除するメールアドレスの横にある [Unlink (リンク解除)] をクリックします。'
            },
            {
                type: 'text',
                detail: '(接続がアカウントに与える影響)'
            },
            {
                type: 'text',
                detail: 'さらに、メールアドレスで接続すると、接続された他のアカウントに保存されている設定、個人データ、決済手段は統合されません。'
            },
            {
                type: 'text',
                detail: 'l組織のライセンス管理'
            },
            {
                type: 'text',
                detail: '組織のライセンスを購入するために使用するメールアドレスと一般アカウントのメールアドレスを接続すると、組織が保有するライセンスは一般アカウントに表示されません。 また、組織の管理者権限のあるメールアドレスと接続した場合でも、管理者権限は基本アカウントと共有されません。'
            },
            {
                type: 'text',
                detail: 'l追加注意事項'
            },
            {
                type: 'text',
                detail: 'アカウント A のメールアドレスをアカウント B に接続し、アカウント B のメールアドレスをアカウント C に接続した場合、アカウント C にはアカウント A に関連するライセンスは表示されません。'
            },
            {
                type: 'text',
                detail: 'JetBrainsアカウントのメールアドレスを変更すると、このアカウントに関連するライセンスが表示されなくなります。 ライセンスを確認するには、古いメールアドレスの接続を解除し、新しいメールアドレスを接続する必要があります。'
            },
        ]
    },
    {
        type: '購入後のライセンス提供',
        title: 'ライセンス証明書はどのように受け取るのですか？',
        description: [
            {
                type: 'text',
                detail: 'ライセンス購入後、ライセンス証明書がメールで送信されます。ライセンス証明書のメールに記載されたソフトウェアアクティベーションリンクからライセンスにアクセスすることができます。ライセンス契約に同意していない場合は、ライセンス契約に同意を求めるメッセージが表示されます。'
            },
        ]
    },
    {
        type: '購入後のライセンス提供',
        title: '個人用ライセンスの取得と使用方法を教えてください。',
        description: [
            {
                type: 'video',
                detail: ''
            },
        ]
    },
    {
        type: '購入後のライセンス提供',
        title: 'ライセンスオプション',
        description: [
            {
                type: 'text',
                detail: '1.JetBrainsアカウント'
            },
            {
                type: 'text',
                detail: '組織のライセンスがユーザーに割り当てられると、ユーザーは新しいJetBrainsアカウントを作成するか、既存のJetBrainsアカウントを使用してJetBrainsアカウントWebサイトでライセンスを確認することができます。個人顧客が所有するライセンスも同様にJetBrainsアカウントのウェブサイトに表示されます。 そのため、個人顧客は、製品を購入したJetBrainsアカウントにログインしてライセンスを確認することができます。'
            },
            {
                type: 'img',
                detail: 'ライセンスオプション01'
            },
            {
                type: 'img',
                detail: 'ライセンスオプション02'
            },
            {
                type: 'text',
                detail: '2. アクティベーションコード'
            },
            {
                type: 'text',
                detail: 'JetBrainsアカウントのウェブサイトからライセンスのアクティベーションコード(activation code)をダウンロードすることができます。アクティベーションコードを使用すると、製品をオフラインで使用することができます。ただし、学生向けJetBrains製品パックにはこのライセンスオプションは提供されていません。'
            },
            {
                type: 'img',
                detail: 'ライセンスオプション03'
            },
            {
                type: 'img',
                detail: 'ライセンスオプション04'
            },
        ]
    },
    {
        type: 'JetBrainsソフトウェアのアクティベーション',
        title: 'JetBrains 製品をアクティベーションするにはどうすればいいですか？',
        description: [
            {
                type: 'title',
                detail: 'ステップ1. JetBrainsアカウントとライセンスの接続を確認'
            },
            {
                type: 'text',
                detail: '1.JetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.  アクティベーションするライセンスがあることを確認します。'
            },
            {
                type: 'title',
                detail: 'ステップ2. ソフトウェアのアクティベーション'
            },
            {
                type: 'text',
                detail: '1.JetBrains製品を起動します。  アクティベーションダイアログがすぐに表示されない場合は、Help(ヘルプ) - Register(登録)をクリックし、Activate New License(新規ライセンスの  アクティベーション)をクリックします。'
            },
            {
                type: 'text',
                detail: '2.Get license from（ライセンスの取得先）からJB Account（JetBrainsアカウント）を選択し、Log In to JetBrains account（JetBrainsアカウントにログイン）をクリックします。'
            },
            {
                type: 'img',
                detail: 'JetBrains 製品をアクティベーションするにはどうすればいいですか？01'
            },
            {
                type: 'text',
                detail: '3.ウェブブラウザが開いたら、JetBrainsアカウントのページに移動します。JetBrainsアカウントまたは他の認証ベンダーを使用してログインします。'
            },
            {
                type: 'text',
                detail: '4. Authorization successful (認証に成功しました) というメッセージが表示されたら、JetBrains 製品に戻ります。次のように、アクティベーションダイアログボックスにライセンス情報が表示されます。There are no valid licenses associated with the account(アカウントに関連するアクティベーションなライセンスがありません)というメッセージが表示された場合は、ステップ1に戻り、使用しているアカウントに適切なライセンスが接続されていることを確認します。'
            },
            {
                type: 'img',
                detail: 'JetBrains 製品をアクティベーションするにはどうすればいいですか？02'
            },
            {
                type: 'text',
                detail: '5. アクティベーションをクリックします。'
            },
            {
                type: 'text',
                detail: '6.製品が アクティベーションされたら、Continue(続行)をクリックして使用を開始することができます。'
            },
        ]
    },
    {
        type: 'JetBrainsソフトウェアのアクティベーション',
        title: 'オフラインアクティベーションコードでJetBrains IDEをアクティベーション',
        description: [
            {
                type: 'title',
                detail: 'ステップ1.アクティベーションコードの生成'
            },
            {
                type: 'text',
                detail: '1.JetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.ライセンスリストからアクティベーションするライセンスを探し、[Download activation code for offline usage(オフライン使用のためのアクティベーションコードのダウンロード)]をクリックします。'
            },
            {
                type: 'img',
                detail: 'オフラインアクティベーションコードでJetBrains IDEをアクティベーション01'
            },
            {
                type: 'text',
                detail: '3.ZIPアーカイブがコンピュータに保存されたら、ダウンロードフォルダに移動し、アーカイブを解凍します。'
            },
            {
                type: 'text',
                detail: '4.解凍すると、アクティベーションコードが含まれている2つのテキストファイルが確認されます。ファイル名は、ファイルに含まれるコードに適したIDEのバージョンを示します。使用しているIDEのバージョンに対応するファイルを選択します。'
            },
            {
                type: 'title',
                detail: 'ステップ2. IDEのアクティベーション'
            },
            {
                type: 'text',
                detail: '1.IDEを実行します。アクティベーションダイアログボックスがすぐに表示されない場合は、Help(ヘルプ) -> Register(登録)に移動し、Activate New License(新規ライセンスのアクティベーション)をクリックします。'
            },
            {
                type: 'text',
                detail: '2. Get license from(ライセンスの取得)セクションでActivation codeを選択します。'
            },
            {
                type: 'img',
                detail: 'オフラインアクティベーションコードでJetBrains IDEをアクティベーション02'
            },
            {
                type: 'text',
                detail: '3.アクティベーションコード入力欄にアクティベーションコードファイルをドラッグするか、ファイル内のテキストを直接コピー＆ペーストします。'
            },
            {
                type: 'text',
                detail: '4. アクティベーションをクリックします。'
            },
            {
                type: 'img',
                detail: 'オフラインアクティベーションコードでJetBrains IDEをアクティベーション03'
            },
        ]
    },
    {
        type: '2 段階認証 (2FA)',
        title: '2 段階認証とは何ですか？',
        description: [
            {
                type: 'text',
                detail: 'ステップ2認証（2FA）は、JetBrainsアカウントのセキュリティを強化し、JetBrainsのライセンスと個人情報を保護するための追加セキュリティ層です。JetBrains アカウントのパスワードを紛失した場合でも、2FAはご本人以外がJetBrainsアカウントにログインできないように保証します。'
            },
        ]
    },
    {
        type: '2 段階認証 (2FA)',
        title: '2段階認証をアクティベーションするにはどうすればよいですか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrainsアカウントで2要素認証をアクティベーションするには、以下の手順に従ってください。'
            },
            {
                type: 'title',
                detail: '1 段階 - 2FA の設定'
            },
            {
                type: 'text',
                detail: '1. JetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.ページ上部の [Your account (マイアカウント)] を選択します。'
            },
            {
                type: 'text',
                detail: '3.右側のメニューからPassword(パスワード)を選択します。'
            },
            {
                type: 'text',
                detail: '4.ページの Two-factor authentication (2段階認証) セクションで Enable 2FA (2FAをアクティベーションする) をクリックします。'
            },
            {
                type: 'text',
                detail: '5.設定ダイアログでパスワードを入力し、Next(次へ)をクリックします。8段階で必要なQRコードが表示されます。'
            },
            {
                type: 'text',
                detail: '6.モバイルデバイスに必要な認証アプリをインストールします。'
            },
            {
                type: 'text',
                detail: '7.モバイルデバイスで認証アプリを開き、新しいアカウントを追加します。'
            },
            {
                type: 'text',
                detail: '8.アプリでQRコードをスキャンします。'
            },
            {
                type: 'text',
                detail: '9.QRコードをスキャンすると、JetBrainsアカウントが認証アプリに保存されます。これで、モバイル認証アプリにJetBrainsアカウントの1回限りの認証コードが作成されます。'
            },
            {
                type: 'text',
                detail: '10.認証アプリの1回限りの認証コードを2FA設定のコード入力欄に入力し、Next（次へ）をクリックします。'
            },
            {
                type: 'title',
                detail: '2 段階 - 代替のログイン方法を保存する'
            },
            {
                type: 'text',
                detail: 'リカバリコードは、モバイルデバイスにアクセスできない場合に使用するコードです。 したがって、リカバリコードをコピーまたはダウンロードし、安全な位置に保存します。'
            },
        ]
    },
    {
        type: '2 段階認証 (2FA)',
        title: '2段階認証でログインするには',
        description: [
            {
                type: 'title',
                detail: '1. 1回限りのコードでログイン'
            },
            {
                type: 'text',
                detail: '1) ログインページでユーザー名とパスワードを入力し、Sign in(ログイン)をクリックします。1 回限りのコードを入力するメッセージが表示されます。'
            },
            {
                type: 'text',
                detail: '2)モバイルデバイスで認証アプリを開き、JetBrainsアカウントのコードを探します。'
            },
            {
                type: 'text',
                detail: '3)ログインページで、アプリに表示された6桁のコードを入力し、Verify（確認）をクリックします。'
            },
            {
                type: 'title',
                detail: '2.リカバリコードでログイン'
            },
            {
                type: 'text',
                detail: 'モバイルデバイスにアクセスできない場合は、1回限りの認証コードの代わりにリカバリコードを使用することができます。'
            },
        ]
    },
    {
        type: '2 段階認証 (2FA)',
        title: 'リカバリコードでログインするにはどうすればよいですか？',
        description: [
            {
                type: 'title',
                detail: 'リカバリコードの事前保存する'
            },
            {
                type: 'text',
                detail: '2FAを設定する際に提供されるリカバリコードをすぐに保存することをお勧めします。JetBrainsアカウントにアクセスできる場合は、いつでもリカバリコードを保存することができます。'
            },
            {
                type: 'text',
                detail: 'リカバリコードを保存'
            },
            {
                type: 'text',
                detail: '1.JetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.ページ上部の [Your account (マイアカウント)をクリックします。'
            },
            {
                type: 'text',
                detail: '3.右側のメニューからPassword(パスワード)を選択します。'
            },
            {
                type: 'img',
                detail: 'リカバリコードでログインするにはどうすればよいですか？01'
            },
            {
                type: 'text',
                detail: '4. Two-factor authentication (2段階認証) セクションで View recovery codes (リカバリコードの表示) をクリックします。'
            },
            {
                type: 'img',
                detail: 'リカバリコードでログインするにはどうすればよいですか？02'
            },
            {
                type: 'text',
                detail: '5.Identification(識別)ダイアログで認証アプリのワンタイムパスワードを入力し、Next(次へ)をクリックします。'
            },
            {
                type: 'text',
                detail: '6. Recovery codes（リカバリコード）ダイアログボックスで Copy recovery codes（リカバリコードのコピー）または Download as TXT（TXTとしてダウンロード）をクリックします。'
            },
            {
                type: 'img',
                detail: 'リカバリコードでログインするにはどうすればよいですか？03'
            },
            {
                type: 'text',
                detail: '7.リカバリコードを安全な位置に保存します。'
            },
            {
                type: 'text',
                detail: '( リカバリコードでログイン)'
            },
            {
                type: 'text',
                detail: '1.ログインページでユーザー名とパスワードを入力し、Sign in(ログイン)をクリックします。1 回限りのコードを入力するメッセージが表示されます。'
            },
            {
                type: 'text',
                detail: '2.メッセージが表示されたら、1回限りのコードの代わりにリカバリコードのいずれかを入力します。'
            },
            {
                type: 'text',
                detail: 'リカバリコードは一度だけアクティベーションです。ただし、JetBrainsアカウントでいつでも新しいリカバリコードを作成することができます。'
            },
            {
                type: 'text',
                detail: '(新しいリカバリコードの作成)'
            },
            {
                type: 'text',
                detail: '1.「リカバリコードの保存」の5段階まで進みます。'
            },
            {
                type: 'text',
                detail: '2.ダイアログボックスの下部にあるRe-Generate Codes（コードの再作成）をクリックします。'
            },
            {
                type: 'img',
                detail: 'リカバリコードでログインするにはどうすればよいですか？04'
            },
            {
                type: 'text',
                detail: '3.Identification(識別)ダイアログで認証アプリの1回限りの認証コードを入力し、Next(次へ)をクリックしてコードを確認します。'
            },
        ]
    },
    {
        type: '2 段階認証 (2FA)',
        title: '2段階認証に対応していない古いバージョンのJetBrains製品をアクティベーションするにはどうすればいいですか？',
        description: [
            {
                type: 'text',
                detail: '旧バージョンのJetBrains製品は2段階認証(2FA)をサポートしていない可能性があり、ログイン時に1回限りの認証コードを入力するメッセージが表示されません。 旧バージョンのJetBrains製品にログインしてアクティベーションするには、通常のパスワードではなく、一時的なアプリパスワードを入力する必要があります。'
            },
            {
                type: 'title',
                detail: '(製品が2FAをサポートしていることを確認する)'
            },
            {
                type: 'text',
                detail: '1.JetBrains製品を起動します。'
            },
            {
                type: 'text',
                detail: '2.製品登録ダイアログを開きます。Help(ヘルプ) -> Register(登録)を選択します。'
            },
            {
                type: 'text',
                detail: '3.アクティベーション方法としてJetBrainsアカウントまたはJB Accountを選択します。'
            },
            {
                type: 'text',
                detail: '4.インターフェースを確認します。'
            },
            {
                type: 'list',
                detail: [
                    'ユーザー名とパスワードを入力する2つのフィールドが表示される場合は、2FAをサポートしていないバージョンです。 この場合、ログインするにはアプリのパスワードが必要です。',
                    'JetBrains アカウントのウェブサイトに移動するLog in to JetBrains Account（JetBrainsアカウントにログイン）ボタンが表示される場合は、製品が2FAをサポートしており、アプリパスワードは必要ありません。',
                ]
            },
            {
                type: 'text',
                detail: '製品が2FAをサポートしていない場合は、以下の手順に従ってアプリパスワードを取得してログインする必要があります。'
            },
            {
                type: 'title',
                detail: '(アプリパスワードのコピー)'
            },
            {
                type: 'text',
                detail: '1.JetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.ページ上部のYour account(マイアカウント)をクリックします。'
            },
            {
                type: 'text',
                detail: '3.右側のメニューからPassword(パスワード)を選択します。'
            },
            {
                type: 'img',
                detail: '2段階認証に対応していない古いバージョンのJetBrains製品をアクティベーションするにはどうすればいいですか？01'
            },
            {
                type: 'text',
                detail: '4.Two-factor authentication（2段階認証）セクションで、Get app password（アプリのパスワードを取得）をクリックします。'
            },
            {
                type: 'img',
                detail: '2段階認証に対応していない古いバージョンのJetBrains製品をアクティベーションするにはどうすればいいですか？02'
            },
            {
                type: 'text',
                detail: '5.Identification(識別)ダイアログで認証アプリの1回限りの認証コードを入力し、Get app password(アプリのパスワードを取得)をクリックします。'
            },
            {
                type: 'text',
                detail: '6. Copy app password(アプリパスワードのコピー)をクリックしてパスワードをクリップボードにコピーします。'
            },
            {
                type: 'img',
                detail: '2段階認証に対応していない古いバージョンのJetBrains製品をアクティベーションするにはどうすればいいですか？03'
            },
            {
                type: 'text',
                detail: '先ほどコピーしたパスワードは一時的なパスワードなので、保存したり覚えておく必要はありません。 いつでもJetBrainsアカウントから新しいアプリパスワードを取得することができます。'
            },
            {
                type: 'title',
                detail: '(アプリパスワードでログイン)'
            },
            {
                type: 'text',
                detail: '1.使用しているJetBrains製品を起動します。'
            },
            {
                type: 'text',
                detail: '2.製品登録ダイアログを開きます。Help(ヘルプ) -> Register(登録)を選択します。'
            },
            {
                type: 'text',
                detail: '3.ダイアログボックスに、JetBrainsアカウントにログインする際に通常使用するのと同じユーザー名を入力します。'
            },
            {
                type: 'text',
                detail: '4. [パスワード] フィールドに先ほどコピーしたアプリのパスワードを入力し、Activateをクリックします。'
            },
            {
                type: 'text',
                detail: '5.製品がアクティベーションされたことを確認します。'
            },
        ]
    },
    {
        type: '2 段階認証 (2FA)',
        title: '2段階認証を無効にするには？',
        description: [
            {
                type: 'text',
                detail: '2 段階認証 (2FA) は、JetBrains アカウントのセキュリティを向上させます。JetBrainsのライセンスと個人情報を不正アクセスから保護するために、2FAを使用することを強くお勧めします。ただし、以下の手順で2FAを無効にすることができます。'
            },
            {
                type: 'text',
                detail: '1.JetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.ページ上部のYour account(マイアカウント)をクリックします。'
            },
            {
                type: 'text',
                detail: '3.右側のメニューからPassword(パスワード)を選択します。'
            },
            {
                type: 'img',
                detail: '2段階認証に対応していない古いバージョンのJetBrains製品をアクティベーションするにはどうすればいいですか？01'
            },
            {
                type: 'text',
                detail: '4.ページの [Two-factor authentication (2段階認証)] セクションの [Disable 2FA (2FAを無効にする)] をクリックします。'
            },
            {
                type: 'img',
                detail: '2段階認証に対応していない古いバージョンのJetBrains製品をアクティベーションするにはどうすればいいですか？02'
            },
            {
                type: 'text',
                detail: '5.Identification(識別)ダイアログで、認証アプリの1回限りの認証コードを入力します。モバイル機器にアクセスできない場合は、使い捨て認証コードの代わりに復旧コードのいずれかを入力することができます。'
            },
            {
                type: 'text',
                detail: '6. Disable 2FA(2段階認証解除)をクリックします。'
            },
        ]
    },
    {
        type: '2 段階認証 (2FA)',
        title: '',
        description: [
            {
                type: 'text',
                detail: ''
            },
        ]
    },
    {
        type: '2 段階認証 (2FA)',
        title: 'アカウントがロックされるとどうなりますか？',
        description: [
            {
                type: 'text',
                detail: '1.リカバリコードを使用してログイン'
            },
            {
                type: 'text',
                detail: 'リカバリコードは、2段階認証の設定時に受け取る8桁のコードです。コードを受け取ったら、ログイン時に使い捨てコードの代わりにコードを入力することができます。'
            },
        ]
    },
    {
        type: '組織でのJetBrainsアカウントの使用',
        title: 'JetBrainsアカウントAPIとは何ですか、どのように使うのですか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrainsアカウントAPIを使用すると、ライセンスを自動的に管理し、JetBrainsアカウントからライセンスの使用に関するデータを取得することができます。 また、APIメソッドを使用すると、ライセンス情報を確認したり、ライセンスの割り当てや回収を行うことができます。'
            },
            {
                type: 'title',
                detail: '(役割)'
            },
            {
                type: 'text',
                detail: 'APIには、組織に割り当てることができる3つのアクセスレベルがあります。'
            },
            {
                type: 'list',
                detail: [
                    '組織管理者の役割は、APIのアクティベーションおよび無効化し、自分自身のトークンを作成および再生成し、組織の他の管理者を含む組織のすべてのユーザーからアクセストークンを取得することができます。',
                    'チーム管理者役割は、チームの他の管理者を含め、そのチームのすべてのチームメンバーのアクセストークンを作成、再生成、削除することができます。',
                    '閲覧者役割と基本担当者役割は、自分自身に対するアクセストークンを作成、再生成、削除することができます。閲覧者と基本担当者アクセストークンは、APIへの読み取り専用アクセスを許可します。',
                ]
            },
            {
                type: 'title',
                detail: '(APIをアクティベーションする方法)'
            },
            {
                type: 'text',
                detail: 'APIをアクティベーションするには、以下の手順に従ってください。'
            },
            {
                type: 'text',
                detail: '1.組織の管理者アカウントでJetBrainsアカウントにログインします。 (チーム管理者はAPIをアクティベーションまたは無効にすることはできません)。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューから組織名をクリックし、Administration（管理）をクリックします。'
            },
            {
                type: 'text',
                detail: '3. Enable API(APIを使用)をクリックします。'
            },
            {
                type: 'img',
                detail: 'JetBrainsアカウントAPIとは何ですか、どのように使うのですか？01'
            },
            {
                type: 'text',
                detail: '4.上記の手順を完了すると、閲覧者と基本担当者を含め、すべての組織およびチーム管理者がAPIを使用することができ、割り当てられたすべてのユーザーはトークンを生成することができます。'
            },
            {
                type: 'title',
                detail: '(APIを無効にする方法)'
            },
            {
                type: 'text',
                detail: 'APIを無効にするには、上記の1-2ステップを実行した後、Disable API(APIを無効にする)をクリックします。Disable APIボタンを押すと、すべての管理者、閲覧者、基本担当者に対してAPIが無効になります。'
            },
            {
                type: 'img',
                detail: 'JetBrainsアカウントAPIとは何ですか、どのように使うのですか？02'
            },
            {
                type: 'title',
                detail: '(APIメソッドにアクセスする方法)'
            },
            {
                type: 'text',
                detail: 'APIメソッドにアクセスするには2つのパラメータが必要です。'
            },
            {
                type: 'list',
                detail: [
                    'X-Customer-Code パラメータの顧客コード。'
                ]
            },
            {
                type: 'text',
                detail: '顧客コードは固有の組織IDです。顧客コードを確認するには、JetBrains アカウントにアクセスし、組織名の横にある番号を確認します。'
            },
            {
                type: 'list',
                detail: [
                    'X-Api-Keyパラメータのアクセストークンを作成する方法'
                ]
            },
            {
                type: 'text',
                detail: '1.JetBrainsアカウントに移動します。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューから組織またはチーム名をクリックし、Administration（管理）をクリックします。'
            },
            {
                type: 'text',
                detail: '3. Generate Token (トークンの生成] をクリックします。'
            },
            {
                type: 'text',
                detail: '4.ポップアップダイアログボックスにトークンが表示されます。この時、トークンはセキュリティ上の理由で一度だけ表示されるので、ダイアログボックスを閉じる前にコードを安全な場所に保管し、トークンを他の人と共有しないでください。 また、トークンを紛失した場合、再度生成する必要があります。 新しいトークンを生成すると、以前のトークンは無効になります。'
            },
            {
                type: 'title',
                detail: '(トークンの寿命)'
            },
            {
                type: 'text',
                detail: 'アクセストークンは、手動で再生成しない限り、引き続き有効です。 また、各ユーザーは、複数のロールが割り当てられている場合でも、1つのトークンを持ちます。ユーザーが役割を保持していない場合、アクセストークンは自動的にキャンセルされます。'
            },
        ]
    },
    {
        type: '組織でのJetBrainsアカウントの使用',
        title: '他のユーザーが使用できるようにライセンスを返却',
        description: [
            {
                type: 'text',
                detail: 'ライセンスを使用しなくなった場合は、ライセンスを返却することができます。'
            },
            {
                type: 'text',
                detail: '1.JetBrainsアカウントのLicenses(ライセンス)で、現在自分に割り当てられているライセンスのリストを確認できます。'
            },
            {
                type: 'text',
                detail: '2.この画面の上部にライセンス返却(Return license)リンクがあります。ライセンスを返却する場合は、このリンクをクリックすると、ライセンスが返却されます。'
            },
        ]
    },
    {
        type: 'JetBrainsアカウントに関するFAQ',
        title: 'JetBrainsアカウントに送信される通知メールの言語を変更できますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、お好きな言語で通知メールを受け取ることができます。'
            },
            {
                type: 'text',
                detail: '1.JetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.ページ上部のYour Account（マイアカウント）をクリックします。'
            },
            {
                type: 'text',
                detail: '3. [Email Notification Language (メール通知言語)] の横にある [Change (変更)] をクリックします。'
            },
            {
                type: 'text',
                detail: '4.ポップアップダイアログで希望の言語を選択し、[Change(変更)]をクリックします。これで、選択した言語でJetBrainsの通知メールを受け取ることができます（英語以外の言語を選択した場合でも、一部のメールは英語で送信される場合があります）。'
            },
        ]
    },
    {
        type: 'JetBrainsアカウントに関するFAQ',
        title: 'なぜJetBrainsアカウントを使用する必要があるのですか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrainsアカウントを使用すると、JetBrains製品を登録し、招待によりライセンスを配布することができます。'
            },
            {
                type: 'title',
                detail: '簡単な配布と管理'
            },
            {
                type: 'text',
                detail: '招待URLをユーザーに共有することで、ユーザーはすぐに製品を使用することができます。 また、ライセンスを使用していた開発者がライセンスが不要になった場合は、簡単にライセンスを返却して、他の開発者がライセンスを使用することができます。すべての状況について即座に通知メッセージが表示されるため、管理者が完全にライセンスを管理することができます。'
            },
            {
                type: 'title',
                detail: '体系的な管理'
            },
            {
                type: 'text',
                detail: 'どのユーザーがどの製品を使用しているかを明確に把握することができます。 また、組織内でチームアカウントを作成し、予算とライセンスを分離して管理することができます。'
            },
            {
                type: 'title',
                detail: '簡単なアップグレード'
            },
            {
                type: 'text',
                detail: 'どのユーザーがどの製品を使用しているのかが明確に把握できるため、アップグレードの意思決定が容易です。 また、ライセンスをアップグレードまたは更新する際に、ユーザーが別途行う作業はありません。 ユーザーは新しいバージョンの製品をインストールし、同じJetBrainsアカウント情報を使用して製品を使い続けるだけです。'
            },
            {
                type: 'title',
                detail: 'すべての製品の簡単な認証方法'
            },
            {
                type: 'text',
                detail: 'JetBrainsアカウント名とパスワードを使用して、すべてのJetBrains製品を使用することができます。'
            },
            {
                type: 'title',
                detail: 'すべてのライセンスをまとめて管理'
            },
            {
                type: 'text',
                detail: 'すべてのライセンスをJetBrainsアカウントページで確認できます。新しいコンピュータに製品を新たにインストールする必要がある場合でも、以前のライセンス履歴を検索する必要はありません。'
            },
            {
                type: 'title',
                detail: '考慮すべきこと'
            },
            {
                type: 'text',
                detail: 'JetBrainsアカウントを登録し、招待を承諾した後、製品にログインするにはインターネット接続が必要です。ただし、製品を使用するために毎回インターネットに接続する必要はありません。'
            },
            {
                type: 'title',
                detail: 'アクティベーションコード(activation code)の生成が適切な場合。'
            },
            {
                type: 'text',
                detail: 'ユーザーがインターネットに接続されていない環境の場合、アクティベーションコード(activation code)を通じて製品を使用することができます。'
            },
        ]
    },
    {
        type: 'JetBrainsアカウントに関するFAQ',
        title: 'JetBrainsアカウントでJetBrains製品を アクティベーションするには、インターネット接続が必要ですか？',
        description: [
            {
                type: 'text',
                detail: 'はい、JetBrainsアカウントでJetBrains製品をアクティベーションするには、インターネット接続が必要です。JetBrainsアカウントにログインし、そのアカウントにアクティベーションなライセンスがあることを確認するために、インターネット接続が必要です。インターネットに接続できない場合は、オフライン アクティベーションコードを使用してJetBrains製品をアクティベーションすることができます。'
            },
        ]
    },
    {
        type: 'JetBrainsアカウントに関するFAQ',
        title: 'JetBrainsアカウントでアクティベーションされたJetBrains製品を使用するには、常にインターネット接続が必要ですか？',
        description: [
            {
                type: 'text',
                detail: 'JetBrainsライセンスがJetBrainsアカウントで最初にアクティベーションされると、その後は最大30日間インターネットに接続しなくても製品を使用することができます。 また、オフラインアクティベーションコードを使用すると、インターネットに接続しなくても製品を使用することができます。'
            },
        ]
    },
    {
        type: 'JetBrainsアカウントに関するFAQ',
        title: '個人用ライセンスと商業用ライセンスの両方で同じJetBrainsアカウントを使用できますか？',
        description: [
            {
                type: 'text',
                detail: 'はい、個人用ライセンスと招待で割り当てられた商用ライセンスを同じJetBrainsアカウントで接続することができます。JetBrainsアカウントページでユーザー名をクリックすると、保有しているライセンスの一覧が表示されます。JetBrainsアカウントからJetBrains製品のライセンスをアクティベーションすることができます。'
            },
            {
                type: 'text',
                detail: '会社のライセンスは、チーム/組織プロファイルにリンクされます。ユーザーがチーム/組織プロファイルの管理者である場合、チーム/組織プロファイルをクリックすると、会社が保有するライセンスを確認および管理することができます。ただし、会社のJetBrainsライセンスをJetBrainsアカウントから直接アクティベーションすることはできません。 会社のJetBrainsライセンスをアクティベーションするには、まずそのライセンスをユーザーに割り当てる必要があります。割り当てられたライセンスは、JetBrainsアカウントのユーザー名の下に表示され、JetBrainsアカウントから会社のライセンスをアクティベーションすることができます。'
            },
        ]
    },
    {
        type: '役割と権限',
        title: 'JetBrainsのサブスクリプション更新通知は誰が受け取りますか？',
        description: [
            {
                type: 'text',
                detail: '更新通知は以下の連絡先に送信されます。'
            },
            {
                type: 'text',
                detail: '1.クレジットカード/PayPal決済で指定されたメールアドレス（サブスクリプションパックの自動更新がアクティベーションになっている場合）。'
            },
            {
                type: 'text',
                detail: '2.JetBrainsアカウントのすべての組織管理者。'
            },
            {
                type: 'text',
                detail: '3.JetBrainsアカウントのすべての請求担当者。'
            },
            {
                type: 'text',
                detail: '4.JetBrainsアカウントのすべてのライセンス担当者。'
            },
            {
                type: 'text',
                detail: '5.更新するライセンスを使用しているユーザー'
            },
            {
                type: 'text',
                detail: '上記のリストの担当者は、JetBrainsアカウントでアクティベーションになっている必要があります。'
            },
        ]
    },
    {
        type: '役割と権限',
        title: 'JetBrainsアカウントの管理者とユーザーの役割は何ですか？',
        description: [
            {
                type: 'table',
                detail: {
                    title: ['個人用ライセンス所有者', 'チームマネージャー', '組織管理者', '할당된 라이선스 사용자'],
                    details: [
                        ['JetBrainsアカウントでJetBrains製品をアクティベーションする', '', '', '', '']
                        ['ライセンスの返却', '', '', '', '']
                        ['ライセンスの割り当てと取り消し', '', '', '', '']
                        ['レガシーライセンスキーの生成', '', '', '', '']
                        ['オフラインアクティベーションコードの生成', '', '', '', '']
                        ['チームの生成', '', '', '', '']
                        ['チームの統合', '', '', '', '']
                        ['チーム間のライセンス移動', '', '', '', '']
                        ['チーム管理者の招待', '', '', '', '']
                        ['組織管理者の招待', '', '', '', '']
                    ]
                }
            },
        ]
    },
    {
        type: 'ライセンスの割り当てと取り消し',
        title: '商業用ライセンスをユーザーに手動で割り当てるにはどうすればよいですか？',
        description: [
            {
                type: 'title',
                detail: '(利用可能なライセンスを割り当てるには)'
            },
            {
                type: 'text',
                detail: '1. 組織またはチームの管理者権限でJetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューから組織またはチーム名をクリックします。'
            },
            {
                type: 'text',
                detail: '3. 会社またはチームが保有するすべてのライセンスのリストが表示されます。ここで、ユーザーに割り当てたい製品を探し、[Active subscriptions(アクティベーションサブスクリプション)をクリックします。'
            },
            {
                type: 'text',
                detail: '4.使用可能なライセンスを探し、横にある[Assign(割り当て)]をクリックします。'
            },
            {
                type: 'text',
                detail: '5.ユーザーのメールアドレス、姓と名を入力します。Assign(割り当て)をクリックします。'
            },
        ]
    },
    {
        type: 'ライセンスの割り当てと取り消し',
        title: '商業用ライセンスを一括招待状に割り当てるにはどうすればよいですか？',
        description: [
            {
                type: 'title',
                detail: '(一括招待を作成するには)'
            },
            {
                type: 'text',
                detail: '1. 組織またはチームの管理者権限でJetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューから組織またはチームの名前をクリックします。'
            },
            {
                type: 'text',
                detail: '3.チーム管理者の場合は、5段階に進んでください。'
            },
            {
                type: 'text',
                detail: '組織管理者の場合は、左側のメニューからTeams(チーム)をクリックします。'
            },
            {
                type: 'text',
                detail: '4.ライセンスを保有しているチームを選択します。'
            },
            {
                type: 'text',
                detail: '5.左側のメニューから Invitations(招待)をクリックし、Create Invitation(招待の作成)をクリックします。'
            },
            {
                type: 'text',
                detail: '6.招待リンクを作成するJetBrains製品を選択します。'
            },
            {
                type: 'text',
                detail: '7.Create（作成）をクリックします。招待ページから招待リンクをコピーしてユーザーに送信します。'
            },
            {
                type: 'text',
                detail: '8.ユーザーが正常にライセンスを取得するたびに、メール通知が届きます。 また、招待ページの下部にあるAccepted invitations（受け入れられた招待）セクションには、ライセンスを取得したユーザーのリストが表示されます。'
            },
            {
                type: 'title',
                detail: '(招待リンクを使用してライセンスをリクエストする方法)'
            },
            {
                type: 'text',
                detail: '1.ユーザーは招待リンクからJetBrainsアカウントのログインページに移動します。アカウントをお持ちでない場合は、アカウントを作成する必要があります。'
            },
            {
                type: 'text',
                detail: '2.ログインすると、ユーザーのアカウントページに新しく割り当てられたライセンスが表示され、アカウントの資格情報を使用してJetBrains製品にライセンスをアクティベーションにすることができます。'
            },
            {
                type: 'text',
                detail: '3.ユーザーに「No assets left」エラーメッセージが表示された場合、他のユーザーがすでにすべてのライセンスを要求している可能性があります。 この場合、未使用のライセンスを回収することで、他のユーザーがライセンスを要求することができます。'
            },
            {
                type: 'title',
                detail: '(ライセンスが割り当てられたチームを確認する方法)'
            },
            {
                type: 'text',
                detail: '1.組織管理者権限でJetBrainsアカウントにログインした状態で、組織名をクリックします。'
            },
            {
                type: 'text',
                detail: '2.ライセンスリストから、ユーザーに割り当てたい製品を探し、Active subscriptions（アクティブサブスクリプション）をクリックします。'
            },
            {
                type: 'text',
                detail: '3.ライセンス表のTeam(チーム)列にチーム名が表示されます。'
            },
        ]
    },
    {
        type: 'ライセンスの割り当てと取り消し',
        title: 'ライセンスを回収した後、新しいユーザーに割り当てる方法は何ですか？',
        description: [
            {
                type: 'link',
                detail: '1. https://account.jetbrains.com/에 にログインします。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューからOrganization/Team(組織/チーム)をクリックします。'
            },
            {
                type: 'text',
                detail: '3. Active Subscriptions(アクティベーションされたサブスクリプション)をクリックします。'
            },
            {
                type: 'text',
                detail: '4.回収するライセンスを選択し、Manage(管理)をクリックし、Revoke N licenses from User(ユーザーからN個のライセンスを回収)を選択します。'
            },
            {
                type: 'text',
                detail: '5.Assign(割り当て)をクリックし、新しいユーザーの情報(名前/メールアドレス)を入力すると、ライセンスを他のユーザーに割り当てることができます。'
            },
        ]
    },
    {
        type: 'サブスクリプション管理',
        title: 'アクティベーションされたサブスクリプションまたはサービスに接続されたお支払い方法を削除するにはどうすればよいですか？ ',
        description: [
            {
                type: 'text',
                detail: 'IDE、.NETツール、プラグインサブスクリプションの自動更新時に使用する支払い方法を削除すると、自動更新がキャンセルされます。 そのため、有効期限までしかそのサブスクリプション製品を使用することができません。自動更新を再開するには、新しい支払い方法を設定する必要があります。 手順は次の項目を参照してください。'
            },
            {
                type: 'list',
                detail: [
                    '個人向けサブスクリプションの自動更新を設定するにはどうすればよいですか？ (リンク接続)',
                    '商用サブスクリプションの自動更新をアクティベーションまたは無効にするにはどうすればよいですか？ (リンク接続) ',
                ]
            },
            {
                type: 'text',
                detail: 'サブスクリプションは、JetBrains アカウントの [ライセンス] ページから直接更新するか、有効期限の直前に送信される通知メールに記載されているリンクを使用して更新することができます。'
            },
        ]
    },
    {
        type: 'サブスクリプション管理',
        title: 'サブスクリプションパックとは何ですか？',
        description: [
            {
                type: 'text',
                detail: 'サブスクリプションパックは、それぞれ異なる時期に	期限が切れるサブスクリプションの有効期限をすべて同じに統合する方法です。サブスクリプションパックに含まれるサブスクリプションのうち、最初に有効期限が切れるライセンスの有効期限を基準に統合されます。'
            },
            {
                type: 'text',
                detail: '例えば、以下の例は、それぞれ異なる時期に有効期限が切れる7つの年間サブスクリプションを含むサブスクリプションパック0220/ULFQXOBがあります。'
            },
            {
                type: 'text',
                detail: '3 x IntelliJ IDEA, 有効期限：2020年4月24日'
            },
            {
                type: 'text',
                detail: '1 x PyCharm, 有効期限：2021年1月30日'
            },
            {
                type: 'text',
                detail: '3 x WebStorm, 有効期限: 2021年3月24日'
            },
            {
                type: 'text',
                detail: '最初に有効期限が切れる製品が365日間使用できるように更新され、サブスクリプションパックの他の製品も同じ有効期限に合わせて更新されます。この例の場合、7つのサブスクリプションパックすべてのサブスクリプションの有効期限は2021年4月24日に一斉に更新されます。'
            },
            {
                type: 'text',
                detail: 'IntelliJ IDEA Ultimate 3つは、2020年4月25日 - 2021年4月24日(全365日)に更新します。'
            },
            {
                type: 'text',
                detail: 'PyCharm 1つは2021年1月31日 - 2021年4月24日(84日間計算)更新。'
            },
            {
                type: 'text',
                detail: 'WebStorm 3つは2021年3月25日 - 2021年4月24日(31日間計算)更新'
            },
        ]
    },
    {
        type: 'チーム利用',
        title: 'Teamとは何ですか？',
        description: [
            {
                type: 'text',
                detail: 'チームは、組織を複数の部分に分けて管理できる組織のサブ構成です。各チームにライセンスを割り当て、チーム管理者がライセンスを管理することができます。組織の管理者は以下を行うことができます。'
            },
            {
                type: 'text',
                detail: '1.新しいチームの作成'
            },
            {
                type: 'text',
                detail: '2.チーム間のライセンス移動'
            },
            {
                type: 'text',
                detail: '3.チーム管理者の招待'
            },
        ]
    },
    {
        type: 'チーム利用',
        title: 'Organization プロフィールと Team プロフィールの違いは何ですか？',
        description: [
            {
                type: 'list',
                detail: [
                    'Organizationプロフィールは、組織全体に提供され、組織名で識別されます。',
                    'ここでTeamプロファイルは、ライセンスを独立して管理できるOrganizationに該当し、ライセンスを購入する際に使用される新しいメールアドレスごとにTeamが自動的に生成されます。 (この場合、Teamはライセンス保有者のメールアドレスで最初に識別されます。)また、Organizationプロフィールで管理者が手動でTeamを生成することもできます。',
                ]
            },
        ]
    },
    {
        type: 'チーム利用',
        title: '新しいチームを作成するにはどうすればよいですか？',
        description: [
            {
                type: 'text',
                detail: '1.組織の管理者権限でJetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューから組織名をクリックします。'
            },
            {
                type: 'text',
                detail: '3.Teams(チーム)をクリックします。'
            },
            {
                type: 'text',
                detail: '4.右上隅にあるCreate New Team（新しいチームの作成）ボタンをクリックし、新しいチームの名前を入力してCreate（作成）をクリックします。'
            },
            {
                type: 'text',
                detail: '5.新しいチームの管理画面にリダイレクトされます。'
            },
            {
                type: 'text',
                detail: 'このビューでInvite Administrator(管理者招待)をクリックしてチーム管理者を追加します。'
            },
        ]
    },
    {
        type: 'チーム利用',
        title: '2つのチームを統合するにはどうすればよいですか？',
        description: [
            {
                type: 'text',
                detail: '1.組織の管理者権限でJetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューから組織名をクリックします。'
            },
            {
                type: 'text',
                detail: '3.Teams(チーム)をクリックします。'
            },
            {
                type: 'text',
                detail: '4.削除したいチーム名をクリックします。'
            },
            {
                type: 'text',
                detail: '5.ページで、選択したチームの [Administration(管理)] をクリックします。'
            },
            {
                type: 'text',
                detail: '6.Merge(統合)をクリックし、旧チームを統合する新しいチームを選択し、Merge(統合)をクリックします。'
            },
        ]
    },
    {
        type: 'チーム利用',
        title: 'チーム間でライセンスを移動するにはどうすればよいですか？',
        description: [
            {
                type: 'text',
                detail: '1.組織の管理者権限でJetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューから組織名をクリックします。'
            },
            {
                type: 'text',
                detail: '3.移行する製品で、Active Subscriptions（アクティベーションされたサブスクリプション）をクリックします。'
            },
            {
                type: 'text',
                detail: '4.移行するライセンスを選択し、[Manage(管理)]をクリックし、[Transfer to another team(別のチームに移行]を選択します。'
            },
            {
                type: 'text',
                detail: '5.ライセンスを移管する新しいチームを選択し、Transfer( 移動)をクリックします。'
            },
        ]
    },
    {
        type: 'チーム利用',
        title: 'チーム管理者を追加または削除するにはどうすればいいですか？',
        description: [
            {
                type: 'text',
                detail: '1.チームまたは組織全体の管理者権限でJetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2.左側のメニューから組織またはチームの名前をクリックします。'
            },
            {
                type: 'text',
                detail: '3.同じメニューで、[Teams](チーム) をクリックします。 (チーム管理者である場合、またはチームオプションが表示されない場合は、5段階に進んでください)。'
            },
            {
                type: 'text',
                detail: '4.目的のチームの名前をクリックします。'
            },
            {
                type: 'text',
                detail: '5.左側のメニューからAdministration(管理)をクリックします。'
            },
            {
                type: 'text',
                detail: '6.チーム管理者を追加または削除できる管理ビューにリダイレクトされます。'
            },
            {
                type: 'text',
                detail: '新しいチーム管理者を追加するには、Invite Administrator(管理者招待)をクリックして、追加したい人に招待メールを送信します。既存のチーム管理者を削除する場合は、メールアドレスの横にあるRemove(削除)をクリックします。'
            },
        ]
    },
    {
        type: '組織プロファイルの管理',
        title: '組織プロファイルに管理者を追加するにはどうすればよいですか？',
        description: [
            {
                type: 'text',
                detail: '1. JetBrainsアカウントにログインします。'
            },
            {
                type: 'text',
                detail: '2. 左側のメニューから組織名をクリックします。'
            },
            {
                type: 'text',
                detail: '3.Administration(管理)をクリックします。'
            },
            {
                type: 'text',
                detail: '4.右上隅にあるInvite Administrator（管理者を招待）ボタンをクリックします。'
            },
            {
                type: 'text',
                detail: '5. Go to email client(メールクライアントに移動)をクリックして追加したい管理者に送信します。'
            },
            {
                type: 'text',
                detail: '6.または、招待テキストをコピーして、他のコミュニケーション手段を使用して追加したい管理者に送ることもできます。'
            },
        ]
    },
    {
        type: '組織プロファイルの管理',
        title: '組織プロファイルから管理者を削除するにはどうすればよいですか？',
        description: [
            {
                type: 'link',
                detail: '1. https://account.jetbrains.com/에 にログインします。'
            },
            {
                type: 'text',
                detail: '2.左側にある My Company Name(会社名)をクリックします。'
            },
            {
                type: 'text',
                detail: '3.左側のAdministration(管理)をクリックします。'
            },
            {
                type: 'text',
                detail: '4.ここに組織の現在の管理者リストが表示されます。'
            },
            {
                type: 'text',
                detail: '5.Remove(削除)をクリックして不要な管理者を削除することができます。自分の管理者権限を削除するには、Leave(出る)をクリックします。'
            },
        ]
    },
]