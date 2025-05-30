import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Select from '../components/Select';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { isSubmit, userApi } from '../api/api';
import { urlParams } from '../js/common';
import { inputChange, inputsRequiredAdd } from '../api/validation';
import Popup from '../admin/components/popup/Popup';
import Loading from '../components/Loading';

const addresList = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
]

const addresEnList = [
    'Hokkaido',
    'Aomori Prefecture',
    'Iwate Prefecture',
    'Miyagi Prefecture',
    'Akita Prefecture',
    'Yamagata Prefecture',
    'Fukushima Prefecture',
    'Ibaraki Prefecture',
    'Tochigi Prefecture',
    'Gunma Prefecture',
    'Saitama Prefecture',
    'Chiba Prefecture',
    'Tokyo',
    'Kanagawa Prefecture',
    'Niigata Prefecture',
    'Toyama Prefecture',
    'Ishikawa Prefecture',
    'Fukui Prefecture',
    'Yamanashi Prefecture',
    'Nagano Prefecture',
    'Gifu Prefecture',
    'Shizuoka Prefecture',
    'Aichi Prefecture',
    'Mie Prefecture',
    'Shiga Prefecture',
    'Kyoto Prefecture',
    'Osaka Prefecture',
    'Hyogo Prefecture',
    'Nara Prefecture',
    'Wakayama Prefecture',
    'Tottori Prefecture',
    'Shimane Prefecture',
    'Okayama Prefecture',
    'Hiroshima Prefecture',
    'Yamaguchi Prefecture',
    'Tokushima Prefecture',
    'Kagawa Prefecture',
    'Ehime Prefecture',
    'Kochi Prefecture',
    'Fukuoka Prefecture',
    'Saga Prefecture',
    'Nagasaki Prefecture',
    'Kumamoto Prefecture',
    'Oita Prefecture',
    'Miyazaki Prefecture',
    'Kagoshima Prefecture',
    'Okinawa Prefecture',
]


