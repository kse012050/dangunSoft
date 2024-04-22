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
                                <Select />
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">製品</label>
                            <div>
                                <div>
                                    <Select />
                                </div>
                            </div>
                        </li>
                        <li className='half'>
                            <label htmlFor="">オプション</label>
                            <div>
                                <div>
                                    <Select />
                                </div>
                            </div>
                        </li>
                        <li className='half'>
                            <label htmlFor="">数量</label>
                            <div>
                                <input type="number" />
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

