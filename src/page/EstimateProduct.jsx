import React, { Fragment, useEffect, useId, useLayoutEffect, useState } from 'react';
import Select from '../components/Select';
import { userApi } from '../api/api';

export default function EstimateProduct({ orderProductList, products, setProducts, firstTextList, firstTexts, setFirstTexts, productIdx}) {
    const uuid = useId()
    const [inputs, setInputs] = useState({...orderProductList})
    const [firstText, setFirstText] = useState({...firstTextList})
    const [vender, setVender] = useState()
    const [product, setProduct] = useState()
    const [option, setOption] = useState()
    const [optionPrice, setOptionPrice] = useState()
    if(productIdx === 1){
        // console.log(products?.[productIdx]);
    }

    useLayoutEffect(()=>{
        // setInputs(prev=> !prev ? {...orderProductList} : {...prev})
        userApi('vendor')
            .then((result)=>{
                if(result.result){
                    setVender({
                        list: result.list.map((data)=> data.vendor_name),
                        value: result.list.map((data)=> data.vendor_id)
                    })
                }
            })
    },[])

    useEffect(()=>{
        setInputs(!products?.[productIdx] ? {...orderProductList} : {...products[productIdx]})
        setFirstText(!firstTexts?.[productIdx] ? {...firstTextList} : {...firstTexts[productIdx]})
    },[products.length])

    useEffect(()=>{
        if(inputs?.vendor_id){
            userApi('product', '', {vendor_id: inputs.vendor_id})
                .then((result)=>{
                    console.log(result);
                    if(result.result){
                        setProduct({
                            list: result.list.map((data)=> data.product_name),
                            value: result.list.map((data)=> data.product_id),
                            data: result.list
                        })

                        setInputs((prev)=>({...prev, product_id: ''}))
                        setFirstText((prev)=>({...prev, product_id: ''}))
                    }
                })
        }
    },[inputs?.vendor_id])

    useEffect(()=>{
        if(inputs?.product_id){
            // console.log(product);
            setOption({
                list: product.data.filter((data)=> data.product_id === inputs.product_id)[0]?.optionList.map((data)=> data.option_name),
                value: product.data.filter((data)=> data.product_id === inputs.product_id)[0]?.optionList.map((data)=> data.product_option_id),
                data: product.data.filter((data)=> data.product_id === inputs.product_id)[0]?.optionList
            })

            setInputs((prev)=>({...prev, product_option_id: ''}))
            setFirstText((prev)=>({...prev, product_option_id: ''}))
        }
    },[inputs?.product_id, product])

    useEffect(()=>{
        if(inputs?.product_option_id){
            setInputs((prev)=>({...prev, order_quantiry: '1'}))
            console.log(option);
            setOptionPrice(option.data.filter(data=>data.product_option_id === inputs.product_option_id)[0].optionPriceList)
        }
    },[inputs?.product_option_id])

    const productChange = (e) =>{
        const { name, value } = e.target
        setInputs((prev)=>({...prev, [name]: value}))
    }

    useEffect(()=>{
        // console.log(inputs);
        setProducts(prev=>{
            const arr = [...prev]
            arr[productIdx] = {...inputs}
            return arr
        })

        setFirstTexts(prev=>{
            const arr = [...prev]
            arr[productIdx] = {...firstText}
            return arr
        })
    },[inputs, productIdx, setProducts, firstText, setFirstTexts])

    return (
        <fieldset className='inputBox-product' onChange={(e)=>e.stopPropagation()}>
            <ul>
                <li>
                    <label htmlFor="" onClick={()=>console.log(inputs)}>メーカー</label>
                    <div>
                        <Select placeholder="メーカー選択" list={vender?.list} value={vender?.value} firstText={firstText?.vendor_id} setInputs={setInputs} setFirstText={setFirstText} name='vendor_id'/>
                    </div>
                </li>
                <li>
                    <label htmlFor="" onClick={()=>console.log(firstText)}>製品</label>
                    <div>
                        <div>
                            <Select placeholder="製品選択" list={product?.list} value={product?.value} firstText={firstText?.product_id} setInputs={setInputs} setFirstText={setFirstText} name='product_id' disabled={!inputs.vendor_id} key={inputs.vendor_id}/>
                        </div>
                    </div>
                </li>
                <li className='half'>
                    <label htmlFor="">オプション</label>
                    <div>
                        <div>
                            <Select placeholder="選択" list={option?.list} value={option?.value} firstText={firstText?.product_option_id} setInputs={setInputs} setFirstText={setFirstText} name='product_option_id'  disabled={!inputs.product_id} key={inputs.product_id}/>
                        </div>
                    </div>
                </li>
                <li className='half'>
                    <label htmlFor="order_quantiry">数量</label>
                    <div>
                        <input type="number" min='1' name='order_quantiry' id='order_quantiry' disabled={!inputs.product_option_id} value={inputs.order_quantiry} onChange={productChange}/>
                    </div>
                </li>
                <li>
                    <label htmlFor="" onClick={()=>console.log(optionPrice)}>サブスクリプション·オプション</label>
                    <div>
                        {optionPrice && optionPrice.map((data, i)=>
                            <React.Fragment key={data.option_price_id}>
                                <input type="radio" name='option_price_id' id={`optionPrice_${uuid}_${data.option_price_id}`} value={data.option_price_id} defaultChecked={i === 0} onChange={productChange}/>
                                <label htmlFor={`optionPrice_${uuid}_${data.option_price_id}`}>
                                    {data.price_type === '신규' && '新規'}
                                    {data.price_type === '갱신' && '更新'}
                                    {data.price_type === '업데이트' && 'アップグレード'}
                                </label>
                            </React.Fragment>
                        )}
                        {/* <input type="radio" name={`test_${uuid}`} id={`test01_${uuid}`} defaultChecked={true}/>
                        <label htmlFor={`test01_${uuid}`}>新規</label>
                        <input type="radio" name={`test_${uuid}`} id={`test02_${uuid}`}/>
                        <label htmlFor={`test02_${uuid}`}>更新</label>
                        <input type="radio" name={`test_${uuid}`} id={`test03_${uuid}`}/>
                        <label htmlFor={`test03_${uuid}`}>アップグレード</label> */}
                    </div>
                </li>
            </ul>
            <div>
                {products.length - 1 === productIdx &&
                    <button type='button' className={!inputs?.order_quantiry ? 'disabled' : ''}
                        onClick={()=>{
                            if(inputs?.order_quantiry){
                                setProducts(prev=>[...prev, {...orderProductList}])
                                setFirstTexts(prev=>[...prev, {...firstTextList}])
                            }
                        }}
                    >+ 製品追加</button>
                }
                { products.length > 1 &&
                    <button type='button'
                        onClick={()=>{
                            setProducts(prev=> prev.filter((_, i)=> i !== productIdx))
                            setFirstTexts(prev=> prev.filter((_, i)=> i !== productIdx))
                        }}   
                    >- 削除</button>
                }
            </div>
        </fieldset>
    );
}

