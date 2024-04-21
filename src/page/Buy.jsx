import React, { useState } from 'react';
import Select from '../components/Select';
import { useNavigate } from 'react-router-dom';

export default function Buy() {
    const navigate = useNavigate();
    const [test, setTest] = useState(true)

    return (
        <section>
            <h2>購入</h2>
            <div className='productBox'>
                <figure>
                    <img src="https://placehold.co/120x120" alt="임시 이미지" />
                    <figcaption>
                        <strong>Mindiet MindManager Single New License</strong>
                        <p>475,000원</p>
                        <div>
                            <button>-</button>
                            1
                            <button>+</button>
                        </div>
                    </figcaption>
                </figure>
                <dl className='deliveryArea'>
                    <dt>税</dt>
                    <dd>0円</dd>
                </dl>
                <dl className="amountBox">
                    <dt>合計 (税込み)</dt>
                    <dd>475,000円</dd>
                </dl>
            </div>
            <form>
                <fieldset className='inputBox'>
                    <strong>ご注文者の情報</strong>
                    <ul>
                        <li>
                            <label htmlFor="">名前</label>
                            <div>
                                <input type="text" placeholder='名前を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">会社名</label>
                            <div>
                                <input type="text" placeholder='企業名を入力してください'/>
                                <input type="checkbox" />
                                <label htmlFor="">個人</label>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">電話番号</label>
                            <div>
                                <input type="text" placeholder='電話番号を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <div>
                                <input type="text" placeholder='メールを入力してください'/>
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <fieldset className='inputBox'>
                    <strong>ライセンスユーザーの情報</strong>
                    <ul>
                        <li>
                            <label htmlFor="">名前</label>
                            <div>
                                <input type="text" placeholder='名前を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">名前(英語)</label>
                            <div>
                                <input type="text" placeholder='名前(英語)を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">会社名</label>
                            <div>
                                <input type="text" placeholder='会社名を入力してください'/>
                                <input type="checkbox" />
                                <label htmlFor="">個人</label>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">会社名(英語)</label>
                            <div>
                                <input type="text" placeholder='会社名(英語)を入力してください'/>
                                <input type="checkbox" />
                                <label htmlFor="">個人</label>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">郵便番号</label>
                            <div>
                                <Select />
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">住所</label>
                            <div>
                                <input type="text" placeholder='住所を入力してください'/>
                            </div>
                            <div>
                                <input type="text" placeholder='残りの住所を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">住所(英語)</label>
                            <div>
                                <input type="text" placeholder='住所(英語)を入力してください'/>
                            </div>
                            <div>
                                <input type="text" placeholder='残りの住所(英語)を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">電話番号</label>
                            <div>
                                <input type="text" placeholder='電話番号を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <div>
                                <input type="text" placeholder='メールを入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">要求事項</label>
                            <div>
                                <textarea name="" id=""></textarea>
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <fieldset className='inputArea'>
                    <strong>決済情報</strong>
                    <ul>
                        <li>
                            <label htmlFor="">決済方法</label>
                            <div>
                                <input type="radio" defaultChecked id='test01' name='test' onChange={()=>setTest(true)}/>
                                <label htmlFor="test01">クレジットカード</label>
                                <input type="radio" id='test02' name='test' onChange={()=>setTest(false)}/>
                                <label htmlFor="test02">銀行振込</label>
                            </div>
                            {/* <div>
                                { test ?
                                    <p>카드 : 현대카드, 국민카드, 롯데카드, 삼성카드, 비씨카드, 신한카드, 하나(외환)카드, NH농협카드</p> :
                                    <>
                                        <dl>
                                            <dt>계좌번호</dt>
                                            <dd></dd>
                                        </dl>
                                        <dl>
                                            <dt>예금주</dt>
                                            <dd></dd>
                                        </dl>
                                        <p>입금 확인은 자동으로 진행되며 확인이 완료되면 영업일 기준 1-2일 이내로 라이선스 증서를 받아보실 수 있습니다.</p>
                                    </>
                                }
                            </div> */}
                        </li>
                    </ul>
                </fieldset>
                <fieldset className='inputArea'>
                    <strong>最終注文確認</strong>
                    <ul>
                        <li>
                            <label htmlFor="">注文同意</label>
                            <p>ご注文いただく商品の商品名、商品価格、配送情報をご確認の上、ご購入に同意しますか？</p>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">同意します。</label>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">個人情報同意</label>
                            <p>ご注文の処理と配送のためだけに提供されます。</p>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">同意します。약관전체보기</label>
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <dl className="amountBox">
                    <dt>最終決済金額</dt>
                    <dd>475,000円</dd>
                </dl>
                <div className='submitBox'>
                    <input type="reset" className='btn-border-black' value='キャンセル'/>
                    <input type="submit" className='btn-bg' value='決済する' onClick={()=>navigate('/buyResult')}/>
                </div>
            </form>
        </section>
    );
}