export default function Buy() {
    const { id, orderCode } = useParams()
    const { idx } = urlParams(useLocation())
    const navigate = useNavigate();
    const [inputs, setInputs] = useState();
    const [orderProduct, setOrderProduct] = useState();
    const [licenseInfo, setLicenseInfo] = useState({
        write_name:'',
        write_name_en:'',
        company_name:'',
        individual_yn:'n',
        company_name_en:'',
        post_code:"",
        address:"",
        address_detail:"",
        post_code_en:"",
        address_en: "",
        address_detail_en: "",
        email:'',
        contact_information:'',
    });
    const [productInfo, setProductInfo] = useState()
    const [productInfoSum, setProductInfoSum] = useState()
    const sameRef = useRef()
    const [popup, setPopup] = useState()
    const inputsRef = useRef(inputs);
    const orderProductRef = useRef(orderProduct);
    const licenseInfoRef = useRef(licenseInfo);
    const [isLoading, setIsLoading] = useState()


    useEffect(()=>{
        ((id || orderCode) || idx) || navigate('/product')
    },[id, orderCode, idx, navigate])

    useEffect(() => {
        inputsRef.current = inputs;
    }, [inputs]);

    useEffect(() => {
        orderProductRef.current = orderProduct;
    }, [orderProduct]);

    useEffect(() => {
        licenseInfoRef.current = licenseInfo;
    }, [licenseInfo]);
    
    useEffect(()=>{
        window.onTokenCreated = (response) => {
            // console.log('Token created:', response.id);
            // console.log(inputsRef.current);

            let parameter = {
                ...inputsRef.current,
                order_product_list: [
                    ...orderProductRef.current
                ],
                license_info: {
                    ...licenseInfoRef.current
                },
                pay_token: response.id
            }

            if(id){
                parameter = {...parameter, order_product_list: [...orderProductRef.current]}
            }

            // if(orderCode){
            //     parameter = {...parameter, order_id: orderCode}
            // }

            setIsLoading(true)
            // console.log(parameter);
            userApi('order/manage', '', {...parameter})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setIsLoading(false)
                        sessionStorage.setItem('buyDetail', JSON.stringify(result.data));
                        navigate(`/buyResult${idx ? `?idx=${idx}`: ''}`)
                    }
                })
        };

    },[inputs, orderProduct, licenseInfo, idx, navigate, id, orderCode])

    useEffect(()=>{
        const script2 = document.createElement('script');
        script2.src = 'https://yubinbango.github.io/yubinbango/yubinbango.js';
        script2.charset = 'UTF-8';
        script2.async = true;
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script2);
        };
    },[])

    const handlePostalCodeChange = (e) => {
        const newPostalCode = e.target.value.replace(/-/g, '');
        setLicenseInfo(prev => ({ ...prev, post_code_en: e.target.value }));
    
        if (newPostalCode.length === 7) {
          // 우편번호로 주소를 가져와서 상태를 업데이트
          new window.YubinBango.Core(newPostalCode, (newAddress) => {
            setLicenseInfo(prev => ({
              ...prev,
              address: newAddress.region,
              address_detail: newAddress.l + ' ' + newAddress.m
            }));
          });
        }
    };


    useLayoutEffect(()=>{
        inputsRequiredAdd(setInputs);

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://checkout.pay.jp/';
        script.className = 'payjp-button';
        script.setAttribute('data-key', 'pk_test_f3267e4bac33429e65021689');
        script.setAttribute('data-submit-text', 'トークンを作成する');
        script.setAttribute('data-partial', 'true');
        script.setAttribute('data-on-created', 'onTokenCreated');
        document.querySelector('.payjsArea').appendChild(script)


        // const script2 = document.createElement('script');
        // script2.src = 'https://yubinbango.github.io/yubinbango/yubinbango.js';
        // script2.async = true;
        // document.body.appendChild(script2);

        if(id){
            userApi('product/detail', '', {option_price_id: id})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setOrderProduct([{
                            vendor_id: result.data.vendor_id,
                            product_id: result.data.product_id,
                            product_option_id: result.data.optionList[0].product_option_id,
                            order_quantiry: result.data.optionList[0].minimum_quantiry,
                            option_price_id: result.data.optionList[0].optionPriceList[0].option_price_id,
                        }])
                        setProductInfo({
                            product_name: result.data.product_name,
                            option_name: result.data.optionList[0].option_name,
                            price: result.data.optionList[0].optionPriceList[0].vat_exclude_price
                        })
                    }
                })
        }

        if(orderCode){
            userApi('order/detail', '', {order_code: orderCode})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setInputs(prev=> ({ ...prev,
                            write_name: result.data.write_name,
                            company_name: result.data.company_name,
                            contact_information: result.data.contact_Information,
                            email: result.data.email,
                            order_id: result.data.order_product_list[0].order_id
                        }))
                        setOrderProduct([...result.data.order_product_list.map(data=>({
                            vendor_id: data.vendor_id,
                            product_id: data.product_id,
                            product_option_id: data.product_option_id,
                            order_quantiry: data.order_quantiry,
                            option_price_id: data.option_price_info_obj.option_price_id,
                        }))])
                        setProductInfo([...result.data.order_product_list.map(data=>({
                            product_name: data.product_name,
                            order_quantiry: data.order_quantiry,
                            total_price: data.total_price,
                            discount_price: data.discount_price,
                            final_pay_price: data.final_pay_price,
                        }))])
                        setProductInfoSum({
                            discount_price: result.data.discount_price,
                            final_pay_price: result.data.final_pay_price,
                            state: result.data.state
                        })
                    }
                })
        }
    },[id, orderCode])

    const onSame = (e) => {
        const { checked } = e.target
        if(checked){
            setLicenseInfo(prev => {
                const arr = {
                    ...prev,
                    write_name: inputs.write_name,
                    company_name: inputs.company_name,
                    contact_information: inputs.contact_information,
                    email: inputs.email,
                    individual_yn: inputs.individual_yn
                }
                if(inputs.individual_yn === 'y'){
                    delete arr.company_name
                    delete arr.company_name_en
                }
                return arr
            })
        }else{
            setLicenseInfo(prev => ({
                ...prev,
                write_name: '',
                company_name: '',
                company_name_en: '',
                contact_information: '',
                email: '',
                individual_yn: 'n'
            }))
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);
        // console.log(licenseInfo);
        // console.log(productInfo);
        if(orderCode && productInfoSum.state !== 'request'){
            setPopup({
                type: 'confirm',
                title: '알림',
                description: [
                    '구매가 불가능한 상태입니다.',
                    '관리자에게 문의해주세요.'
                ],
                func: () =>{
                    navigate('/product')
                }
            })
            return
        }
        
        if(isSubmit(inputs)){
            return;
        }
        
        if(Object.entries(licenseInfo).some(([key, value]) => {
            // if (!value && document.querySelector(`[id="${key}_license"].required`)) {
            if(licenseInfo.individual_yn === 'y' && key === 'company_name' || licenseInfo.individual_yn === 'y' && key === 'company_name_en'){

            }else if (!value && document.querySelector(`[name="${key}"].required`)) {
                const selector = document.querySelector(`[name="${key}"].required`) 
                const tagName = document.querySelector(`[name="${key}"].required`).tagName;
                if(tagName === 'INPUT'){
                    selector.focus()
                }
                if(tagName === 'DIV'){
                    selector.classList.add('error')
                }
                return true; 
            }
            return false;
        })){
            return
        }

        document.querySelector('#payjp_checkout_box input[type="button"]').click()

        // if(!document.querySelector('input[type="hidden"][name="payjp-token"]').value){
        //     setPopup({
        //         type: 'confirm',
        //         title: '알림',
        //         description: [
        //             '카드정보를 입력해주세요.',
        //         ],
        //     })
        //     return
        // }

        // let parameter = {
        //     ...inputs,
        //     order_product_list: [{
        //         ...orderProduct
        //     }],
        //     license_info: {
        //         ...licenseInfo
        //     },
        //     pay_token: document.querySelector('input[type="hidden"][name="payjp-token"]').value
        // }
        // // console.log(parameter);

        // userApi('order/manage', '', {...parameter})
        //     .then((result)=>{
        //         // console.log(result);
        //         if(result.result){
        //             sessionStorage.setItem('buyDetail', JSON.stringify(result.data));
        //             navigate(`/buyResult?idx=${idx}`)
        //         }
        //     })

    }


    return (
        <>
            <section>
                <h2>ご購入</h2>
                {id &&
                    <div className='productBox'>
                        <figure>
                            {idx &&
                                <img src={require(`../images/${idx}.png`)} alt="" />
                            }
                            <figcaption>
                                {/* <strong>IntelliJ IDEA商業用2年</strong> */}
                                <strong>{ productInfo?.product_name } {productInfo?.option_name}</strong>
                                <p>{ productInfo?.price.toLocaleString() }円</p>
                                <div>
                                    <button
                                        onClick={()=> setOrderProduct(prev=> [...prev.map(data=>({...data, order_quantiry: data.order_quantiry >= 2 ? data.order_quantiry - 1 : data.order_quantiry}))])}
                                    >-</button>
                                    { orderProduct?.[0].order_quantiry }
                                    <button
                                        onClick={()=> setOrderProduct(prev=> [...prev.map(data=>({...data, order_quantiry: data.order_quantiry + 1}))])}
                                    >+</button>
                                </div>
                            </figcaption>
                        </figure>
                        {/* <dl className='deliveryArea'>
                            <dt>税</dt>
                            <dd>0円</dd>
                        </dl> */}
                        <dl className="amountBox">
                            <dt>合計 (税込み)</dt>
                            <dd>{ (orderProduct?.[0].order_quantiry * productInfo?.price).toLocaleString() }円</dd>
                        </dl>
                    </div>
                }

                { (orderCode && productInfo && productInfoSum) &&
                    <div className='orderArea'>
                        {productInfo.map((data, i)=>
                            <div className='productArea' key={i}>
                                <strong>{data.product_name}</strong>
                                <dl>
                                    <dt>数量</dt>
                                    <dd>{data.order_quantiry}</dd>
                                </dl>
                                <dl>
                                    <dt>金額</dt>
                                    <dd>¥ {data.total_price.toLocaleString()}</dd>
                                </dl>
                                <dl>
                                    <dt>割引</dt>
                                    <dd>¥ - {data.discount_price.toLocaleString()}</dd>
                                </dl>
                            </div>
                        )}
                        <div className='priceArea'>
                            <dl>
                                <dt>合計</dt>
                                <dd>¥ 
                                    {productInfo.reduce((accumulator, currentValue) => {
                                        return accumulator + (currentValue.order_quantiry * currentValue.total_price);
                                    }, 0).toLocaleString()}
                                </dd>
                            </dl>
                            <dl>
                                <dt>割引合計</dt>
                                <dd>¥ - {productInfoSum.discount_price.toLocaleString()}</dd>
                            </dl>
                            <dl>
                                <dt>最終決済金額(税込み)</dt>
                                <dd>¥ {productInfoSum.final_pay_price.toLocaleString()}</dd>
                            </dl>
                        </div>
                    </div>
                }
                <form>
                    <fieldset className='inputBox' onChange={(e)=>inputChange(e, setInputs)}>
                        <strong>ご注文者の情報</strong>
                        <ul>
                            <li>
                                <label htmlFor="write_name">名前</label>
                                <div>
                                    <input type="text" id='write_name' name='write_name' defaultValue={inputs?.write_name} placeholder='名前を入力してください' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="company_name">会社名</label>
                                <div>
                                    <input type="text" id='company_name' name='company_name' value={inputs?.company_name || ''} placeholder='企業名を入力してください' disabled={inputs?.individual_yn === 'y'} onChange={(e)=>inputChange(e, setInputs)} required/>
                                    <input type="checkbox" id='individual_yn' name='individual_yn' 
                                        required
                                        onChange={(e)=>{
                                            if(e.target.checked){
                                                setInputs(prev=> {
                                                    const arr = {...prev}
                                                    delete arr.company_name
                                                    return arr
                                                })
                                            }
                                        }} 
                                    />
                                    <label htmlFor="individual_yn">個人</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="contact_information">電話番号</label>
                                <div>
                                    <input type="text" id='contact_information' name='contact_information' defaultValue={inputs?.contact_information} placeholder='電話番号を入力してください' required/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="email">メール</label>
                                <div>
                                    <input type="text" id='email' name='email' defaultValue={inputs?.email} placeholder='メールを入力してください' required/>
                                </div>
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset className='inputBox' onChange={(e)=>inputChange(e, setLicenseInfo)}>
                        <strong>ライセンスユーザーの情報</strong>
                        <div className='sameArea'>
                            <input type="checkbox" id='same' name='same' onChange={onSame} ref={sameRef}
                                disabled={
                                    (!inputs?.write_name ||
                                    !((inputs?.individual_yn === 'y') || (inputs?.company_name && inputs?.individual_yn === 'n')) ||
                                    !inputs?.contact_information ||
                                    !inputs?.email)
                                }
                            />
                            <label htmlFor="same">注文者と同一</label>
                        </div>
                        <ul>
                            <li>
                                <label htmlFor="write_name_license">名前</label>
                                <div>
                                    <input type="text" id='write_name_license' name='write_name' placeholder='名前を入力してください' value={licenseInfo?.write_name || ''} onChange={(e)=>inputChange(e, setLicenseInfo)} disabled={sameRef?.current?.checked} className='required'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="write_name_en_license">名前(英語)</label>
                                <div>
                                    <input type="text" id='write_name_en_license' name='write_name_en' placeholder='名前(英語)を入力してください' className='required'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="company_name_license">会社名</label>
                                <div>
                                    <input type="text" id='company_name_license' name='company_name' placeholder='会社名を入力してください' value={licenseInfo?.company_name || ''} onChange={(e)=>inputChange(e, setLicenseInfo)} disabled={sameRef?.current?.checked || licenseInfo?.individual_yn === 'y'} className='required'/>
                                    <input type="checkbox" name='individual_yn' id='individual_yn_license' 
                                        checked={licenseInfo?.individual_yn === 'y'} 
                                        onClick={(e)=>setLicenseInfo(prev=>{
                                            const arr = {...prev, individual_yn_license: e.target.checked ? 'y' : 'n'}
                                            if(e.target.checked){
                                                delete arr.company_name
                                                delete arr.company_name_en
                                            }else{
                                                arr.company_name = ''
                                                arr.company_name_en = ''
                                            }
                                            return arr
                                        })}
                                        onChange={(e)=>{
                                            inputChange(e, setLicenseInfo)
                                        }} 
                                        disabled={sameRef?.current?.checked}/>
                                    <label htmlFor="individual_yn_license">個人</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="company_name_en_license">会社名(英語)</label>
                                <div>
                                    <input type="text" id='company_name_en_license' name='company_name_en' placeholder='会社名(英語)を入力してください' value={licenseInfo?.company_name_en || ''} onChange={(e)=>inputChange(e, setLicenseInfo)} disabled={licenseInfo?.individual_yn === 'y'} className='required'/>
                                    {/* <input type="checkbox" />
                                    <label htmlFor="">個人</label> */}
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">郵便番号</label>
                                <div>
                                    <input type="text" name='post_code' placeholder='郵便番号検索' value={licenseInfo?.post_code || ''} onChange={handlePostalCodeChange} className='required'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">住所</label>
                                <div>
                                    <Select set={setLicenseInfo} list={addresList} name='address' firstText={licenseInfo?.address} placeholder='住所を入力してください' className='required'/>
                                </div>
                                <div>
                                    <input type="text" name='address_detail' placeholder='残りの住所を入力してください' value={licenseInfo?.address_detail || ''} onChange={(e)=>inputChange(e, setLicenseInfo)} className='required'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">住所(英語)</label>
                                <div>
                                    <Select set={setLicenseInfo} list={addresEnList} name='address_en' placeholder='住所(英語)を入力してください' className='required'/>
                                </div>
                                <div>
                                    <input type="text" name='address_detail_en' placeholder='残りの住所(英語)を入力してください' value={licenseInfo?.address_detail_en || ''} onChange={(e)=>inputChange(e, setLicenseInfo)} className='required'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="email">メール</label>
                                <div>
                                    <input type="text" id='email' name='email' placeholder='メールを入力してください' value={licenseInfo?.email || ''} onChange={(e)=>inputChange(e, setLicenseInfo)} disabled={sameRef?.current?.checked} className='required'/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="comment">要求事項</label>
                                <div>
                                    <textarea name="comment" id="comment" onChange={(e)=>inputChange(e, setInputs)}></textarea>
                                </div>
                            </li>
                        </ul>
                    </fieldset>
                    {/* <fieldset className='inputArea'>
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
                                <div>
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
                                </div>
                            </li>
                        </ul>
                    </fieldset> */}
                    <div className='payjsArea'>

                    </div>
                    {/* <fieldset className='inputArea'>
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
                    </fieldset> */}
                    <dl className="amountBox">
                        <dt>最終決済金額</dt>
                        <dd>
                            { id && (orderProduct?.[0].order_quantiry * productInfo?.price).toLocaleString() }
                            {orderCode && (productInfoSum?.final_pay_price)}
                        円</dd>
                    </dl>
                    <div className='submitBox'>
                        {/* <input type="reset" className='btn-border-black' value='キャンセル'/> */}
                        <Link to='/' className='btn-border-black'>キャンセル</Link>
                        <input type="submit" className='btn-bg' value='決済する' onClick={onSubmit}/>
                    </div>
                </form>
            </section>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
            { isLoading && <Loading /> }
        </>
    );
}

