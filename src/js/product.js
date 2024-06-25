export const tabList = [
    {
        name: 'View All',
    },
    {
        name: 'JavaScript / TypeScript',
        type: ['WebStorm']
    },
    {
        name: 'HTML / CSS',
        type: ['WebStorm']
    },
    {
        name: 'Python',
        type: [
            'PyCharm',
            'DataSpell'
        ]
    },
    {
        name: 'SQL / databases',
        type: [
            'DataGrip',
            'DataSpell',
        ]
    },
    {
        name: 'Java / Scala',
        type: ['IntelliJ IDEA']
    },
    {
        name: 'C# / C++ / C',
        type: [
            'CLion',
            'Rider',
            'ReSharper',
            'ReSharper C++',
        ]
    },
    {
        name: 'PHP',
        type: ['PhpStorm']
    },
    {
        name: 'Go',
        type: ['GoLand']
    },
    {
        name: 'Kotlin',
        type: ['IntelliJ IDEA']
    },
    {
        name: 'Ruby',
        type: ['RubyMine']
    },
    {
        name: 'R',
        type: ['DataSpell']
    },
    {
        name: 'VB.NET / F#',
        type: [
            'Rider',
            'ReSharper'
        ]
    },
    {
        name: 'Extension',
        type: [
            'ReSharper',
            'ReSharper C++',
            'dotCover',
        ]
    },
    {
        name: 'Profiler',
        type: [
            'dotTrace',
            'dotMemory',
        ]
    },
    {
        name: 'Product Pack',
        type: [
            'All Products Pack',
            'dotUltimate',
        ]
    },
    {
        name: 'Plugin',
        type: [
            'AI Assistant',
            'Code With Me',
            'JetBrains AI'
        ]
    },
    {
        name: 'Team Tool',
        type: [
            'Datalore',
            'YouTrack',
            'Space',
            'Qodana',
            'TeamCity',
        ]
    },
]

const commonSubscribe = [
    {
        title: '商用利用',
        description: '法人 (営利および非営利) は、商用目的で使用するソフトウェアが必要な場合、商業用 Toolbox (JetBrains デスクトップ開発者ツール) サブスクリプションを利用することができます。法人は、Toolboxサブスクリプションで入手したソフトウェアを、あらゆるコンピュータおよびオペレーティングシステムで使用することができます。ただし、ソフトウェアの同時ユーザー数の合計が、法人が購入したサブスクリプションの数量を超えることはできません。'
    },
    {
        title: '個人用',
        description: '個人の費用でToolbox（JetBrains Desktop Developer Tools）サブスクリプションを購入する場合は、個人用Toolboxサブスクリプションが適しています。個人用 Toolbox サブスクリプションは、いかなる方法でも法人が購入および返金することはできません。 個人用 Toolbox サブスクリプションで取得したソフトウェアは、法人のハードウェアを含むすべてのハードウェアで使用することができます。'
    },
]

