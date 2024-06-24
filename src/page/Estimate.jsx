import React, { useEffect, useState } from 'react';
// import Select from '../components/Select';
import { useNavigate } from 'react-router-dom';
// import { productsList } from '../js/product'
import { inputChange, inputsRequiredAdd } from '../api/validation';
import { isSubmit, userApi } from '../api/api';
import EstimateProduct from './EstimateProduct';

const orderProductList = {
    vendor_id: '',
    product_id: '',
    product_option_id: '',
    order_quantiry: '',
    option_price_id: '',
}

const firstTextList = {
    vendor_id: '',
    product_id: '',
    product_option_id: '',
    order_quantiry: '',
    option_price_id: '5',
}

export default function Estimate() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({board_type: 'estimate'})
    const [products, setProducts] = useState([{...orderProductList}])
    const [firstTexts, setFirstTexts] = useState([{...firstTextList}])

    useEffect(()=>{
        inputsRequiredAdd(setInputs);
    },[])


    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs);
        console.log(products);
        
        if(isSubmit(inputs)){
            return;
        }

        const isProducts = products.some((data)=>{
            return Object.entries(data).some(([_, value]) =>{
                if(!value){
                    return true
                }
                return false;
            })
        })

        if(isProducts){
            return
        }

        const test = {...inputs, order_product_list: [...products]}
        test.write_name = `${test.write_name_last}/${test.write_name_first}`
        delete test.write_name_last
        delete test.write_name_first
        test.phonetic_guide = `${test.phonetic_guide_last}/${test.phonetic_guide_first}`
        delete test.phonetic_guide_last
        delete test.phonetic_guide_first
        
        // console.log(test);
        userApi('board/manage', 'insert', test)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    sessionStorage.setItem('estimateDetail', JSON.stringify(result.data));
                    navigate('/estimateResult')
                }
            })
    }

    return (
        <section>
            <h2 onClick={()=>{
                console.log(products)
                console.log(firstTexts)
            }}>お見積もり</h2>
            <form onChange={(e)=>inputChange(e, setInputs)}>
                {!!products.length && products.map((_, i)=>
                    <React.Fragment key={i}>
                        <EstimateProduct orderProductList={orderProductList} products={products} setProducts={setProducts} firstTextList={firstTextList} firstTexts={firstTexts} setFirstTexts={setFirstTexts} productIdx={i} /* key={products.length} *//>
                    </React.Fragment>
                )}
                <fieldset className='inputBox'>
                    <ul>
                        <li>
                            <label htmlFor="company_name">企業名</label>
                            <div>
                                <input type="text" name='company_name' id='company_name' placeholder='企業名を入力してください'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="write_name_last">名前(姓/名)</label>
                            <div>
                                <input type="text" name='write_name_last' id='write_name_last' placeholder='姓' required/>
                                <input type="text" name='write_name_first' id='write_name_first' placeholder='名' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="phonetic_guide_last">ふりがな</label>
                            <div>
                                <input type="text" name='phonetic_guide_last' id='phonetic_guide_last' placeholder='姓' required/>
                                <input type="text" name='phonetic_guide_first' id='phonetic_guide_first' placeholder='名' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <div>
                                <input type="text" name='email' id='email' placeholder='メールアドレスを入力してください' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="contact_information">電話番号</label>
                            <div>
                                <input type="text" name='contact_information' id='contact_information' placeholder='電話番号を入力してください' /* data-formet="numb" */ required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="comment">お問い合わせ</label>
                            <div>
                                <textarea name="comment" id="comment" placeholder='内容'></textarea>
                            </div>
                        </li>
                    </ul>
                    <p>お見積もりを求める場合は、<button type='button'>プライバシーポリシー</button>に同意するものとみなします。</p>
                </fieldset>
                <div className='submitBox'>
                    <input type="reset" className='btn-border-black' value='初期化'/>
                    <input type="submit" className='btn-bg' value='確認' onClick={onSubmit}/>
                </div>
            </form>
        </section>
    );
}

