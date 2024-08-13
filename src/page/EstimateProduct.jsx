import React, { useEffect, useId, useLayoutEffect, useState } from 'react';
import Select from '../components/Select';
import { userApi } from '../api/api';

export default function EstimateProduct({ productData, products, setProducts, productIdx, orderProductList, id }) {
    const uuid = useId()
    const [inputs, setInputs] = useState()
    const [firstText, setFirstText] = useState()
    const [vender, setVender] = useState()
    const [product, setProduct] = useState()
    const [option, setOption] = useState()
    const [optionPrice, setOptionPrice] = useState()
    const [dataChange, setDataChange] = useState(!id)
    useEffect(()=>{
        setInputs({...productData})
    },[products.length, productData])

    useLayoutEffect(()=>{
            userApi('vendor')
                .then((result)=>{
                    if(result.result){
                        setVender({
                            list: result.list.map((data)=> data.vendor_name),
                            value: result.list.map((data)=> data.vendor_id)
                        })

                        if(result.list.length === 1){
                            setInputs(prev=>({...prev, vendor_id: result.list[0].vendor_id}))
                            setFirstText(prev=>({...prev, vendor_id: result.list[0].vendor_name}))
                        }else if(dataChange){
                            setInputs({vendor_id: result.list[0].vendor_id})
                            setFirstText({vendor_id: result.list[0].vendor_name})

                        }
                    }
                })
    },[dataChange, id])

    useEffect(()=>{
        if(inputs?.vendor_id){
            userApi('product', '', {vendor_id: inputs.vendor_id})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setProduct({
                            list: result.list.map((data)=> data.product_name),
                            value: result.list.map((data)=> data.product_id),
                            data: result.list
                        })
                        if(dataChange){
                            setInputs((prev)=>({...prev, product_id: ''}))
                            setFirstText((prev)=>({...prev, product_id: ''}))
                        }else{
                            setFirstText((prev)=>({...prev, product_id: result.list.filter(data=>data.product_id === prev.product_id)?.[0]?.product_name}))
                        }
                    }
                })
        }
    },[inputs?.vendor_id, dataChange])

    useEffect(()=>{
        if(inputs?.product_id && product){
            // console.log(inputs?.product_id);
            
            setOption({
                list: product?.data.filter((data)=> data?.product_id === inputs.product_id)[0]?.optionList?.map((data)=> data?.option_name),
                value: product?.data.filter((data)=> data?.product_id === inputs.product_id)[0]?.optionList?.map((data)=> data?.product_option_id),
                data: product?.data.filter((data)=> data?.product_id === inputs.product_id)[0]?.optionList
            })

            if(dataChange){
                setInputs((prev)=>({...prev, product_option_id: '', order_quantiry: ''}))
                setOptionPrice()
            }else{
                setFirstText((prev)=>({
                    ...prev, 
                    product_id: product.data.filter(data=>data.product_id === inputs.product_id)?.[0]?.product_name,
                    product_option_id: '', 
                    order_quantiry: ''
                }))
            }
        }else{
            setInputs((prev)=>({...prev, product_option_id: '', order_quantiry: '', option_price_id: ''}))
        }
    },[inputs?.product_id, product, dataChange])

    useEffect(()=>{
        if(inputs?.product_option_id && option){
            setInputs((prev)=>({
                ...prev,
                order_quantiry: option?.data.filter(data=> data?.product_option_id === inputs?.product_option_id)?.[0]?.minimum_quantiry,
                option_price_id: option?.data.filter(data=> data?.product_option_id === inputs?.product_option_id)?.[0]?.optionPriceList[0].option_price_id
            }))
            setOptionPrice(option?.data.filter(data=>data?.product_option_id === inputs.product_option_id)?.[0]?.optionPriceList)
            if(!dataChange){
                setFirstText((prev)=>({
                    ...prev, 
                    product_option_id: option.data.filter(data=>data.product_option_id === inputs?.product_option_id)[0]?.option_name, 
                }))
                // setDataChange(prev=>!prev)
            }
        }else{
            setFirstText((prev)=>({
                ...prev, 
                product_option_id: ''
            }))
        }
    },[inputs?.product_option_id, option, dataChange])

    const productChange = (e) =>{
        const { name, value } = e.target
        setInputs((prev)=>({...prev, [name]: value}))
    }

    useEffect(()=>{
        setProducts(prev=>{
            const arr = prev
            arr[productIdx] = inputs
            return arr
        })
        // console.log(inputs);
    },[inputs, productIdx, setProducts, firstText])

    return (
        <fieldset className='inputBox-product' onChange={(e)=>e.stopPropagation()}>
            <ul>
                <li>
                    <label htmlFor="" /* onClick={()=>console.log(inputs)} */>メーカー</label>
                    <div>
                        <Select placeholder="メーカー選択" list={vender?.list} value={vender?.value} firstText={firstText?.vendor_id} setInputs={setInputs} setFirstText={setFirstText} name='vendor_id'/>
                    </div>
                </li>
                <li>
                    <label htmlFor="" /* onClick={()=>console.log(firstText)} */>製品</label>
                    <div>
                        <div>
                            <Select placeholder="製品選択" list={product?.list} value={product?.value} firstText={firstText?.product_id} setInputs={setInputs} setFirstText={setFirstText} name='product_id' disabled={!inputs?.vendor_id || !product} key={inputs?.vendor_id || products.length} />
                        </div>
                    </div>
                </li>
                <li className='half'>
                    <label htmlFor="">オプション</label>
                    <div>
                        <div>
                            <Select placeholder="選択" list={option?.list} value={option?.value} firstText={firstText?.product_option_id} setInputs={setInputs} setFirstText={setFirstText} name='product_option_id'  disabled={!inputs?.product_id || !option} key={inputs?.product_id || products.length}/>
                        </div>
                    </div>
                </li>
                <li className='half'>
                    <label htmlFor="order_quantiry">数量</label>
                    <div>
                        <input type="number" min='1' name='order_quantiry' id='order_quantiry' disabled={!inputs?.product_option_id} value={inputs?.order_quantiry || ''} onChange={productChange}/>
                    </div>
                </li>
                <li>
                    <label htmlFor="" /* onClick={()=>console.log(optionPrice)} */>サブスクリプション·オプション</label>
                    <div>
                        {optionPrice && optionPrice.map((data, i)=>
                            <React.Fragment key={data.option_price_id}>
                                <input type="radio" name={`option_price_id_${uuid}`} id={`optionPrice_${uuid}_${data.option_price_id}`} value={data.option_price_id} defaultChecked={i === 0} onChange={productChange}/>
                                <label htmlFor={`optionPrice_${uuid}_${data.option_price_id}`}>
                                    {data.price_type === '신규' && '新規'}
                                    {data.price_type === '갱신' && '更新'}
                                    {data.price_type === '업데이트' && 'アップグレード'}
                                </label>
                            </React.Fragment>
                        )}
                    </div>
                </li>
            </ul>
            <div>
                {products.length === (productIdx + 1) && 
                    <button type='button' className={(!inputs?.order_quantiry) ? 'disabled' : ''}
                            onClick={()=>{
                                if(inputs?.order_quantiry){
                                    setProducts(prev=>[...prev, {...orderProductList}])
                                }
                            }}
                        >+ 製品追加</button>
                }
                {!id && products.length > 1 && 
                    <button type='button'
                        onClick={()=>{
                            setProducts(prev=> [...prev.filter((_, i)=> i !== productIdx)])
                            setDataChange(false)
                        }}   
                    >- 削除</button>
                }
            </div>
        </fieldset>
    );
}