const commonFAQ = [
    {
        title: 'JetBrainsのライセンスモデルは何ですか？',
        description: 'JetBrainsの製品には、サブスクリプションライセンスまたは永久ライセンスが適用されます。まず、サブスクリプションライセンスの場合、お客様はJetBrains製品の月額または年間サブスクリプションを購入することができます。サブスクリプションを更新することで、最新バージョンのJetBrains製品を継続的に使用することができます。 特にIDE（統合開発環境）製品については、365日連続でサブスクリプションを購入すると、フォールバックライセンスを取得することができます。次に、永久ライセンスの場合、お客様は特定のバージョンのJetBrains製品を永久に購入することになります。サポートされていない最新バージョンのJetBrains製品を使用したい場合は、ライセンスのアップグレードが必要です。サブスクリプションライセンスモデルはDatalore Team、Datalore Enterprise、YouTrack Cloud、Space、Qodana、TeamCity Cloudに適用され、永久ライセンスモデルはYouTrack Server、TeamCity On-Premisesに適用されます。'
    },
    {
        title: 'JetBrains Toolboxとは何ですか？',
        description: 'JetBrains Toolboxは、JetBrainsのデスクトップ開発者向けツールです。JetBrains Toolboxは、月額または年間サブスクリプションで利用でき、以下の製品が含まれています。',
        list: [
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
    {
        title: '永久フォールバックライセンスとは何ですか？',
        description: '永久フォールバックライセンスは、JetBrains Toolbox（JetBrains Desktop Developer Tools）製品を1年間サブスクリプションした場合に提供されるライセンスです。永久フォールバックライセンスにより、特定のバージョンの製品を永久に使用することができます。JetBrains Toolbox製品の年間サブスクリプションを購入すると、購入時に最新バージョンの永久フォールバックライセンスが提供されます。'
    },
    {
        title: '複数のユーザーが同じ商用ライセンスを使用できますか？',
        description: '複数のユーザーが同時に1つのライセンスを使用することはできません。 2人のユーザーが同時に製品を使用する必要がある場合は、それぞれのライセンスを保持する必要がありますが、同時に製品を使用しない場合は、複数のユーザーが1つのライセンスを共有することができます。'
    }
]

export const iconList = [
    {
        idx: 0,
        title: 'All Products Pack',
        detail: 'すべてのJetBrainsデスクトップツールのパッケージ',
        type: [
            'IDE',
            'Extension',
            'Profiler',
        ],
        summary: 'All Products Packは、JetBrainsのすべてのデスクトップツールをまとめたパッケージ製品です。\nAll Products Packでは、JetBrainsのすべてのデスクトップツールを2つの製品価格でご利用いただけます。',
        info: 'All Products Packは、JetBrainsのすべてのデスクトップツールをまとめたパッケージ製品です。All Products Packを使用すると、すべてのJetBrainsデスクトップツールを1つのパッケージライセンスで経済的に使用し、効率的に管理することができます。All Products Packでは、CLion、DataGrip、DataSpell、GoLand、IntelliJ IDEA、PhpStorm、PyCharm、Rider、RubyMine、WebStorm、ReSharper、ReSharper C++、dotCover、dotMemory、dotTrace、Code With Meをご利用いただけます。All Products Packを使用すると、多数の製品をたった2つの製品価格で使用し、簡単に管理することができます。',
        function: [
            {
                title: '経済的なコストと簡単なライセンス管理',
                description: 'All Products Packは、JetBrainsのすべてのデスクトップツールをまとめたパッケージ製品です。All Products Packでは、JetBrainsのすべてのデスクトップツールを2つの製品価格でご利用いただけます。',
                img: 'AllProductsPack01'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥101,270\n(税込み ¥111,397)'
                    },
                    {
                        text: '¥37,570\n(税込み ¥41,327)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥81,016\n(税込み ¥89,118)'
                    },
                    {
                        text: '¥30,056\n(税込み ¥33,062)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥60,762\n(税込み ¥66,838)'
                    },
                    {
                        text: '¥22,542\n(税込み ¥24,796)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ]
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/923'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1247'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/923'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1247'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 1,
        title: 'JetBrains AI',
        detail: 'IDE内部に強力なAI機能を提供するプラグイン',
        type: [
            'AI',
            'IDE',
        ],
        summary: 'JetBrains AIは、IDE(統合開発環境)内部にさまざまなAI機能を提供するプラグインです。\nJetBrains AIが提供するAIチャット、リファクタリング、コード完成などのAI機能は、開発者の生産性を最大化します。',
        info: 'JetBrains AIは、IDE(統合開発環境)内部にさまざまなAI機能を提供するプラグインです。JetBrains AIは、非効率的な作業を代行することで、コーディング時間を大幅に節約し、開発者の生産性を最大化します。JetBrains AIは、AIチャット、リファクタリング、コード補完、ランタイムエラーの説明などさまざまなAI機能を提供します。特に、クラス、関数、変数の名前を変更したり、コード構造を変更する場合、JetBrains AIのリファクタリングにより、安全かつ簡単に作業することができます。',
        function: [
            {
                title: 'AIチャット',
                description: 'JetBrains AIのAIチャットは、現在のプロジェクトに最適な回答を提供します。IDE(統合開発環境)とウェブブラウザを切り替えることなく、IDE内で直接AIチャット機能を使用することができます。',
                img: 'jetBrainsAI01'
            },
            {
                title: 'リファクタリング',
                description: 'JetBrains AIはプロジェクトを分析し、最適なリファクタリングを提案します。JetBrains AIのリファクタリングを使用すると、必要な部分に対して迅速かつ安全にコードを変更することができます。',
                img: 'jetBrainsAI02'
            },
            {
                title: 'Commitメッセージの作成',
                description: 'JetBrains AIは、プロジェクトのすべての変更内容を把握しており、これに基づいてCommitメッセージを作成します。JetBrains AIが提供するCommitメッセージにより、より迅速かつ正確にCommit作業を進めることができます。',
                img: 'jetBrainsAI03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥26,000\n(税込み ¥28,600)'
                    },
                    {
                        text: '¥13,000\n(税込み ¥14,300)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンスの共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術的なお問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1076'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1172'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1076'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1172'
                    },
                ]
            ]
        },
        FAQ: [
            {
                title: 'JetBrains AI Serviceとは何ですか？',
                description: 'JetBrains製品のAI機能は、JetBrains AI Serviceを通じて有効になります。JetBrains AI Serviceは、JetBrains製品とLLM（大規模言語モデル）を接続する役割を果たします。 これにより、JetBrains製品内でAI機能を使用することができます。'
            },
            {
                title: 'JetBrains AI Assistantとは何ですか？',
                description: 'JetBrains AI Assistantは、JetBrains AI Serviceを通じて、ユーザーがIDE（統合開発環境）などの製品で利用できるAI機能のコレクションです。JetBrains AI Assistantは、JetBrains製品ごとに異なり、さまざまな機能で開発者を支援します。 '
            },
            {
                title: 'JetBrains AIはどのようなデータをLLMに転送しますか？',
                description: 'JetBrains AI機能を使用するJetBrains製品は、LLM（大規模言語モデル）にさまざまな情報を送信します。ユーザーが入力したプロンプトだけでなく、コード、ファイル、フレームワークなど、さまざまな情報が含まれます。LLMプロバイダーは、収集したデータを外部と共有することはなく、乱用や誤用がないかどうかを検討するためだけに使用します。JetBrainsは、収集したデータでコードやテキストを作成するモデルを学習させることはなく、JetBrainsはモデルの教育に顧客データを使用するLLMプロバイダーと協力することはありません。'
            },
            {
                title: 'JetBrains AIのサーバーはどこにありますか？',
                description: 'JetBrains AIはAWSサーバーを使用しています。現在、JetBrains AIのサーバーはEU（eu-central-1）にあります。'
            },
            {
                title: 'JetBrains AIのライセンスは、JetBrains製品ごとに購入する必要がありますか？',
                description: 'JetBrains AIライセンスを購入すると、同じアカウントのすべてのJetBrains製品で使用できます。'
            }
        ],
        productLink: ''
    },
    {
        idx: 2,
        title: 'IntelliJ IDEA',
        detail: 'JavaとKotlin開発者向けのIDE',
        type: [
            'Java',
            'Kotlin',
            'Spring',
            'JakartaEE',
            'JavaScript',
            'TypeScript',
        ],
        summary: 'IntelliJ IDEAはJavaとKotlin開発のためのIDE(統合開発環境)です。\nIntelliJ IDEAは、世界中の多くのユーザーから信頼されている強力なコーディングサポート機能を提供します。',
        info: 'IntelliJ IDEAはJavaとKotlin開発向けのIDE(統合開発環境)です。IntelliJ IDEAは、コーディング支援機能はもちろん、それ以上の機能でIDEを拡張します。IntelliJ IDEAのコード補完、静的コード分析、リファクタリングなどの強力なコーディングサポート機能は、開発者の生産性を最大化します。 また、SpringやSpring Boot、Jakarta EE、JPA、Reactorなどの主要技術やフレームワークもIntelliJ IDEAで使用できます。必要な機能があれば、プラグインを追加してIntelliJ IDEAの機能を拡張することができます。全世界のJava開発者の78%が選択したIntelliJ IDEAは、JavaとKotlin開発のための最高の環境を提供します。',
        function: [
            {
                title: 'インテリジェントなコード補完',
                description: 'IntelliJ IDEAはコード補完機能を提供します。IntelliJ IDEAでコード入力を開始すると、プロジェクト全体のインデックスに基づいて正確なコード補完を提案します。これにより、開発時間を節約することができます。',
                img: 'intelliJIDEA01'
            },
            {
                title: 'ダイアグラム',
                description: 'IntelliJ IDEAはダイアグラムをサポートします。IntelliJ IDEAで大型プロジェクトを開発する時、ダイアグラムを使用すると、プロジェクトの構造を簡単に設計して把握することができます。',
                img: 'intelliJIDEA02'
            },
            {
                title: 'JVMフレームワーク',
                description: 'IntelliJ IDEAはSpring、Spring Boot、Jakarta EE、JPA、Reactorなどさまざまなフレームワークをサポートします。',
                img: 'intelliJIDEA03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥77,870\n(税込み ¥85,657)'
                    },
                    {
                        text: '¥21,970\n(税込み ¥24,167)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥62,296\n(税込み ¥68,526)'
                    },
                    {
                        text: '¥17,576\n(税込み ¥19,334)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥51,394\n(税込み ¥46,722)'
                    },
                    {
                        text: '¥13,182\n(税込み ¥14,500)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/979'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1134'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/979'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1134'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 3,
        title: 'PyCharm',
        detail: 'Python開発者向けIDE',
        type: [
            'Python',
            'Django',
            'Jupyter',
            'SQL',
            'JavaScript',
            'Flask',
        ],
        summary: 'PyCharmはPyhton開発者のために設計されたIDE(統合開発環境)です。PyCharmはDjango、Flaskなどのウェブ開発フレームワークはもちろん、Jupyter、Pandasなどのデータサイエンス向けのツールもサポートしています。',
        info: 'PyCharmはPython開発者のために設計されたIDE(統合開発環境)です。PyCharmはPython開発のための全ての技術を集めた環境です。まず、PyCharmはDjango、Flask、FastAPIなどさまざまなウェブ開発フレームワークを提供します。それだけでなく、PyCharmはJupyter Notebookと統合され、Anaconda、Pandas、Polars DataFramesなどさまざまなデータサイエンスツールも提供します。また、PyCharmはPythonはもちろん、JavaScript、TypeScript、SQL、HTML/CSSなどさまざまな言語による開発もサポートします。PyCharmのコード補完、コード検査、エラーの強調表示などさまざまなコーディング支援機能は開発時間を短縮し、特にリファクタリング機能は、プロジェクト全体に対する簡単で安全なコード変更を提供します。Python開発向けのすべてのツールをPyCharmで体験することができます。',
        function: [
            {
                title: 'コーディングサポート',
                description: 'PyCharmはコード補完、リファクタリング、コード検査、エラー表示など、さまざまなコーディングサポート機能を提供します。',
                img: 'pyCharm01'
            },
            {
                title: 'Jupyter Notebookの統合',
                description: 'PyCharmはJupyter Notebookをサポートします。Jupyter NotebookとPyCharmのコードサポート機能が合わさってPython開発環境を向上させます。',
                img: 'pyCharm02'
            },
            {
                title: 'ウィジェットレンダリング',
                description: 'PyCharmは、Matplotlib、Bokeh、Plotly、TensorBoardなどの可視化ライブラリに対してインタラクティブなグラフィックを表示します。',
                img: 'pyCharm03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥32,370\n(税込み ¥35,607)'
                    },
                    {
                        text: '¥12,870\n(税込み ¥14,157)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥28,486\n(税込み ¥25,896)'
                    },
                    {
                        text: '¥10,296\n(税込み ¥11,326)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥19,422\n(税込み ¥21,364)'
                    },
                    {
                        text: '¥7,722\n(税込み ¥8,494)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1004'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1152'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1004'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1152'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 4,
        title: 'PhpStorm',
        detail: 'PHP開発者向けIDE',
        type: [
            'PHP',
            'Laravel',
            'Symfony',
            'WordPress',
            'JavaScript',
            'TypeScript',
        ],
        summary: 'PhpStormは高速でスマートなPHP IDE(統合開発環境)です。\nPhpStormはSymfony、LaravelなどさまざまなフレームワークからHTML、JavaScript、TypeScriptなどさまざまなフロントエンド技術までPHP開発向けのすべてを提供します。',
        info: 'PhpStormは高速でスマートなPHP IDE(統合開発環境)です。PhpStormは、PHP開発のためのすべてを搭載しています。 まず、PhpStormはSymfony、Laravel、Drupal、WordPress、Zend Framework、Magentoなど多数のフレームワークと完全に対応しています。 また、HTML5、CSS、TypeScript、JavaScriptなど様々なフロントエンド技術も完全にサポートしています。PhpStormのコード補完、リファクタリングなどのコーディングサポート機能は開発時間を短縮します。 また、PhpStormはXdebugおよびZend Debuggerと互換性のある視覚的なデバッガを提供し、簡単なデバッグとテストが可能です。PHPだけの機能が満載のPhpStormは最高のPHP開発環境を提供します。',
        function: [
            {
                title: '主なフレームワークのサポート',
                description: 'PhpStormはSymfony、Laravel、Drupal、WordPress、Zend Framework、Magento、Joomla！、CakePHP、Yiiなどさまざまなフレームワークをサポートしています。',
                img: 'phpStorm01'
            },
            {
                title: 'デバッガ',
                description: 'PhpStormはXdebugとZend Debuggerと互換性のあるビジュアルデバッガを提供します。視覚的なデバッガを使用して、アプリケーションの状態を詳細に把握することができます。',
                img: 'phpStorm02'
            },
            {
                title: 'コードテスト',
                description: 'PhpStormはPHPテストフレームワークであるPHPUnit、Pest、Behat、PHPSpec、Codeceptionと統合されます。PhpStormでテストを生成して管理することができます。',
                img: 'phpStorm03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥32,370\n(税込み ¥35,607)'
                    },
                    {
                        text: '¥12,870\n(税込み ¥14,157)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥28,486\n(税込み ¥25,896)'
                    },
                    {
                        text: '¥10,296\n(税込み ¥11,326)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥19,422\n(税込み ¥21,364)'
                    },
                    {
                        text: '¥7,722\n(税込み ¥8,494)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1001'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1143'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1001'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1143'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 5,
        title: 'GoLand',
        detail: 'Go開発者向けIDE',
        type: [
            'Go',
            'JavaScript',
            'TypeScript',
            'SQL',
            'React',
        ],
        summary: 'GoLandはGo開発者のために設計されたIDE(統合開発環境)です。\nGoLandはフロントエンド開発、SQLおよびデータベースを最適化したサポートを提供します。',
        info: 'GoLandはGo開発者のために設計されたIDE(統合開発環境)です。 GoLandはGo開発のためのすべての機能をIDEに搭載しました。 GoLandを使用すると、さまざまなコーディングサポート機能により、コードを非常に簡単に読み込み、書き込み、変更することができます。 また、GoLandはJavaScript、TypeScript、NodeJS、SQL、データベース、Docker、Kubernetes、Terraformなど、Go開発のためのすべての技術とプラットフォームをサポートします。GoLandは単なるIDE以上のGo開発環境を提供します。',
        function: [
            {
                title: 'デバッガー',
                description: 'GoLandは完璧なデバッガを提供します。GoLandデバッガは、追加の設定やプラグインをインストールすることなく、すぐにテストやアプリケーションで使用することができます。',
                img: 'goLand01'
            },
            {
                title: 'Goツール',
                description: 'Code → Go Toolsメニューを使用すると、コマンドラインに切り替えることなく、プロジェクトでGoツールを実行することができます。',
                img: 'goLand02'
            },
            {
                title: 'フロントエンドとバックエンドの開発',
                description: 'GoLandはさまざまなフロントエンド技術をサポートしています。JavaScript、TypeScript、Dart、Reactなど多様な言語をサポートし、プラグインを通じてAngular、NodeJS技術を使うことができます。',
                img: 'goLand03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥32,370\n(税込み ¥35,607)'
                    },
                    {
                        text: '¥12,870\n(税込み ¥14,157)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥28,486\n(税込み ¥25,896)'
                    },
                    {
                        text: '¥10,296\n(税込み ¥11,326)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥19,422\n(税込み ¥21,364)'
                    },
                    {
                        text: '¥7,722\n(税込み ¥8,494)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/998'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1125'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/998'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1125'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 6,
        title: 'Rider',
        detail: '.NET開発者向けIDE',
        type: [
            'C#',
            '.NET',
            'ASP.NET',
            'F#',
            'Unity',
            'Unreal Engine',
        ],
        summary: 'Riderは.NET開発のためのクロスプラットフォームIDE(統合開発環境)です。\nRiderは.NET開発はもちろん、Unity/Unrealなどのゲームエンジン開発にも最高の機能を提供します。',
        info: 'Riderは.NET開発向けのクロスプラットフォームIDE(統合開発環境)です。Riderは.NETとゲームエンジン開発に必要なすべての機能を迅速かつ軽快に提供します。Riderは.NETフレームワーク、.NET Coreなどさまざまなプロジェクトをサポートし、.NETアプリケーションとUnityの開発をサポートします。 また、RiderとReSharper C++の統合により、Unreal Engineの開発も可能です。Riderのリファクタリング、デバッガ、ユニットテストランナーなど、さまざまなコーディング支援機能が開発時間を短縮します。 特に、RiderはReSharperをベースに数百のコンテキストアクションを搭載しており、非常に高速かつ軽快に反応します。',
        function: [
            {
                title: 'コード検査',
                description: 'Riderは基本的なIDE(統合開発環境)機能だけでなく、ReSharperが提供する数千種類のコード検査機能もサポートしています。Riderは数多くの機能にも非常に高速かつ軽快に動作します。',
                img: 'rider01'
            },
            {
                title: 'リファクタリング',
                description: 'Riderは数百種類のリファクタリング機能を提供します。これにより、関数名変更、コード構造変更などの作業を安全に行うことができます。',
                img: 'rider02'
            },
            {
                title: 'Unity用Rider',
                description: 'RiderはUnity開発をサポートします。Unityを開くと、エディタとしてRiderを使用するように自動設定されます。Riderを離れることなく、プレイモードに切り替えたり、画面を停止して次のフレームを確認することができます。',
                img: 'rider03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥54,470\n(税込み ¥59,917)'
                    },
                    {
                        text: '¥19,370\n(税込み ¥21,307)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥43,576\n(税込み ¥47,934)'
                    },
                    {
                        text: '¥15,496\n(税込み ¥17,046)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥32,682\n(税込み ¥35,950)'
                    },
                    {
                        text: '¥11,622\n(税込み ¥12,784)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1161'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1174'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1161'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1174'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 7,
        title: 'CLion',
        detail: 'CとC++の開発者向けIDE',
        type: [
            'C',
            'C++',
            'CMake',
            'Embedded',
            'SQL',
            'Assembly',
        ],
        summary: 'CLionはCとC++開発のためのクロスプラットフォームIDE(統合開発環境)です。\nCLionはコードを徹底的に理解し、CとC++に最適化されたコーディングサポートを提供します。',
        info: 'CLionはCとC++開発のためのIDE(統合開発環境)です。CLionはCとC++開発のための様々なコーディングサポートツールとビルドツールを提供します。CLionのリファクタリング、リアルタイムのイシュー検出などさまざまなコーディングサポートツールで開発時間を大幅に節約することができます。 また、Makefile、Cmakeなどのビルドツールはプロジェクトのビルドを自動化するのに最適です。CLionの様々な機能をWindows、macOS、Linuxで使用することができます。',
        function: [
            {
                title: '探索と検索',
                description: 'CLionでは、コード、ユーザーアクション、UI要素など、あらゆる要素を見つけることができます。CLion内部でほぼすべての情報をどこでも簡単に検索することができます。',
                img: 'CLion01'
            },
            {
                title: 'デバッガ',
                description: 'CLionでアプリケーションとユニットテストを実行し、デバッグします。コードの問題を見つけて解決する上で、最高のデバッグを提供します。',
                img: 'CLion02'
            },
            {
                title: 'CMakeサポート',
                description: 'CMakeは、CとC++プロジェクトに広く使われているクロスプラットフォームのビルドシステムです。CLionは、Cmakeのコード生成、自動アップデートなどさまざまな機能により、開発者の生産性を向上させます。',
                img: 'CLion03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥29,770\n(税込み ¥32,747)'
                    },
                    {
                        text: '¥12,870\n(税込み ¥14,157)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥23,816\n(税込み ¥26,198)'
                    },
                    {
                        text: '¥10,296\n(税込み ¥11,326)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥17,862\n(税込み ¥19,648)'
                    },
                    {
                        text: '¥7,722\n(税込み ¥8,494)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/976'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1305'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/976'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1305'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 8,
        title: 'WebStorm',
        detail: 'JavaScriptとTypeScript開発者向けのIDE',
        type: [
            'JavaScript',
            'TypeScript',
            'React',
            'Vue',
            'Angular',
        ],
        summary: 'WebStormはJavaScriptとTypeScriptのためのIDE(統合開発環境)です。\nWebStormにはJavaScript開発のためのすべての機能が含まれているので、プラグインのインストールや別途設定なしですぐにコーディングを始めることができます。',
        info: 'WebStormはJavaScriptとTypeScriptのためのIDE(統合開発環境)です。WebStormにはJavaScriptとTypeScript開発をするためのすべての機能が含まれているので、すぐにコーディングを開始することができます。WebStormはReact、Vue、Angular、NodeJS、HTMLなどJavaScript開発に関連する技術を完全にサポートします。 また、WebStormはコード補完や文法検査などさまざまなコーディング支援機能を提供します。特に、WebStormの最高の機能の一つであるリファクタリングは、プロジェクト全体に対して安全なコード修正を保証します。',
        function: [
            {
                title: 'JavaScript専用環境',
                description: 'WebStormはJavaScript、TypeScript、React、React Native、Electron、Vue、Angular、NodeJS、HTML、CSSなどさまざまな技術をサポートします。 そのため、WebStormを使えば、別途インストールせずにすぐにJavaScript開発を始めることができます。',
                img: 'webStorm01'
            },
            {
                title: 'リファクタリング',
                description: 'WebStormは最高のリファクタリング機能を提供します。WebStormのリファクタリングにより、ファイル、フォルダ名を変更することができるだけでなく、コンポーネント、メソッド、変数を抽出することができます。',
                img: 'webStorm02'
            },
            {
                title: 'デバッガ',
                description: 'WebStormは柔軟なデバッグをサポートします。Vanilla JavaScriptからTypeScript、Vueまでさまざまな種類のアプリケーションでデバッグを行うことができます。',
                img: 'webStorm03'
            },
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥20,670\n(税込み ¥22,737)'
                    },
                    {
                        text: '¥8,970\n(税込み ¥9,867)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥16,536\n(税込み ¥18,190)'
                    },
                    {
                        text: '¥7,176\n(税込み ¥7,894)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥12,402\n(税込み ¥13,642)'
                    },
                    {
                        text: '¥5,382\n(税込み ¥5,920)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1022'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1085'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1022'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1085'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 9,
        title: 'RubyMine',
        detail: 'RubyとRails開発者向けのIDE',
        type: [
            'Ruby on Rails (RoR)',
            'Hotwire',
            'RuboCop',
            'RSpec',
            'React',
            'Vue',
        ],
        summary: 'RubyMineはRubyとRailsのためのIDE(統合開発環境)です。\nRubyMineはMVCベースのView、GUIベースのデバッガなどRuby開発向けのさまざまな機能を提供します。',
        info: 'RubyMineはRubyおよびRuby on Rails専用の統合開発環境(IDE)です。RubyMineは最高のRuby開発環境を提供するために15年間機能を改善してきました。 RubyMineはRuby開発のためのRails、RBS、Rakeなどさまざまな技術をサポートします。 また、RubyMineのMVCベースのプロジェクトサポートにより、複雑なRuby on Railsプロジェクトでも迅速なコード探索が可能です。RubyMineのGUIを提供するデバッガを使って簡単にコードやライブラリをデバッグすることができます。',
        function: [
            {
                title: 'リファクタリング',
                description: 'RubyMineのすべてのリファクタリングはRuby on Railsを認識するので、コントローラの名前を変更すると、関連する名前も変更されます。これにより、RubyMineで安全なコード修正が可能です。',
                img: 'rubyMine01'
            },
            {
                title: 'MVCベースの探索',
                description: 'RubyMineはMVCベースの探索をサポートするので、RubyMineでRailsのコントローラー、アクション、ビュー、モデル、データベース間の迅速な探索が可能です。',
                img: 'rubyMine02'
            },
            {
                title: 'さまざまなRuby関連の技術サポート',
                description: 'RubyMineはRails、RBS、Rake、RubocopなどRuby開発のための多様な技術をサポートします。',
                img: 'rubyMine03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥29,770\n(税込み ¥32,747)'
                    },
                    {
                        text: '¥12,870\n(税込み ¥14,157)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥23,816\n(税込み ¥26,198)'
                    },
                    {
                        text: '¥10,296\n(税込み ¥11,326)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥17,862\n(税込み ¥19,648)'
                    },
                    {
                        text: '¥7,722\n(税込み ¥8,494)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1013'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1183'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1013'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1183'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 10,
        title: 'DataGrip',
        detail: '多数のデータベースと完璧に接続するデータベースツール',
        type: [
            'MySQL',
            'PostgreSQL',
            'Oracle',
            'SQL Server',
            'MongoDB',
            'Redis',
        ],
        summary: 'DataGripはSQL開発者向けに設計されたIDE(統合開発環境)とデータベースツールです。\nDataGripでは、数多くのデータベースを使用することができます。',
        info: 'DataGripはSQL開発者のために設計されたIDE(統合開発環境)とデータベースツールです。DataGripはデータ操作向けの高度な機能を提供します。まず、DataGripのスマートなコード補完とクエリコンソールは、データエンジニアの生産性を向上させます。 また、他のオブジェクトに移動したい時、高度な検索機能で任意のオブジェクトに簡単に移動することができます。 さらに、DataGripのダイアグラムを通じて、多数のテーブル間の関係を一目で把握することができます。DataGripのこれらの高度な機能を多数のデータベースと接続して作業を開始することができます。',
        function: [
            {
                title: 'ダイアグラム',
                description: 'DataGripでオブジェクトをダイアグラムに視覚化することができます。ダイアグラムを通じてテーブル間の関係を一目で把握します。必要であれば、ダイアグラムを画像ファイルとして保存することもできます。',
                img: 'dataGrip01'
            },
            {
                title: 'スマートテキストエディタ',
                description: 'DataGripには生産性を高めてくれるコードエディタが含まれています。 その中の一つであるDataGripのマルチカーソル機能は、SQLコードを修正するときに効果的です。',
                img: 'dataGrip02'
            },
            {
                title: 'コード分析と修正',
                description: 'DataGripは、コードでバグが発生する可能性がある部分を検出して解決方法を提案します。',
                img: 'dataGrip03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥29,770\n(税込み ¥32,747)'
                    },
                    {
                        text: '¥12,870\n(税込み ¥14,157)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥23,816\n(税込み ¥26,198)'
                    },
                    {
                        text: '¥10,296\n(税込み ¥11,326)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥17,862\n(税込み ¥19,648)'
                    },
                    {
                        text: '¥7,722\n(税込み ¥8,494)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/988'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1107'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/988'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1107'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 11,
        title: 'DataSpell',
        detail: 'データサイエンティストのためのIDE',
        type: [
            'Python',
            'Jupyter',
            'SQL cells',
            'dbt Core',
            'SQL',
            'Low-code',
            'R',
        ],
        summary: 'DataSpellはデータサイエンスのためのIDE(統合開発環境)です。\nDataSpellはJupyter Notebook、Python、R、dbt Coreなどデータサイエンスの向けのさまざまな技術を提供します。',
        info: 'DataSpellはデータサイエンス向けに設計されたIDE(統合開発環境)です。DataSpellは便利なデータサイエンス作業向けの機能を提供します。DataSpellはJupyter Notebookのインタラクティブ機能とPyCharmのコーディングサポート機能を一つの環境に組み合わせました。 また、DataSpellはPython、dbt Core、Jupyter、Condaなどのサポートでデータサイエンスに最適化された環境を提供します。',
        function: [
            {
                title: 'SQLセル',
                description: 'DataSpellはSQLセルをサポートしています。DataSpellのSQLセルを通じてデータを簡単にインポートし、簡単にPython開発を始めることができます。',
                img: 'dataSpell01'
            },
            {
                title: 'dbt Core',
                description: 'DataSpellはdbt Coreをサポートします。DataSpellで事前構成されたテンプレートを通じて簡単にdbtプロジェクトを開始することができます。',
                img: 'dataSpell02'
            },
            {
                title: 'インタラクティブテーブル',
                description: 'DataSpellでデータを扱う時、インタラクティブテーブルを使うことができます。DataSpellのインタラクティブテーブルを通じて、頻繁に発生する値のリストとパーセンテージを一目で把握することができます。',
                img: 'dataSpell03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥29,770\n(税込み ¥32,747)'
                    },
                    {
                        text: '¥12,870\n(税込み ¥14,157)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥23,816\n(税込み ¥26,198)'
                    },
                    {
                        text: '¥10,296\n(税込み ¥11,326)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥17,862\n(税込み ¥19,648)'
                    },
                    {
                        text: '¥7,722\n(税込み ¥8,494)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/993'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1116'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/993'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1116'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 12,
        title: 'ReSharper',
        detail: '.NET開発者向けのVisual Studio拡張プログラム',
        type: [
            'C#',
            '.NET',
            'ASP.NET',
            'VB.NET',
        ],
        summary: 'ReSharperは.NET開発者向けのVisual Studio拡張機能です。\nReSharperのコード検査や自動化されたリファクタリングなどのコーディングサポート機能でVisual Studioの性能を拡張します。',
        info: 'ReSharperは.NET開発者向けのVisual Studio拡張プログラムです。 ReSharperの多数の.NET開発サポート機能により、Visual Studioのパフォーマンスをより強力に拡張することができます。ReSharperはC#、VB.NET、ASP.NETなど.NET言語のための2,200以上のコードチェックを提供します。単にコード検査だけでなく、発見された問題を自動的に修正する数百種類のクイック修正機能も提供しています。また、ReSharperの60種類以上のリファクタリング機能でコードを安全に修正することができます。',
        function: [
            {
                title: 'コード検査',
                description: 'ReSharperはC#、VB.NET、ASP.NETなど.NET開発のための2,200種類以上のコードチェックをサポートします。',
                img: 'reSharper01'
            },
            {
                title: 'リファクタリング',
                description: 'ReSharperは60種類以上のリファクタリングと450種類以上のコンテキストアクションをサポートしています。これにより、コードを安全に修正することができます。',
                img: 'reSharper02'
            },
            {
                title: 'コード形式指定',
                description: 'ReSharperは、C#、VB.NET、ASP.NETなどの言語にコードをフォーマットを指定することができます。これにより、コードの一貫性が向上します。',
                img: 'reSharper03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥45,370\n(税込み ¥49,907)'
                    },
                    {
                        text: '¥18,070\n(税込み ¥19,877)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥36,296\n(税込み ¥39,926)'
                    },
                    {
                        text: '¥14,456\n(税込み ¥15,902)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥27,222\n(税込み ¥29,944)'
                    },
                    {
                        text: '¥10,842\n(税込み ¥11,926)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1031'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1193'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1031'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1193'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 13,
        title: 'ReSharper C++',
        detail: 'C++開発者向けのVisual Studio拡張プログラム',
        type: [
            'C++',
            'Unreal Engine',
        ],
        summary: 'ReSharper C++ は、C++ 開発者向けの Visual Studio の拡張機能です。\nReSharper C++のコード分析や簡単な検索機能でVisual Studioの性能を拡張します。',
        info: 'ReSharper C++ は、C++開発者向けのVisual Studio拡張プログラムです。ReSharper C++ は、C++ と Unreal Engine 開発の Visual Studio のパフォーマンスをより高いレベルに拡張します。ReSharper C++ の信頼性の高いリファクタリングを使用して、C++ のような複雑なコードベースを安全に修正することができます。 また、ReSharper C++ のコード品質チェックのサポートにより、コードを簡単かつ迅速に探索することができます。 さらに、ReSharper C++ は Unreal Engine の開発もサポートしています。ReSharper C++ と UnrealHeaderTool (ヘッダファイルのマクロを管理するツール) が統合され、Unreal Engine の開発が可能です。',
        function: [
            {
                title: 'コード分析',
                description: 'ReSharper C++は、Visual Studioのプロジェクトに対してさまざまなコード分析を行います。ReSharper C++は、コード分析だけでなく、40種類以上のクイックフィックス機能により、問題を即座に解決します。',
                img: 'reSharperC++01'
            },
            {
                title: 'リファクタリング',
                description: 'ReSharper C++のリファクタリングにより、C++のような複雑な言語でも安全にコードを変更することができます。ReSharper C++ は、Rename (名前の変更)、Extract Method (メソッドの抽出)、Change Signature (シグネチャの変更) などの完全なリファクタリングを提供します。',
                img: 'reSharperC++02'
            },
            {
                title: 'Unreal Engine開発サポート',
                description: 'ReSharper C++はUnreal Engine開発をサポートします。ReSharper C++ はリフレクションメカニズムを理解し、マクロ内のリフレクション指定子に対してコード補完を提供します。',
                img: 'reSharperC++03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: 'ReSharper 1年'
                    },
                    {
                        text: '¥45,370\n(税込み ¥49,907)'
                    },
                    {
                        text: '¥18,070\n(税込み ¥19,877)'
                    },
                ],
                [
                    {
                        text: 'ReSharper 2年'
                    },
                    {
                        text: '¥36,296\n(税込み ¥39,926)'
                    },
                    {
                        text: '¥14,456\n(税込み ¥15,902)'
                    },
                ],
                [
                    {
                        text: 'ReSharper 3年'
                    },
                    {
                        text: '¥27,222\n(税込み ¥29,944)'
                    },
                    {
                        text: '¥10,842\n(税込み ¥11,926)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 1年'
                    },
                    {
                        text: '¥45,370\n(税込み ¥49,907)'
                    },
                    {
                        text: '¥18,070\n(税込み ¥19,877)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 2年'
                    },
                    {
                        text: '¥36,296\n(税込み ¥39,926)'
                    },
                    {
                        text: '¥14,456\n(税込み ¥15,902)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 3年'
                    },
                    {
                        text: '¥27,222\n(税込み ¥29,944)'
                    },
                    {
                        text: '¥10,842\n(税込み ¥11,926)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/982'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1202'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/982'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1202'
                    },
                ]
            ]
        },
        purchaseText: ['ReSharper C++ は ReSharper と dotUltimate で購入可能です。'],
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 14,
        title: 'dotCover',
        detail: '.NETユニットテストランナーとコードカバレッジツール',
        type: [
            '.NET',
            'Unit Test',
            'Code Coverage',
        ],
        summary: 'dotCoverは.NETユニットテストランチャーおよびコードカバレッジツールです。\ndotCoverはVisual StudioおよびRiderとスムーズに統合され、スマートなユニットテストと可視化されたコードカバレッジを提供します。',
        info: 'dotCoverは.NETユニットテストツールとコードカバレッジツールです。 dotCoverを使用すると、Visual StudioとRiderでエディタを離れることなく、レベルの高いユニットテストとコードカバレッジを体験することができます。 dotCoverはMSTest、NUnit、xUnit、MSpecなどのさまざまなユニットテストフレームワークをサポートします。 また、dotCoverは、コード修正により影響を受けるユニットテストを自動的に再テストします。 dotCoverは、ユニットテストの実行に対するコードカバレッジを視覚化します。これにより、ユニットテストがどれだけ多くのコードを実行したかを簡単に把握することができます。',
        function: [
            {
                title: 'ユニットテスト',
                description: 'dotCoverはMSTest、NUnit、xUnit、MSpecなどの多様なユニットテストフレームワークをサポートします。 また、dotCoverはテストが必要なコードを自動的に検出して実行します。',
                img: 'dotCover01'
            },
            {
                title: 'Hot Spotを見る',
                description: 'dotCoverは、コードカバレッジを一目で確認できるHot Spotビューを提供します。これにより、簡単にコードカバレッジを分析することができます。',
                img: 'dotCover02'
            },
            {
                title: 'Visual StudioおよびRiderとの統合',
                description: 'Visual StudioとRiderでdotCoverをプラグインとして使用することができます。 dotCoverを使用すると、IDE(統合開発環境)で直接ユニットテストを実行し、コードカバレッジを分析することができます。',
                img: 'dotCover03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: 'dotUltimate 1年'
                    },
                    {
                        text: '¥60,970\n(税込み ¥67,067)'
                    },
                    {
                        text: '¥21,970\n(税込み ¥24,167)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 2年'
                    },
                    {
                        text: '¥48,776\n(税込み ¥53,654)'
                    },
                    {
                        text: '¥17,576\n(税込み ¥19,334)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 3年'
                    },
                    {
                        text: '¥36,582\n(税込み ¥40,240)'
                    },
                    {
                        text: '¥13,182\n(税込み ¥14,500)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1040'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1220'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1040'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1220'
                    },
                ]
            ]
        },
        purchaseText: ['dotCoverは dotUltimateで購入可能です。'],
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 15,
        title: 'dotTrace',
        detail: '.NETパフォーマンスプロファイラ',
        type: [
            '.NET',
            'Performance Profiler',
        ],
        summary: 'dotTraceは.NETパフォーマンスプロファイラです。\ndotTraceは豊富なユーザーインターフェースと大規模なスナップショットをサポートしています。これらのdotTraceの機能で.NETプログラムのボトルネック原因を簡単に見つけることができます。',
        info: 'dotTraceは.NETパフォーマンスプロファイラーです。 dotTraceを使用すると、.NETアプリケーションの実行が遅くなる原因を簡単に見つけることができます。 dotTraceの豊富なスナップショットにより、プログラムのパフォーマンスを簡単に比較することができます。 また、dotTraceのタイムライン分析は、プログラムの実行中に発生する現象を時間に応じて視覚化します。 dotTraceのさまざまな分析機能で、エディタを離れることなく、アプリケーションのパフォーマンスを最適化することができます。',
        function: [
            {
                title: '.NETおよびUnityアプリケーションのプロファイリング',
                description: 'dotTraceを使用すると、デスクトップアプリケーション、.NET Core、IIS、Unityアプリケーションなど様々な.NETアプリケーションのボトルネックの原因を見つけることができます。',
                img: 'dotTrace01'
            },
            {
                title: 'タイムラインプロファイリング',
                description: 'dotTraceのタイムラインプロファイリングは、メソッドの呼び出し順序と持続時間を時間順に表示します。これにより、さまざまなパフォーマンスの問題を把握することができます。',
                img: 'dotTrace02'
            },
            {
                title: 'Visual StudioおよびRiderとの統合',
                description: 'Visual StudioとRiderでdotTraceをプラグインとして使用することができます。 dotTraceを使用すると、IDE(統合開発環境)ですぐにさまざまな性能プロファイリングを開始することができます。',
                img: 'dotTrace03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: 'dotUltimate 1年'
                    },
                    {
                        text: '¥60,970\n(税込み ¥67,067)'
                    },
                    {
                        text: '¥21,970\n(税込み ¥24,167)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 2年'
                    },
                    {
                        text: '¥48,776\n(税込み ¥53,654)'
                    },
                    {
                        text: '¥17,576\n(税込み ¥19,334)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 3年'
                    },
                    {
                        text: '¥36,582\n(税込み ¥40,240)'
                    },
                    {
                        text: '¥13,182\n(税込み ¥14,500)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1058'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1238'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1058'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1238'
                    },
                ]
            ]
        },
        purchaseText: ['dotTraceは dotUltimateで購入可能です。'],
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 16,
        title: 'dotMemory',
        detail: '.NETメモリプロファイラ',
        type: [
            '.NET',
            'Memory Profiler',
        ],
        summary: 'dotMemoryは.NETメモリプロファイラです。\ndotMemoryは.NETアプリケーションのメモリ使用を最適化し、さまざまなメモリ問題を分析します。',
        info: 'dotMemoryはメモリプロファイラです。 dotMemoryを使用すると、エディタ内でさまざまなメモリ分析機能を使用することができます。 dotMemoryを使用すると、デスクトップアプリケーション、Windowsサービス、ASP.NET Webアプリケーションなど、さまざまな.NETアプリケーションでメモリ使用を最適化します。 また、dotMemoryのさまざまな検査機能を非常に簡単に使用することができます。 特に、dotMemoryのタイムラインビューは、アプリケーションで使用するメモリをリアルタイムで確認することができます。',
        function: [
            {
                title: 'あらゆるタイプのメモリ問題の処理',
                description: 'dotMemoryを使用すると、デスクトップアプリケーション、Windowsサービス、ASP.NET Webアプリケーション、IISなどさまざまな.NETアプリケーションのメモリ使用状況を分析することができます。',
                img: 'dotMemory01'
            },
            {
                title: '自動スナップショット',
                description: 'dotMemoryの自動スナップショットにより、特定の状況にスナップショットを撮ることができます。自動スナップショットは、アプリケーションのメモリ使用量が大幅に増加したり、手動でスナップショットを撮影するのが難しい場合に便利です。',
                img: 'dotMemory02'
            },
            {
                title: 'ダイアグラム',
                description: 'dotMemoryのダイアグラムでアプリケーション要素のメモリ占有率を一目で把握することができます。 dotMemoryのダイアグラムは、アプリケーションのメモリ最適化を支援します。',
                img: 'dotMemory03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: 'dotUltimate 1年'
                    },
                    {
                        text: '¥60,970\n(税込み ¥67,067)'
                    },
                    {
                        text: '¥21,970\n(税込み ¥24,167)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 2年'
                    },
                    {
                        text: '¥48,776\n(税込み ¥53,654)'
                    },
                    {
                        text: '¥17,576\n(税込み ¥19,334)'
                    },
                ],
                [
                    {
                        text: 'dotUltimate 3年'
                    },
                    {
                        text: '¥36,582\n(税込み ¥40,240)'
                    },
                    {
                        text: '¥13,182\n(税込み ¥14,500)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1049'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1229'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1049'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1229'
                    },
                ]
            ]
        },
        purchaseText: ['dotMemoryはdotUltimateで購入可能です。'],
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 17,
        title: 'dotUltimate',
        detail: 'Rider、ReSharper C++、すべての.NETツールをまとめたパッケージ',
        type: [
            '.NET',
            'Visual Studio',
        ],
        summary: 'dotUltimateは、Rider、ReSharper C++、すべての.NETツールをまとめたパッケージ製品です。\ndotUltimateを使用すると、.NETとVisual Studio開発に必要なすべてのツールをリーズナブルに使用することができます。',
        info: 'dotUltimateは、Rider、ReSharper C++、すべての.NETツールをまとめたパッケージ製品です。 dotUltimateを使用すると、一つのパッケージライセンスでさまざまな製品を経済的に使用し、効率的に管理することができます。 dotUltimateを使用すると、Rider、ReSharper、ReSharper C++、dotCover、dotMemory、dotTraceを使用することができます。 dotUltimateが提供するさまざまな製品でVisual StudioとRiderを簡単に切り替えることができ、豊富な環境で開発が可能です。',
        function: [
            {
                title: '完全な.NET開発パッケージ',
                description: 'dotUltimateは、Rider、ReSharper C++、すべての.NETツールをまとめたパッケージ製品です。 dotUltimateを使用すると、.NET Framework、.NET Core、Unityなど、すべての.NET開発分野でサポートを受けることができます。',
                img: 'dotUltimate01'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: '商業用'
                    },
                    {
                        text: '個人用'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥60,970\n(税込み ¥67,067)'
                    },
                    {
                        text: '¥21,970\n(税込み ¥24,167)'
                    },
                ],
                [
                    {
                        text: '2年'
                    },
                    {
                        text: '¥48,776\n(税込み ¥53,654)'
                    },
                    {
                        text: '¥17,576\n(税込み ¥19,334)'
                    },
                ],
                [
                    {
                        text: '3年'
                    },
                    {
                        text: '¥36,582\n(税込み ¥40,240)'
                    },
                    {
                        text: '¥13,182\n(税込み ¥14,500)'
                    },
                ],
                [
                    {
                        text: 'すべての機能'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'フォールバックライセンス'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'ライセンス共有'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術お問い合わせ'
                    },
                    {
                        include: true
                    },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: 'ライセンス所有'
                    },
                    {
                        text: '法人'
                    },
                    {
                        text: '個人'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1067'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1253'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1067'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1253'
                    },
                ]
            ]
        },
        subscribe: commonSubscribe,
        FAQ: commonFAQ,
        productLink: ''
    },
    {
        idx: 18,
        title: 'Code With Me',
        detail: 'リアルタイム遠隔コラボレーション向けソリューション',
        type: [
            'Pair Programming',
            'Collaboration',
        ],
        summary: 'Code With Meは、リアルタイム遠隔コラボレーション向けのソリューションです。\nCode With Meを使えば、場所に関係なく、チームメンバーとリアルタイムのコードレビューやペアプログラミングを体験することができます。',
        info: 'Code With Meは、リアルタイムのリモートコラボレーション向けのソリューションです。Code With Meのホストがリモートセッションを作成し、ここに他のユーザーが参加することになります。Code With Meのリモートセッションを通じて、他の開発者とリアルタイムのペアプログラミングが可能です。 また、Code With Meの音声およびビデオ通話機能を使用して、チームメンバー間でより効果的なコードレビューを行うことができます。このように、Code With Meはリモート環境に完璧なコラボレーションソリューションを提供します。',
        function: [
            {
                title: 'リモートペアプログラミング',
                description: 'Code With Meセッションに参加すると、他の開発者と一緒にコーディングをすることができます。リアルタイムで一緒にコードを作成して、修正するリモートペアプログラミングを体験することができます。',
                img: 'codeWithMe01'
            },
            {
                title: 'リアルタイムリモートコードレビュー',
                description: 'Code With Meセッションでは、チームメンバーと一緒にコードレビューを行うことができます。リアルタイムで一緒にコードを見ながら、ビデオ通話で問題について議論することもできます。',
                img: 'codeWithMe02'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: '',
                        // row: 2
                    },
                    {
                        text: '商業用',
                        // col: 2
                    },
                    {
                        text: '個人用'
                    }
                ],
                [
                    {
                        text: '',
                    },
                    {
                        text: 'Premium',
                    },
                    // {
                    //     text: 'Enterprise'
                    // },
                    {
                        text: 'Premium'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥14,300 / host\n(税込み ¥15,730)'
                    },
                    {
                        text: '¥7,150 / host\n(税込み ¥7,865)'
                    },
                ],
                [
                    {
                        text: 'セッション制限期間'
                    },
                    {
                        text: '無制限'
                    },
                    // {
                    //     text: '無制限'
                    // },
                    {
                        text: '無制限'
                    },
                ],
                [
                    {
                        text: 'セッションあたりのゲスト数'
                    },
                    {
                        text: '最大50名様まで'
                    },
                    // {
                    //     text: '最大100名様まで'
                    // },
                    {
                        text: '最大50名様まで'
                    },
                ],
                [
                    {
                        text: 'Floating ライセンス'
                    },
                    {
                        include: false
                    },
                    // {
                    //     include: true
                    // },
                    {
                        include: false
                    },
                ],
                [
                    {
                        text: '技術的なお問い合わせ'
                    },
                    {
                        include: true
                    },
                    // {
                    //     include: true
                    // },
                    {
                        include: false
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1314'
                    },
                    // {
                    //     text: 'お見積もり',
                    //     link: '/estimate'
                    // },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1081'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1314'
                    },
                    // {
                    //     text: 'ご購入',
                    //     link: '/buy'
                    // },
                    {
                        text: 'ご購入',
                        link: '/buy/1081'
                    },
                ]
            ]
        },
        purchaseText: ['Code With Me Enterpriseは10 hostから購入可能です。'],
        FAQ: [
            {
                title: 'Code With Me Premiumライセンスはどのように使用するのですか？',
                description: 'Code With Me Premiumライセンスは、ホスト(ゲストとコーディング環境を共有するユーザー)に割り当てます。ホストは一度に1つのセッションしか開始できません。 したがって、複数のホストが同時にセッションをホストする必要がある場合、ホストはそれぞれのCode With Me Premiumライセンスを保有する必要があります。セッションに参加するゲストは、Code With Me Premiumライセンスは必要ありません。'
            },
            {
                title: 'Code With Me Enterpriseライセンスはどのような方法で使用するのですか？',
                description: 'Code With Me Enterpriseライセンスは、ホスト（ゲストとコーディング環境を共有するユーザー）に割り当てます。ホストは一度に1つのセッションのみをホストすることができます。Code With Me Enterpriseライセンスは、複数のユーザーが一緒に使用するFloatingライセンスです。したがって、もしホストがすべてのCode With Me Enterpriseライセンスを使用している場合、他のユーザーは待機する必要があります。 そして、Code With Meセッションが終了すると、他のユーザーがこのCode With Me Enterpriseライセンスを使用することができます。セッションに参加するゲストは、Code With Me Enterpriseライセンスは必要ありません。'
            },
            {
                title: 'どんなIDEでCode With Meを使用できますか？',
                description: 'Code With Meは、2020.2.1以降のバージョンのIDEで使用できます。Code With Meプラグインは、2021.1バージョン以降のIDEでは基本的に有効化されるため、Code With Meプラグインを手動でインストールする必要はありません。しかし、2021.1バージョン未満のIDEはCode With Meプラグインを手動でインストールする必要があります。Code With Meは、IntelliJ IDEA、WebStorm、PyCharm、PhpStorm、GoLand、RubyMine、CLion、Android Studioで使用できます。'
            },
            {
                title: 'ゲストもIDEが必要ですか？',
                description: 'セッションに参加するゲストはIDE(統合開発環境)は必要なく、招待リンクがあれば大丈夫です。ゲストは招待リンクに移動してクライアントプログラムをダウンロードし、このクライアントプログラムを通じてCode With Meセッションに参加することができます。Code With MeがサポートされているJetBrains IDEを使用している場合は、IDEから直接セッションに参加できます。'
            }
        ],
        productLink: ''
    },
    {
        idx: 19,
        title: 'Datalore',
        detail: 'スマートコーディングでデータを分析し、スマートにコラボレートするデータサイエンスプラットフォーム',
        type: [
            'Jupyter',
            'Python',
            'Kotlin',
            'SQL cells',
            'Collaboration',
        ],
        summary: 'Dataloreはデータサイエンスのコラボレーションプラットフォームです。\nDataloreはJupyter、Pandasのようなデータサイエンスツールはもちろん、さまざまなコラボレーション機能を通じてデータサイエンスチームに最適化されたサービスを提供します。',
        info: 'Dataloreはデータサイエンスのコラボレーションプラットフォームです。Dataloreはデータチームにコラボレーションの生産性を最大化できる環境を提供します。まず、Dataloreはさまざまなデータベース、クラウドストレージと連動します。Dataloreの作業は基本的にJupyter Notebook互換のエディタを中心に行われ、文法強調、コード自動補完などのクエリサポートを提供します。クエリだけでなく、コード自動補完、リファクタリング、AI質問などのコーディングサポートも提供します。Dataloreを通じ、チームメンバー間で簡単にレポートを共有し、意見交換が可能です。 また、Dataloreの管理者は、一箇所でデータ、ノートパソコン、報告書を管理することができます。',
        function: [
            {
                title: 'JupyterとPython ノートパソコン',
                description: 'DataloreはJupyterノートパソコンとPythonノートパソコンをサポートします。DataloreのJupyterノートパソコンでIPYNBファイル作業が可能で、Pythonノートパソコンではコード自動補完、リファクタリングなど多様なコーディングサポート機能を提供します。',
                img: 'datalore01'
            },
            {
                title: '可視化資料',
                description: 'また、Dataloreでは簡単に視覚化資料を作成することができます。 さらに、DataloreはMatplotlib、plotly、altair、seabornなどさまざまな視覚化ライブラリをサポートしています。Dataloreの視覚化された資料を通じて、データを簡単に理解することができます。',
                img: 'datalore02'
            },
            {
                title: 'チームワークスペース',
                description: 'Dataloreはチームのためのワークスペースを提供します。チームメンバーはこのワークスペースでノートパソコン、データ、報告書などの資料を共有します。Dataloreが提供するワークスペースを通じて、簡単かつ活発にコラボレーションすることができます。',
                img: 'datalore03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: 'Datalore Team'
                    },
                    {
                        text: 'Datalore Enterprise'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥45,500 / user\n(税込み ¥50,050)'
                    },
                    // {
                    //     text: '$1,500 / user\n(税込み $1,650)'
                    // },
                    {
                        text: 'カスタム価格',
                        col: 2
                    },
                ],
                [
                    {
                        text: 'ホスティング'
                    },
                    {
                        text: 'Cloud'
                    },
                    {
                        text: 'Private Cloud\nOn-Premises'
                    },
                ],
                [
                    {
                        text: '統合ストレージ容量'
                    },
                    {
                        text: '20 GB'
                    },
                    {
                        text: '無制限'
                    },
                ],
                [
                    {
                        text: 'CPUとGPU時間'
                    },
                    {
                        text: 'CPU S 750時間/月'
                    },
                    {
                        text: '無制限'
                    },
                ],
                [
                    {
                        text: 'SSO構成'
                    },
                    {
                        include: false
                    },
                    {
                        include: true
                    },
                ]
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1316'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1321'
                    }
                ],
                // [
                //     {
                //         text: '',
                //         link: ''
                //     },
                //     {
                //         text: 'ご購入',
                //         link: '/buy/1316'
                //     },
                //     {
                //         text: 'ご購入',
                //         link: '/buy/1321'
                //     },
                // ]
            ]
        },
        purchaseText: ['Datalore TeamおよびDatalore Enterpriseは年間サブスクリプションライセンスです。'],
        FAQ: [
            {
                title: 'Datalore Teamトライアルの機能に違いはありますか？',
                description: 'Datalore Teamプランを購入する前に14日間、Datalore Teamトライアルを使用することができます。Datalore Teamトライアルは、Datalore Teamプランに比べて機能が制限されます。Datalore Teamトライアルは最大3ユーザーまで利用可能で、ユーザーあたり10GBのストレージを提供します。また、ユーザーあたり336時間のコンピューティング時間が提供されます。また、Datalore Teamトライアルには5つのDataloreクレジットが提供され、別途Dataloreクレジットを購入することはできません。'
            },
            {
                title: 'CPU時間とGPU時間とは何ですか？',
                description: 'Dataloreはデータサイエンス作業のためにノートパソコンを作成し、各ノートパソコンごとにAWS EC2システムを通じて作業を処理します。DataloreのCPUおよびGPU時間とは、AWS EC2システムリソースを使用できる時間です。CPUおよびGPU時間は各ユーザーに月単位で提供され、Datalore Teamは750時間、Datalore Enterpriseは無制限に提供されます。'
            },
            {
                title: 'Dataloreを社内サーバーにインストールできますか？',
                description: 'はい、Datalore Enterpriseを利用すれば、KubernetesまたはDocker技術を介して社内サーバーにDataloreをインストールすることができます。'
            }
        ],
        productLink: ''
    },
    {
        idx: 20,
        title: 'YouTrack',
        detail: 'あらゆるチームのためのフレキシブルなプロジェクトおよび問題管理ツール',
        type: [
            'Project',
            'Issue',
            'Task Management',
        ],
        summary: 'YouTrackは業務をプロジェクトとイシューという単位で管理してくれるツールです。\nYouTrackが提供するさまざまなプロジェクトとイシュー管理機能により、チームの業務を完全に把握することができます。',
        info:  'YouTrackは仕事をプロジェクトとイシューという単位で管理してくれるツールです。YouTrackを使用すると、チームで好きなプロジェクトを作成することができます。 そして、このプロジェクトに関連する業務をイシューとして作成し、管理することができます。YouTrackはイシュー管理のために重要度タグ、アップデート通知などの機能を提供します。特に、YouTrackのアジャイルボードを通じて複数のプロジェクトの全体的な進行状況を一目で確認し、管理することができます。 また、イシューだけでなく、ナレッジベースを通じて会議内容やお知らせなどの内部情報を作成し、公開することができます。YouTrackが提供するさまざまなプロジェクトとイシュー管理機能により、チームの業務を完璧に管理することができます。',
        function: [
            {
                title: 'プロジェクト管理',
                description: 'YouTrackでチーム別または業務別のプロジェクトを作成します。作成したプロジェクトにユーザーを追加し、それぞれのユーザーに適切な権限を付与することができます。',
                img: 'youTrack01'
            },
            {
                title: '知識ベース',
                description: 'YouTrackは会議メモ、お知らせなどの内部情報を作成し、これを公開することができます。YouTrackのナレッジベースを通じてチームメンバーが知っておくべき情報を簡単に作成し、これを共有します。',
                img: 'youTrack02'
            },
            {
                title: '報告書',
                description: 'YouTrackはイシュー分析を簡単にできるさまざまなレポートを提供します。その中の一つであるタイムラインレポートは、指定された期間中の課題の進行状況を一目で見ることができます。',
                img: 'youTrack03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: 'Cloud',
                        col: 2
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '11 user, 4 agent以上購入可能',
                        col: 2
                    }
                ],
                [
                    {
                        text: '1年'
                    },
                    {
                        text: 'エージェント追加'
                    },
                ],
                [
                    {
                        text: '¥5,720 / user\n(税込み ¥6,290)'
                    },
                    {
                        text: '¥7,020 / agent\n(税込み ¥7,720)'
                    },
                ],
            ],
            // bottom: [
            //     [
            //         {
            //             text: 'お見積もり',
            //             link: '/estimate/871'
            //         },
            //         {
            //             text: 'お見積もり',
            //             link: '/estimate/872'
            //         }
            //     ],
            //     [
            //         {
            //             text: 'ご購入',
            //             link: '/buy/871'
            //         },
            //         {
            //             text: 'ご購入',
            //             link: '/buy/872'
            //         }
            //     ]
            // ]
        },
        purchase2: {
            title: [
                [
                    {
                        text: 'Server',
                        col: 4
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '15ユーザー'
                    },
                    {
                        text: '¥78,000\n(VAT込み価格 ¥85,800)'
                    },
                ],
                [
                    {
                        text: '25ユーザー'
                    },
                    {
                        text: '¥143,000\n(VAT込み価格 ¥157,300)'
                    },
                ],
                [
                    {
                        text: '50ユーザー'
                    },
                    {
                        text: '¥260,000\n(VAT込み価格 ¥286,000)'
                    },
                ],
                [
                    {
                        text: '100ユーザー '
                    },
                    {
                        text: '¥520,000\n(VAT込み価格 ¥572,000)'
                    },
                ],
                [
                    {
                        text: '250ユーザー'
                    },
                    {
                        text: '¥1,170,000\n(VAT込み価格 ¥1,287,000)'
                    },
                ],
                [
                    {
                        text: '500ユーザー'
                    },
                    {
                        text: '¥1,560,000\n(VAT込み価格 ¥1,716,000)'
                    },
                ],
                [
                    {
                        text: '750ユーザー'
                    },
                    {
                        text: '¥1,820,000\n(VAT込み価格 ¥2,002,000)'
                    },
                ],
                [
                    {
                        text: '1000ユーザー'
                    },
                    {
                        text: '¥2,080,000\n(VAT込み価格 ¥2,288,000)'
                    },
                ],
                [
                    {
                        text: '2000ユーザー'
                    },
                    {
                        text: '¥2,600,000\n(VAT込み価格 ¥2,860,000)'
                    },
                ],
            ],
            // bottom: [
            //     [
            //         {
            //             text: '',
            //             link: ''
            //         },
            //         {
            //             text: 'お見積もり',
            //             link: '/estimate/1323'
            //         },
            //     ],
            //     [
            //         {
            //             text: '',
            //             link: ''
            //         },
            //         {
            //             text: 'ご購入',
            //             link: '/buy/1323'
            //         },
            //     ]
            // ]
        },
        purchase3: {
            title: [
                [
                    {
                        text: 'YouTrack Server 有効期限内の更新',
                        col: 4
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '15ユーザー'
                    },
                    {
                        text: '¥39,000\n(VAT込み価格 ¥42,900)'
                    },
                ],
                [
                    {
                        text: '25ユーザー'
                    },
                    {
                        text: '¥71,500\n(VAT込み価格 ¥78,650)'
                    },
                ],
                [
                    {
                        text: '50ユーザー'
                    },
                    {
                        text: '¥130,000\n(VAT込み価格 ¥143,000)'
                    },
                ],
                [
                    {
                        text: '100ユーザー '
                    },
                    {
                        text: '¥260,000\n(VAT込み価格 ¥286,000)'
                    },
                ],
                [
                    {
                        text: '250ユーザー'
                    },
                    {
                        text: '¥585,000\n(VAT込み価格 ¥643,500)'
                    },
                ],
                [
                    {
                        text: '500ユーザー'
                    },
                    {
                        text: '¥780,000\n(VAT込み価格 ¥858,000)'
                    },
                ],
                [
                    {
                        text: '750ユーザー'
                    },
                    {
                        text: '¥910,000\n(VAT込み価格 ¥1,001,000)'
                    },
                ],
                [
                    {
                        text: '1000ユーザー'
                    },
                    {
                        text: '¥1,040,000\n(VAT込み価格 ¥1,144,000)'
                    },
                ],
                [
                    {
                        text: '2000ユーザー'
                    },
                    {
                        text: '¥1,300,000\n(VAT込み価格 ¥1,430,000)'
                    },
                ],
            ],
            // bottom: [
            //     [
            //         {
            //             text: '',
            //             link: ''
            //         },
            //         {
            //             text: 'お見積もり',
            //             link: '/estimate/1333'
            //         },
            //     ],
            //     [
            //         {
            //             text: '',
            //             link: ''
            //         },
            //         {
            //             text: 'ご購入',
            //             link: '/buy/1333'
            //         },
            //     ]
            // ]
        },
        purchase4: {
            title: [
                [
                    {
                        text: 'YouTrack Server 有効期限後の更新',
                        col: 4
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '15ユーザー'
                    },
                    {
                        text: '¥58,500\n(VAT込み価格 ¥64,350)'
                    },
                ],
                [
                    {
                        text: '25ユーザー'
                    },
                    {
                        text: '¥107,250\n(VAT込み価格 ¥117,975)'
                    },
                ],
                [
                    {
                        text: '50ユーザー'
                    },
                    {
                        text: '¥195,000\n(VAT込み価格 ¥214,500)'
                    },
                ],
                [
                    {
                        text: '100ユーザー '
                    },
                    {
                        text: '¥390,000\n(VAT込み価格 ¥429,000)'
                    },
                ],
                [
                    {
                        text: '250ユーザー'
                    },
                    {
                        text: '¥877,500\n(VAT込み価格 ¥965,250)'
                    },
                ],
                [
                    {
                        text: '500ユーザー'
                    },
                    {
                        text: '¥1,170,000\n(VAT込み価格 ¥1,287,000)'
                    },
                ],
                [
                    {
                        text: '750ユーザー'
                    },
                    {
                        text: '¥1,365,000\n(VAT込み価格 ¥1,501,500)'
                    },
                ],
                [
                    {
                        text: '1000ユーザー'
                    },
                    {
                        text: '¥1,560,000\n(VAT込み価格 ¥1,716,000)'
                    },
                ],
                [
                    {
                        text: '2000ユーザー'
                    },
                    {
                        text: '¥1,950,000\n(VAT込み価格 ¥2,145,000)'
                    },
                ],
            ],
            // bottom: [
            //     [
            //         {
            //             text: '',
            //             link: ''
            //         },
            //         {
            //             text: 'お見積もり',
            //             link: '/estimate/1351'
            //         },
            //     ],
            //     [
            //         {
            //             text: '',
            //             link: ''
            //         },
            //         {
            //             text: 'ご購入',
            //             link: '/buy/1351'
            //         },
            //     ]
            // ]
        },
        purchaseText: [
            'YouTrack Cloudは年間サブスクリプションライセンス、YouTrack Serverは永久ライセンスです。',
            'YouTrack Cloudは、User数が増えるほどUserあたりの価格が下がります。',
            'YouTrack Serverのライセンスをアップグレードする場合は、別途お問い合わせください。'
        ],
        FAQ: [
            {
                title: 'YouTrack Cloudでディスク容量を追加するにはどうすればよいですか？',
                description: 'YouTrack Cloudのディスク容量を追加するには、YouTrack Cloudにユーザーを追加してサブスクリプションをアップグレードする必要があります。YouTrack Cloudにユーザーが1人追加されるごとに3GBのディスク容量が追加されます。'
            },
            {
                title: 'YouTrack Cloudでは、追加ユーザーの料金はどのように計算されますか？',
                description: 'YouTrack Cloudは、1年間の使用期間中、毎月最大ユーザー数を確認します。YouTrack Cloudのサブスクリプションが終了する時点で、毎月の超過ユーザー数をすべて合計します。 そして、YouTrack Cloudの月額価格に基づいて追加料金を請求します。'
            },
            {
                title: 'YouTrack Serverライセンスをアップグレードする場合、価格はどのように計算されますか？',
                description: 'YouTrack Serverのライセンスをアップグレードする場合、新しいライセンス価格から既存のライセンス価格を差し引きます。例えば、YouTrack Server 15-User PackからYouTrack Server 100-User Packにアップグレードする場合、YouTrack Server 100-User Packのライセンス価格からYouTrack Server 15-User Packのライセンス価格を差し引いた価格になります。YouTrack Serverライセンスのアップグレードの際は、別途お問い合わせください。'
            },
            {
                title: '1つのYouTrack Serverライセンスで複数のサーバーを設置できますか？',
                description: 'YouTrackライセンス契約により、1つのYouTrack Serverライセンスで1つのサーバーのみ実行することができます。'
            },
            {
                title: 'Helpdeskエージェントの購入',
                description: 'YouTrack Serverは3人のHelpdeskエージェントを無料で提供します。YouTrack Serverで4人以上のHelpdeskエージェントが必要な場合は、Helpdeskエージェントを購入する必要があります。Helpdeskエージェントを購入する際に注意すべき点は、YouTrack Serverサブスクリプションのユーザー数にHelpdeskエージェントの数も含める必要があるということです。例えば、25人のユーザーのうち20人が一般ユーザーで5人がHelpdeskエージェントである場合、YouTrack Server 25-user packサブスクリプションと5人のHelpdeskエージェントを購入する必要があります。'
            }
        ],
        productLink: ''
    },
    {
        idx: 21,
        title: 'Space',
        detail: '開発プロセスを向上させる全機能を備えたオールインワンコラボレーションプラットフォーム',
        type: [
            'Git Hosting',
            'Development',
            'CI/CD',
        ],
        summary: 'Spaceはソフトウェア開発向けのオールインワンコラボレーションプラットフォームです。\nSpaceはGitストレージのホスティングから、開発環境、コード品質検査、CI/CD、プロジェクト管理に至るまで、すべての開発段階に最高のツールを提供するコラボレーションプラットフォームです。',
        info:  'Spaceはソフトウェア開発向けのオールインワンコラボレーションプラットフォームです。まず、SpaceはGitリポジトリホスティングを提供します。そのため、ユーザーは好きなコードリポジトリをSpaceに追加することができます。その後、JetBrains IDEと連動してコーディング作業を行います。 特に、Spaceが提供するリモート開発環境を使用すると、ユーザーは別のIDEをインストールすることなく、好きなIDEで作業することができます。Spaceはコード品質を高めるための機能も提供しており、Merge Requestを作成すると、Spaceで複数の担当者が簡単にコードレビューを行うことができます。CI/CD段階では、Space Automationを通じてシンプルかつ強力なCI/CDを実行します。 また、Spaceはプロジェクト進行中に発生するイシューを完全に管理できる機能も提供します。このように、SpaceはGitリポジトリホスティングから、開発環境、コード品質検査、CI/CD、プロジェクト管理に至るまで、すべての開発段階に最高の機能を提供するコラボレーションプラットフォームです。',
        function: [
            {
                title: 'Gitリポジトリホスティング',
                description: 'SpaceはGitリポジトリをホストします。Spaceで新しいリポジトリを作成したり、他のGitサービスを使ってリポジトリを作成することができます。',
                img: 'space01'
            },
            {
                title: 'Space Automation',
                description: 'Space AutomationはSpaceが提供するCI/CDツールです。Space Automationを使ってプロジェクトをビルド、テスト、デプロイします。Space Automationはスクリプトで構成し、Kotlin言語で作成することができます。',
                img: 'space02'
            },
            {
                title: '開発環境',
                description: 'SpaceはDev Environmentというリモート開発環境を提供します。Spaceクラウドで実行される仮想マシンがコード処理、コンパイル、ビルドなどのすべての作業を代行します。ユーザーはSpaceクラウドの仮想マシンに接続してIDE(統合開発環境)を使用することができます。',
                img: 'space03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: '',
                        row: 2
                    },
                    {
                        text: 'Cloud',
                        col: 3
                    }
                ],
                [
                    {
                        text: 'Team'
                    },
                    {
                        text: 'Organization'
                    },
                    {
                        text: 'Enterprise'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '価格'
                    },
                    {
                        text: '$96 / active user\n(税込み $105.60)'
                    },
                    {
                        text: '$240 / active user\n(税込み $264)'
                    },
                    {
                        text: '$1,188 / active user\n(税込み $1,306.80)'
                    },
                ],
                [
                    {
                        text: '購入可能数量'
                    },
                    {
                        text: '制限なし'
                    },
                    {
                        text: '5 active user以上購入可能'
                    },
                    {
                        text: '10 active user以上購入可能'
                    },
                ],
                [
                    {
                        text: 'General Credit'
                    },
                    {
                        text: '$1.00',
                        col: 3
                    },
                ],
                [
                    {
                        text: 'Computation Credit*'
                    },
                    {
                        text: '4,000'
                    },
                    {
                        text: '10,000'
                    },
                    {
                        text: '50,000'
                    },
                ],
                [
                    {
                        text: 'Storage容量*'
                    },
                    {
                        text: '10GB'
                    },
                    {
                        text: '25GB'
                    },
                    {
                        text: '100GB'
                    },
                ],
                [
                    {
                        text: 'データ転送量*'
                    },
                    {
                        text: '50GB'
                    },
                    {
                        text: '125GB'
                    },
                    {
                        text: '500GB'
                    },
                ],
                [
                    {
                        text: 'dev環境制限* 開発環境制限'
                    },
                    {
                        text: '2'
                    },
                    {
                        text: '無制限'
                    },
                    {
                        text: '無制限'
                    },
                ],
                [
                    {
                        text: 'All Products Pack提供'
                    },
                    {
                        include: false
                    },
                    {
                        include: false
                    },
                    {
                        include: true
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy'
                    },
                ]
            ]
        },
        purchase2: {
            title: [
                [
                    {
                        text: '',
                        row: 2
                    },
                    {
                        text: 'On-Premises',
                        col: 2
                    }
                ],
                [
                    {
                        text: 'Organization'
                    },
                    {
                        text: 'Enterprise'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '価格'
                    },
                    {
                        text: '$300 / active user\n(税込み $330)'
                    },
                    {
                        text: '$1,500 / active user\n(税込み $1,650)'
                    }
                ],
                [
                    {
                        text: '購入可能数量'
                    },
                    {
                        text: '5 active user以上購入可能'
                    },
                    {
                        text: '50 active user以上購入可能'
                    }
                ],
                [
                    {
                        text: 'automation worker 価格'
                    },
                    {
                        text: '$420\n(税込み $462)',
                        col: 2
                    }
                ],
                [
                    {
                        text: 'automation worker 数量'
                    },
                    {
                        text: '10'
                    },
                    {
                        text: '50'
                    }
                ],
                [
                    {
                        text: 'All Products Pack 提供'
                    },
                    {
                        include: false
                    },
                    {
                        include: true
                    }
                ]
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy'
                    },
                ]
            ]
        },
        purchaseText: [
            'Space CloudとOn-Premisesは永久ライセンスです。',
            'Computation Credit* は毎月提供されるクレジットです。',
            'Storage容量* は、ユーザーごとに提供されるストレージスペースです。',
            'データ転送* は毎月提供され、ユーザーごとに制限されるデータ転送量です。',
            'dev environment limit* は、ユーザーごとに使用可能な開発環境の数です。'
        ],
        FAQ: [
            {
                title: 'Space Cloudのリソース(コンピューティングクレジット、ストレージなど)が不足している場合、リソースを追加するにはどうすればよいですか？',
                description: 'Space Cloudアカウントで超過使用オプションを有効にさせることで、制限を超えてリソースを使用することができます。 そして、翌月に超過使用したリソースに対して料金を支払うことになります。'
            },
            {
                title: 'Space Cloudで非アクティブユーザーの基準は何ですか？',
                description: 'Space Cloudは有効なユーザーに対してのみ料金を請求します。有効なユーザーとは、Space Cloudでコンテンツの作成や編集、GitリポジトリへのPush、プロファイルの編集などを行っているユーザーを意味します。もしユーザーが14日間作業を行わない場合、非アクティブユーザーとみなされます。'
            },
            {
                title: 'Computation Creditとは何ですか？',
                description: 'Space Cloudは、サブスクリプションオプションごとに一定量のComputation Creditを提供しています。Computation Creditを使用すると、Space CloudでCI/CD作業を行うことができます。Space Cloudで1 Computation Creditは、基本リソースのランナー(ビルドを実行するプログラム)で実行される作業1分に相当します。Space Cloudランナーの基本リソースは2 vCPUsと7800MBメモリであり、この基本リソースで多く使用したリソースを基準にクレジットを請求します。例えば、Space Cloudランナーが0.5 vCPUsと3900MBのメモリを使用している場合、Space Cloudは、より多く使用したリソースであるメモリを基準に1分あたり0.5クレジットを請求します。'
            },
            {
                title: 'General Creditとは何ですか？',
                description: 'General CreditはSpace Cloudで使用可能な支払い方法です。General Creditを使用すると、Space Cloudにユーザーを追加することができます。 また、General CreditでComputation Credit、ストレージ、データ転送の超過使用料金を処理することができます。General CreditはJetBrainsで購入できますが、再販、取引、譲渡、交換、払い戻しはできません。 General Creditは実際のお金（""法定通貨"")ではなく、Spaceの使用を停止すると消滅します。'
            },
            {
                title: 'Automation workerとは何ですか？',
                description: 'Automation workerは、Space On-PremisesでCI/CDタスクを実行するデバイスです。Automation workerは、JetBrainsアカウントからSpace On-Premisesサブスクリプションに追加購入することができます。'
            },
            {
                title: 'Space EnterpriseサブスクリプションオプションにAll Products Packライセンスは含まれていますか？',
                description: 'Space EnterpriseのサブスクリプションオプションにはAll Products Packライセンスが含まれており、Space EnterpriseのアクティブなすべてのユーザーにAll Products Packライセンスを提供します。提供したAll Products Packライセンスには、永久フォールバックライセンス(特定のバージョンの製品を永続的に使用できるライセンス)が含まれており、All Products Packライセンスのサブスクリプション期間はSpace Enterpriseのサブスクリプション期間と同様です。'
            }
        ],
        productLink: ''
    },
    {
        idx: 22,
        title: 'Qodana',
        detail: 'コード品質検査プラットフォーム',
        type: [
            'Quality Gate',
            'Static Analysis',
            'License Audit'
        ],
        summary: 'Qodanaはフレキシブルなコード品質検査プラットフォームです。Qodanaの多数の静的分析は、高いコード品質を保証します。\n特に、Jenkins、GitHub Actions、TeamCityなどのCIツールと統合して、コードチェックを自動化することができます。',
        info:  'Qodanaは柔軟なコード品質検査プラットフォームです。Qodanaは数多くの静的解析検査を提供しています。さらに、Qodanaはフレームワークやライブラリのライセンス監査もサポートしています。Qodana Cloudでは、これらの検査に関するレポートを取得することができます。 また、Qodanaのさまざまな検査をCIツールと統合することで、Qodanaのさまざまな検査を自動化します。これにより、開発プロセスの初期段階でコードの問題を見つけることができます。',
        function: [
            {
                title: 'コード検査',
                description: 'Qodanaは、パフォーマンスの問題、コード構造、潜在的なバグなど、さまざまな分野に対して多数のコードチェックを提供します。',
                img: 'qodana01'
            },
            {
                title: 'ライセンス監査',
                description: 'Qodanaは、プロジェクト開発に使用したフレームワーク、ライブラリのライセンスがプロジェクトのライセンスと互換性がない場合、それを検出してお知らせします。これにより、ライセンスに関する法的な問題を予防することができます。',
                img: 'qodana02'
            },
            {
                title: 'CI/CDツールとの統合',
                description: 'QodanaはJenkins、GitHub Actions、GitLab、TeamCityなどのCI/CDツールと統合することができます。Qodanaの実行を自動化し、開発プロセスにコード品質チェックを自然に溶け込ませることができます。',
                img: 'qodana03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: ''
                    },
                    {
                        text: 'Ultimate'
                    },
                    {
                        text: 'Ultimate Plus'
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '1年'
                    },
                    {
                        text: '¥7,800\n(VAT込み価格 ¥8,580)'
                    },
                    {
                        text: '¥23,400\n(VAT込み価格 ¥25,740)'
                    },
                ],
                [
                    {
                        text: '購入可能数量'
                    },
                    {
                        text: '3 active contributors\n以上購入可能'
                    },
                    {
                        text: '3 active contributors\n以上購入可能'
                    },
                ],
                [
                    {
                        text: 'さまざまなCIの統合'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'IDE統合'
                    },
                    {
                        include: true
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'オープンソースライセンス監査'
                    },
                    {
                        include: false
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: '存続性とAPI検査'
                    },
                    {
                        include: false
                    },
                    {
                        include: true
                    },
                ],
                [
                    {
                        text: 'Taint分析'
                    },
                    {
                        include: false
                    },
                    {
                        include: true
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1372'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1369'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1372'
                    },
                    {
                        text: 'ご購入',
                        link: '/buy/1369'
                    },
                ]
            ]
        },
        purchaseText: [
            'Qodana UltimateおよびUltimate Plusは年間サブスクリプションライセンスです。',
            'Ultimate Plusは2024.7.19まで50%割引の$90で購入可能です。'
        ],
        FAQ: [
            {
                title: 'Qodanaでコードを分析する場合、データは安全ですか？',
                description: 'Qodanaの分析は、JetBrainsがホスティング環境では実行されません。 Qodanaの分析はすべてユーザーのCI/CDシステムで実行されるため、CI/CDシステムが適切に保護されていれば、データは安全です。'
            },
            {
                title: 'Qodana Cloudはコード品質チェックを実行しますか？',
                description: 'いいえ、コード品質チェックはCIサーバーで実行されます。Qodana Cloudは検査レポートのみを提供します。'
            },
            {
                title: 'Qodanaの請求基準は何ですか？',
                description: 'Qodanaは、アクティブコントリビューター(active contributor)の数に応じて費用を支払います。アクティブコントリビューターとは、90日以内にQodana Cloudに登録されたプロジェクトにコミットしたユーザーを意味します。'
            }
        ],
        productLink: ''
    },
    {
        idx: 23,
        title: 'TeamCity',
        detail: '強力で簡単なCI/CDサーバー',
        type: [
            'CI/CD',
            'Test Automation',
        ],
        summary: 'TeamCityはシンプルかつ強力なCI/CDサーバーです。\nTeamCityはDocker、GitHub、AWSなどの技術やプラットフォームはもちろん、ほとんどのビルドツールをサポートします。\nTeamCityを通じて便利な機能が搭載されたCIを体験することができます。',
        info:  'TeamCityはシンプルかつ強力なCI/CDサーバーです。TeamCityの高速で柔軟なCI/CDサーバーで開発チームの生産性を高めることができます。TeamCityはMaven、npm、Gradle、MSBuildなどさまざまなビルドツールと統合されます。TeamCityは連動されたVCSの変更を検知して自動的にビルドを実行します。その後、TeamCityのビルド結果はリアルタイムで報告されます。このビルド報告には、ビルドログ、ビルドアーティファクトなどな詳細が含まれます。 そのため、失敗したビルドを迅速に分析し、再実行することができます。TeamCityのビルドチェーンは、関連するビルドを相互に接続します。これにより、複数のビルドを順番に実行し、開発プロセスを構造化することができます。',
        function: [
            {
                title: 'ビルド自動化',
                description: 'TeamCityを使うと、ビルドが特定の条件で自動的に開始するように設定することができます。TeamCityに連動されたVCSに変更を検知するたびに自動的にビルドを開始することができます。 そして、ビルド間の依存関係を構成して、次のビルドが順次実行されるように構成することができます。',
                img: 'teamCity01'
            },
            {
                title: '並列テスト',
                description: 'TeamCityはテストを複数のビルドエージェントに分散させることができます。これにより、テストを並列に実行することができ、結果として全体的なテスト時間を節約することができます。',
                img: 'teamCity02'
            },
            {
                title: '多様な技術スタックのサポート',
                description: 'TeamCityは、GitHub、GitLab、SpaceなどのVCSはもちろん、Amazon Web Services、Kubernetes、Google Cloud Platformなどのクラウドなど、さまざまな技術スタックをサポートしています。 特に、TeamCityとDockerの統合により、ビルドからDockerイメージを作成したり、Dockerコンテナでビルドを実行することができます。',
                img: 'teamCity03'
            }
        ],
        purchase: {
            title: [
                [
                    {
                        text: 'Cloud',
                        col: 2
                    },
                ]
            ],
            details: [
                [
                    {
                        text: '価格'
                    },
                    {
                        text: '$180 / committer\n(税込み $198)'
                    },
                ],
                [
                    {
                        text: '購入可能数量'
                    },
                    {
                        text: '3 committer以上購入可能'
                    },
                ],
                [
                    {
                        text: 'Build Credit'
                    },
                    {
                        text: '$20 / 25,000 build credits'
                    },
                ],
            ],
            bottom: [
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate'
                    }
                ],
                [
                    {
                        text: '',
                        link: ''
                    },
                    {
                        text: 'ご購入',
                        link: '/buy'
                    }
                ]
            ]
        },
        purchase2: {
            title: [
                [
                    {
                        text: 'TeamCity On-Premises (TeamCity Enterprise)',
                        col: 6
                    }
                ]
            ],
            details: [
                [
                    {
                        text: '新規購入',
                        col: 2
                    },
                    {
                        text: '有効期限内の更新',
                        col: 2
                    },
                    {
                        text: '有効期限後の更新',
                        col: 2
                    },
                ],
                [
                    {
                        text: 'Server'
                    },
                    {
                        text: 'Agent'
                    },
                    {
                        text: 'Server'
                    },
                    {
                        text: 'Agent'
                    },
                    {
                        text: 'Server'
                    },
                    {
                        text: 'Agent'
                    }
                ],
                [
                    {
                        text: '¥311,870\n(税込み ¥343,057)',
                    },
                    {
                        text: '¥46,670\n(税込み ¥51,337)',
                    },
                    {
                        text: '¥155,870\n(税込み ¥171,457)',
                    },
                    {
                        text: '¥23,270\n(税込み ¥25,597)',
                    },
                    {
                        text: '¥233,870\n(税込み ¥257,257)',
                    },
                    {
                        text: '¥35,750\n(税込み ¥39,325)',
                    }
                ],
            ],
            bottom: [
                [
                    {
                        text: 'お見積もり',
                        link: '/estimate/1268'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1271'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1274'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1277'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1280'
                    },
                    {
                        text: 'お見積もり',
                        link: '/estimate/1283'
                    }
                ],
                // [
                //     {
                //         text: 'ご購入',
                //         link: '/buy'
                //     },
                //     {
                //         text: 'ご購入',
                //         link: '/buy'
                //     }
                // ]
            ]
        },
        purchaseText: ['TeamCity Cloudは年間サブスクリプションライセンス、TeamCity On-Premisesは永久ライセンスです。'],
        FAQ: [
            {
                title: 'Build Agentライセンスを購入せずに、Build Configurationだけを別途購入することはできますか？',
                description: 'いいえ、Build ConfigurationはBuild Agentライセンスの一部です。 そのため、Build Agentライセンスを購入しなければ、Build Configurationを取得することはできません。',
            },
            {
                title: 'Commiterとは何ですか？',
                description: 'TeamCity CloudはCommiterの数量に応じて料金を支払います。TeamCity CloudでCommiterとは、プロジェクトでVCSの変更を作成したユーザーを意味します。TeamCity Cloudのユーザーがプロジェクトで10個のVCS変更を作成するとCommiterとみなされ、30日間活動しない場合、Commiterは回収されます。',
            },
            {
                title: 'Build Agentとは何ですか？',
                description: 'Build Agentは、TeamCityサーバーのコマンドを受信し、実際にビルドプロセスを実行するソフトウェアです。Build Agentはコードを確認し、Build Artifactをダウンロードし、ビルドプロセスを実行します。Build AgentはTeamCityサーバーとは別にインストール、構成されます。',
            },
            {
                title: 'Build Creditとは何ですか？',
                description: 'TeamCity Cloudで購入した各Commiterに対してBuild Creditが提供されます。TeamCity CloudでBuild Creditは、ビルドエージェントを使用するための「通貨」のような役割を果たします。Build Creditは、エージェントがビルドを実行している間、自動的に差し引かれます。',
            }
        ]
    }
]



