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
                detail: '➡ 見積書上の有効期限が過ぎた場合：新しい見積書と決済リンクをお送りいたします。'
            },
            {
                type: 'text',
                detail: '➡ 見積書上の有効期限が過ぎていない場合：決済リンクを再送信させていただきます'
            }
        ]
    },
    {
        type: '購入について',
        title: '見積書の有効期限が過ぎてしまった場合の解決方法を教えてください。',
        description: [
            {
                type: 'text',
                detail: '➡ お手数ですが、再度お見積り依頼をお願いします。お見積もり依頼は、ホームページやメールでご依頼いただいても構いません。'
            }
        ]
    },
    {
        type: '購入について',
        title: '領収書は発行してもらえますか？',
        description: [
            {
                type: 'text',
                detail: '➡ クレジットカード決済については、領収書をお送りいたします。銀行振込でのお支払いの領収書は、弊社様式の納品書で代用させていただきます。 また、書面の郵送は対応しておりません。'
            }
        ]
    },
    {
        type: '購入について',
        title: '納品書の発行可能でしょうか？',
        description: [
            {
                type: 'text',
                detail: '➡ 弊社フォームにて発行可能です。'
            }
        ]
    },
    {
        type: '購入について',
        title: '後払いでの購入はできませんか？',
        description: [
            {
                type: 'text',
                detail: '➡ 法人の場合は後払い対応可能です。 (初めて購入される法人様は要相談) 個人の場合は、申し訳ございませんが、前払いのみとなります。'
            }
        ]
    },
    {
        type: '購入について',
        title: '数量(金額)が多いのですが、個別に相談できますか？',
        description: [
            {
                type: 'text',
                detail: '➡ お問い合わせのフォームやメールでお問い合わせください。 (salesメール追加)'
            }
        ]
    },
    {
        type: '購入について',
        title: '注文をキャンセルすることはできますか？',
        description: [
            {
                type: 'text',
                detail: '➡ 注文のキャンセル依頼メールと一緒に見積り番号とメールアドレスをお知らせください。キャンセル可能期間内のご注文に限り、キャンセルさせていただきます。'
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
                detail: '➡ 順次回答をさせて頂いております。申し訳ございませんが、少々お待ちいただければ幸いです。'
            },
            {
                type: 'text',
                detail: '➡ LINEの回答可能時間は9:00～18:00です。'
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
                detail: '➡ 申し訳ございませんが、弊社で購入されたライセンスを優先的にサポートさせていただきます。'
            },
        ]
    },
    {
        type: 'サポート',
        title: 'JetBrains製品のトレーニングは可能ですか？',
        description: [
            {
                type: 'text',
                detail: '➡ ユーザー向けの製品教育は現在サポートしておりません。 ライセンスの使用中に発生するエラーや単発的なその他のお問い合わせは、弊社ホームページの「お問い合わせ」をご利用ください。'
            },
        ]
    },
    {
        type: 'その他',
        title: '',
        description: [
            {
                type: 'text',
                detail: ''
            },
        ]
    },
    {
        type: 'その他',
        title: '',
        description: [
            {
                type: 'text',
                detail: ''
            },
        ]
    },
    {
        type: 'その他',
        title: '',
        description: [
            {
                type: 'text',
                detail: ''
            },
        ]
    },
    {
        type: 'その他',
        title: '',
        description: [
            {
                type: 'text',
                detail: ''
            },
            {
                type: 'text',
                detail: ''
            },
            {
                type: 'text',
                detail: ''
            },
            {
                type: 'text',
                detail: ''
            },
        ]
    },
    {
        type: 'その他',
        title: '',
        description: [
            {
                type: 'text',
                detail: ''
            },
            {
                type: 'text',
                detail: ''
            },
            {
                type: 'text',
                detail: ''
            },
        ]
    },
    {
        type: 'その他',
        title: '',
        description: [
            {
                type: 'text',
                detail: ''
            },
        ]
    },
    
]