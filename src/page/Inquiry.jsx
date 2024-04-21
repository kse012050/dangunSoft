import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Inquiry() {
    const navigate = useNavigate();

    return (
        <section>
            <h2>お問い合わせ</h2>
            <p>お問い合わせの依頼です。</p>
            <form>
                <fieldset className='inputBox'>
                    <ul>
                        <li>
                            <label htmlFor="">名前(姓 / 名)</label>
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
                            <label htmlFor="">会社名</label>
                            <div>
                                <input type="text" placeholder='企業名を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">電話番号</label>
                            <div>
                                <input type="text" placeholder='電話番号を入力してください' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <div>
                                <input type="text" placeholder='メールアドレスを入力してください' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">タイトル</label>
                            <div>
                                <input type="text" placeholder='タイトルを入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">お問い合わせ</label>
                            <div>
                                <textarea name="" id="" placeholder='内容'></textarea>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label htmlFor="">ミーティング要請</label>
                        </li>
                    </ul>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">秘密文書</label>
                        <input type="password" placeholder='パスワードを入力してください' autoComplete="off"/>
                    </div>
                </fieldset>
                <div className='submitBox'>
                    <input type="reset" className='btn-border-black' value='キャンセル'/>
                    <input type="submit" className='btn-bg' value='確認' onClick={()=>navigate('/support/inquiry')}/>
                </div>
            </form>
        </section>
    );
}

