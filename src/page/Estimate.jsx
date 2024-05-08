import React, { useEffect, useState } from 'react';
import Select from '../components/Select';
import { useNavigate } from 'react-router-dom';

import { productsList } from '../js/product'

export default function Estimate() {
    const navigate = useNavigate();
    const [productSelect, setProductSelect] = useState({
        'company': '',
        'product': '',
        'option': '',
        'quantity': '',
    })

    const arr = productsList.filter((data)=> data.name === productSelect.product)[0]
    const option = arr?.option
    const test = arr?.quantity?.[productSelect.option] ? arr?.quantity[productSelect.option].min : '1'

    useEffect(()=>{
        setProductSelect((prev)=>({...prev, 'quantity': arr?.quantity?.[productSelect.option] ? arr?.quantity[productSelect.option].min : '1'}))
    },[productSelect.option])

    const test01 = arr?.quantity ? arr?.quantity[productSelect.option]?.text : '';
    // useEffect(()=>{

    // },[productSelect.quantity])

    return (
        <section>
            <h2 onClick={()=>console.log(productSelect)}>お見積もり</h2>
            <form>
                <fieldset className='inputBox-product'>
                    <ul>
                        <li>
                            <label htmlFor="">メーカー</label>
                            <div>
                                <Select placeholder="メーカー選択" list={['JetBrains']} set={setProductSelect} name='company'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">製品</label>
                            <div>
                                <div>
                                    <Select placeholder="製品選択" list={productsList.map((data)=>data.name)} set={setProductSelect} name='product' disabled={!productSelect.company}/>
                                </div>
                            </div>
                        </li>
                        <li className='half'>
                            <label htmlFor="">オプション</label>
                            <div>
                                <div>
                                    <Select placeholder="選択" key={productSelect.product} list={option} set={setProductSelect} name='option' disabled={!productSelect.product}/>
                                </div>
                            </div>
                        </li>
                        <li className='half'>
                            <label htmlFor="">数量</label>
                            <div>
                                <input type="number" min={productSelect.option && productSelect?.quantity} value={productSelect.option && productSelect?.quantity} onChange={(e)=>setProductSelect((prev)=>({...prev, 'quantity': e.target.value}))} disabled={!productSelect.option}/>
                            </div>
                            { test01 && 
                                <small>{ test01 }</small>
                            }
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