const commonProductOption = [
    '1年',
    '2年',
    '3年'
]

const productOptionDotUltimate = commonProductOption.map((data)=> 'dotUltimate' + data)

export const productsList = [
    {
        name: 'Clion 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'DataGrip 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'DataSpell 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'GoLand 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'IntelliJ IDEA 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'PhpStorm 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'PyCharm 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'Rider 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'RubyMine 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'WebStorm 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'ReSharper 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'ReSharper C++ 商業用',
        option: [
            'ReSharper 1年',
            'ReSharper 2年',
            'ReSharper 3年',
            'dotUltimate 1年',
            'dotUltimate 2年',
            'dotUltimate 3年',
        ]
    }, 
    {
        name: 'dotCover 商業用',
        option: productOptionDotUltimate,
        min: 1
    }, 
    {
        name: 'dotMemory 商業用',
        option: productOptionDotUltimate,
        min: 1
    }, 
    {
        name: 'dotTrace 商業用',
        option: productOptionDotUltimate,
        min: 1
    }, 
    {
        name: 'All Products Pack 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'dotUltimate 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'JetBrains AI 商業用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'Code With Me 商業用',
        option: [
            'Premium 1年',
            'Premium 2年',
            'Premium 3年',
            'Enterprise 1年',
            'Enterprise 2年',
            'Enterprise 3年',
        ],
        quantity: {
            'Enterprise 1年': {
                min: 10,
                text: '호스트'
            },
            'Enterprise 2年': {
                min: 10,
                text: '호스트'
            },
            'Enterprise 3年': {
                min: 10,
                text: '호스트'
            },
        }
    }, 
    {
        name: 'Datalore 商業用',
        option: [
            'Team 1年',
            'Enterprise 1年',
            'Enterprise 2年',
            'Enterprise 3年',
        ],
        quantity: {
            'Team 1年': {
                min: 3,
                text: '유저'
            },
            'Enterprise 1年': {
                min: 5,
                text: '유저'
            },
            'Enterprise 2年': {
                min: 5,
                text: '유저'
            },
            'Enterprise 3年': {
                min: 5,
                text: '유저'
            },
        }
    }, 
    {
        name: 'YouTrack Cloud',
        option: [
            'User',
            'Agent',
        ],
        quantity: {
            'User': {
                min: 11,
                text: '유저'
            },
            'Agent': {
                min: 3,
                text: '에이전트'
            },
        }
    }, 
    {
        name: 'YouTrack Server',
        option: [
            '15ユーザー 1年',
            '25ユーザー 1年',
            '50ユーザー 1年',
            '100ユーザー 1年',
            '250ユーザー 1年',
            '500ユーザー 1年',
            '750ユーザー 1年',
            '1000ユーザー 1年',
            '2000ユーザー 1年',
            '15ユーザー 2年',
            '25ユーザー 2年',
            '50ユーザー 2年',
            '100ユーザー 2年',
            '250ユーザー 2年',
            '500ユーザー 2年',
            '750ユーザー 2年',
            '1000ユーザー 2年',
            '2000ユーザー 2年',
            '15ユーザー 3年',
            '25ユーザー 3年',
            '50ユーザー 3年',
            '100ユーザー 3年',
            '250ユーザー 3年',
            '500ユーザー 3年',
            '750ユーザー 3年',
            '1000ユーザー 3年',
            '2000ユーザー 3年',
            'Agent',
        ],
        quantity: {
            'Agent': {
                min: 3,
                text: '에이전트'
            },
        }
    }, 
    {
        name: 'YouTrack Server 有効期限内の更新',
        option: [
            '15ユーザー 1年',
            '25ユーザー 1年',
            '50ユーザー 1年',
            '100ユーザー 1年',
            '250ユーザー 1年',
            '500ユーザー 1年',
            '750ユーザー 1年',
            '1000ユーザー 1年',
            '2000ユーザー 1年',
            '15ユーザー 2年',
            '25ユーザー 2年',
            '50ユーザー 2年',
            '100ユーザー 2年',
            '250ユーザー 2年',
            '500ユーザー 2年',
            '750ユーザー 2年',
            '1000ユーザー 2年',
            '2000ユーザー 2年',
            '15ユーザー 3年',
            '25ユーザー 3年',
            '50ユーザー 3年',
            '100ユーザー 3年',
            '250ユーザー 3年',
            '500ユーザー 3年',
            '750ユーザー 3年',
            '1000ユーザー 3年',
            '2000ユーザー 3年',
            'Agent',
        ],
        quantity: {
            'Agent': {
                min: 3,
                text: '에이전트'
            },
        }
    }, 
    {
        name: 'YouTrack Server 有効期限後の更新',
        option: [
            '15ユーザー 1年',
            '25ユーザー 1年',
            '50ユーザー 1年',
            '100ユーザー 1年',
            '250ユーザー 1年',
            '500ユーザー 1年',
            '750ユーザー 1年',
            '1000ユーザー 1年',
            '2000ユーザー 1年',
            '15ユーザー 2年',
            '25ユーザー 2年',
            '50ユーザー 2年',
            '100ユーザー 2年',
            '250ユーザー 2年',
            '500ユーザー 2年',
            '750ユーザー 2年',
            '1000ユーザー 2年',
            '2000ユーザー 2年',
            '15ユーザー 3年',
            '25ユーザー 3年',
            '50ユーザー 3年',
            '100ユーザー 3年',
            '250ユーザー 3年',
            '500ユーザー 3年',
            '750ユーザー 3年',
            '1000ユーザー 3年',
            '2000ユーザー 3年',
            'Agent',
        ],
        quantity: {
            'Agent': {
                min: 3,
                text: '에이전트'
            },
        }
    }, 
    {
        name: 'Space Cloud',
        option: [
            'Team 1年',
            'Organization 1年',
            'Enterprise 1年',
            'General Credit',
        ],
        quantity: {
            'Organization 1年': {
                min: 5,
                text: '유저'
            },
            'Enterprise 1年': {
                min: 10,
                text: '유저'
            },
        }
    }, 
    {
        name: 'Space On-Premises',
        option: [
            'Organization 1年',
            'Enterprise 1年',
            'Worker',
        ],
        quantity: {
            'Organization 1年': {
                min: 5,
                text: '유저'
            },
            'Enterprise 1年': {
                min: 50,
                text: '유저'
            },
        }
    }, 
    {
        name: 'Qodana Ultimate',
        option: commonProductOption,
        quantity: {
            '1年': {
                min: 3,
                text: 'contributor'
            },
            '2年': {
                min: 3,
                text: 'contributor'
            },
            '3年': {
                min: 3,
                text: 'contributor'
            },
        }
    }, 
    {
        name: 'Qodana Ultimate Plus',
        option: commonProductOption,
        quantity: {
            '1年': {
                min: 3,
                text: 'contributor'
            },
            '2年': {
                min: 3,
                text: 'contributor'
            },
            '3年': {
                min: 3,
                text: 'contributor'
            },
        }
    }, 
    {
        name: 'TeamCity Cloud',
        option: [
            '1年',
            '25000 Build Credits Pack',
        ],
        quantity: {
            '1年': {
                min: 3,
                text: 'commiter'
            },
        }
    }, 
    {
        name: 'TeamCity Enterprise',
        option: [
            '1年',
            'Agent',
        ],
        quantity: {
            'Agent': {
                min: 3,
                text: 'agent'
            },
        }
    }, 
    {
        name: 'TeamCity Enterprise 有効期限内の更新',
        option: [
            '3 Build Agent',
            '5 Build Agent',
            '10 Build Agent',
            '20 Build Agent',
            '50 Build Agent',
            '100 Build Agent',
        ],
        min: 1
    }, 
    {
        name: 'TeamCity Enterprise 有効期限後の更新',
        option: [
            '3 Build Agent',
            '5 Build Agent',
            '10 Build Agent',
            '20 Build Agent',
            '50 Build Agent',
            '100 Build Agent',
        ],
        min: 1
    }, 
    {
        name: 'Clion 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'DataGrip 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'DataSpell 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'GoLand 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'IntelliJ IDEA 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'PhpStorm 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'PyCharm 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'Rider 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'RubyMine 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'WebStorm 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'ReSharper 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'ReSharper C++ 個人用',
        option: [
            'ReSharper 1年',
            'ReSharper 2年',
            'ReSharper 3年',
            'dotUltimate 1年',
            'dotUltimate 2年',
            'dotUltimate 3年',
        ],
        min: 1
    }, 
    {
        name: 'dotCover 個人用',
        option: productOptionDotUltimate,
        min: 1
    }, 
    {
        name: 'dotMemory 個人用',
        option: productOptionDotUltimate,
        min: 1
    }, 
    {
        name: 'dotTrace 個人用',
        option: productOptionDotUltimate,
        min: 1
    }, 
    {
        name: 'All Products Pack 個人用',
        option: commonProductOption,
        min: 1
    }, 
    {
        name: 'dotUltimate 個人用',
        option: commonProductOption,
        min: 1
    },
    {
        name: 'Code With Me 個人用',
        option: commonProductOption,
        min: 1
    }
]