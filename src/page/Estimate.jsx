import React from 'react';
import Select from '../components/Select';
import { useNavigate } from 'react-router-dom';

export default function Estimate() {
    const navigate = useNavigate();

    return (
        <section>
            <h2>お見積もり</h2>
            <form>
                <fieldset className='inputBox-product'>
                    <ul>
                        <li>
                            <label htmlFor="">メーカー</label>
                            <div>
                                <Select placeholder="メーカー選択" list={['JetBrains']}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">製品</label>
                            <div>
                                <div>
                                    <Select placeholder="製品選択" list={
                                        [
                                            'Clion 商業用',
                                            'DataGrip 商業用',
                                            'DataSpell 商業用',
                                            'GoLand 商業用',
                                            'IntelliJ IDEA 商業用',
                                            'PhpStorm 商業用',
                                            'PyCharm 商業用',
                                            'Rider 商業用',
                                            'RubyMine 商業用',
                                            'WebStorm 商業用',
                                            'ReSharper 商業用',
                                            'ReSharper C++ 商業用dotCover 商業用',
                                            'dotMemory 商業用',
                                            'dotTrace 商業用',
                                            'All Products Pack 商業用',
                                            'dotUltimate 商業用',
                                            'JetBrains AI 商業用',
                                            'Code With Me 商業用Datalore 商業用YouTrack Cloud',
                                            'YouTrack ServerYouTrack Server 有効期限内の更新YouTrack Server 有効期限後の更新Space CloudSpace On-Premises',
                                            'Qodana Ultimate',
                                            'Qodana Ultimate Plus',
                                            'TeamCity CloudTeamCity EnterpriseTeamCity Enterprise 有効期限内の更新TeamCity Enterprise 有効期限後の更新Clion 個人用',
                                            'DataGrip 個人用',
                                            'DataSpell 個人用',
                                            'GoLand 個人用',
                                            'IntelliJ IDEA 個人用',
                                            'PhpStorm 個人用',
                                            'PyCharm 個人用',
                                            'Rider 個人用',
                                            'RubyMine 個人用',
                                            'WebStorm 個人用',
                                            'ReSharper 個人用',
                                            'ReSharper C++ 個人用',
                                            'dotCover 個人用',
                                            'dotMemory 個人用',
                                            'dotTrace 個人用',
                                            'All Products Pack 個人用',
                                            'dotUltimate 個人用',
                                            'JetBrains AI 個人用',
                                            'Code With Me 個人用',
                                        ]
                                    }/>
                                </div>
                            </div>
                        </li>
                        <li className='half'>
                            <label htmlFor="">オプション</label>
                            <div>
                                <div>
                                    <Select placeholder="選択" list={
                                        [
                                            '1年',
                                            '2年',
                                            '3年',
                                        ]
                                    }/>
                                </div>
                            </div>
                        </li>
                        <li className='half'>
                            <label htmlFor="">数量</label>
                            <div>
                                <input type="number" min="1" defaultValue="1"/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">サブスクリプション·オプション</label>
                            <div>
                                <input type="radio" defaultChecked={true}/>
                                <label htmlFor="">新規</label>
                                <input type="radio" />
                                <label htmlFor="">更新</label>
                                <input type="radio" />
                                <label htmlFor="">アップグレード</label>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <button type='button'>+ 製品追加</button>
                        <button type='button'>- 削除</button>
                    </div>
                </fieldset>

                <fieldset className='inputBox'>
                    <ul>
                        <li>
                            <label htmlFor="">企業名</label>
                            <div>
                                <input type="text" placeholder='企業名を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">名前(姓/名)</label>
                            <div>
                                <input type="text" placeholder='姓' required/>
                                <input type="text" placeholder='名' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">ふりがな</label>
                            <div>
                                <input type="text" placeholder='姓' required/>
                                <input type="text" placeholder='名' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <div>
                                <input type="text" placeholder='メールアドレスを入力してください' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">電話番号</label>
                            <div>
                                <input type="text" placeholder='電話番号を入力してください' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">お問い合わせ</label>
                            <div>
                                <textarea name="" id="" placeholder='内容'></textarea>
                            </div>
                        </li>
                    </ul>
                    <p>お見積もりを求める場合は、<button type='button'>プライバシーポリシー</button>に同意するものとみなします。</p>
                </fieldset>
                <div className='submitBox'>
                    <input type="reset" className='btn-border-black' value='初期化'/>
                    <input type="submit" className='btn-bg' value='確認' onClick={()=>navigate('/estimateResult')}/>
                </div>
            </form>
        </section>
    );
}

