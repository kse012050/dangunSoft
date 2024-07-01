import React, { useEffect, useLayoutEffect, useState } from 'react';
import SelectBox from './SelectBox';
import { adminApi } from '../../api/api';
import { inputChange } from '../../api/validation';

export default function Product({ data, productList, setProductList, productIdx }) {
    const [inputs, setInputs] = useState()
    const [firstText, setFirstText] = useState({option_price_type: data.option_price_type})
    const [vendors, setVendors] = useState();
    const [products, setProducts] = useState();
    const [options, setOptions] = useState()
    const [optionPrices, setOptionPrices] = useState()
    // console.log(data);

    useEffect(()=>{
        setInputs({...data})
    },[productList.length])
    useLayoutEffect(()=>{
        // console.log(inputs);
        adminApi('vendor', '', {all_yn: 'y'})
            .then((result)=>{
                if(result.result){
                    setVendors({
                        text: result.list.map((data)=>data.vendor_name),
                        value: result.list.map((data)=>data.vendor_id),
                        list: result.list
                    })
                }
            })

        adminApi('product', '', {all_yn: 'y', detail_yn: 'y'})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setProducts({
                        list: result.list
                    })
                }
            })
    },[])

    useEffect(()=>{
        if(vendors){
            setFirstText({
                vendor_id: vendors.list.filter((data)=>data.vendor_id === inputs.vendor_id)[0]?.vendor_name
            })
            
        }
        
        if(inputs?.vendor_id && products?.list){
            // console.log(inputs.vendor_id);
            setFirstText({
                vendor_id: vendors.list.filter((data)=>data.vendor_id === inputs.vendor_id)[0]?.vendor_name
            })
            setProducts((prev)=>({
                ...prev,
                text: prev.list.filter((data)=>data.vendor_id === inputs.vendor_id).map((data)=>data.product_name),
                value: prev.list.filter((data)=>data.vendor_id === inputs.vendor_id).map((data)=>data.product_id)
            }))
        }
    },[inputs?.vendor_id, vendors, products?.list])

    useEffect(()=>{
        if(inputs?.product_id && products){
            if(products.list.filter(data=> data.product_id === inputs.product_id).length){
                setFirstText(prev=>({
                    vendor_id: prev.vendor_id,
                    product_id: products.list.filter((data)=>data.product_id === inputs.product_id)[0]?.product_name,
                }))
                setOptions({
                    text: products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList.map(data => data.option_name),
                    value: products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList.map(data => data.product_option_id),
                    list: products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList
                })
            }else{

            }
        }
    },[inputs?.product_id, products])

    useEffect(()=>{
        if(inputs?.product_option_id && options){
            if(products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList.filter(data=> data.product_option_id === inputs.product_option_id).length){
                setFirstText(prev=>({
                    ...prev,
                    product_option_id: products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList.filter(data=> data.product_option_id === inputs.product_option_id)?.[0]?.option_name
                }))
                setOptionPrices({
                    text: options.list.filter(data=> data.product_option_id === inputs.product_option_id)?.[0]?.optionPriceList.map(data=> data.price_type),
                    value: options.list.filter(data=> data.product_option_id === inputs.product_option_id)?.[0]?.optionPriceList.map(data=> data.option_price_id),
                    list: options.list.filter(data=> data.product_option_id === inputs.product_option_id)?.[0]?.optionPriceList,
                })
                if(!inputs?.order_quantiry){
                    setInputs(prev=>({...prev, order_quantiry: '1'}))
                }
            }else{
                setFirstText(prev=>({
                    ...prev,
                    product_option_id: ''
                }))
                setInputs(prev=>({...prev, product_option_id: ''}))
            }
        }
    },[inputs?.product_option_id, inputs?.product_id, options])

    useEffect(()=>{
        if((inputs?.option_price_id) && optionPrices){
                // console.log(optionPrices.list.filter(data=> data.option_price_id === inputs.option_price_id )?.[0]);
                setFirstText(prev=>({
                    ...prev,
                    option_price_id: optionPrices.list.filter(data=> data.option_price_id === inputs.option_price_id )?.[0]?.price_type
                }))
                setInputs(prev=>({
                    ...prev,
                    option_price_id: optionPrices.list.filter(data=> data.option_price_id === inputs.option_price_id )?.[0]?.option_price_id,
                    total_price: optionPrices.list.filter(data=> data.option_price_id === inputs.option_price_id )?.[0]?.vat_include_price
                    // total_price: optionPrices.list.filter(data=> data.option_price_id === inputs.option_price_id )?.[0]?.vat_include_price
                }))
        }
    },[inputs?.option_price_id, inputs?.option_price_type, optionPrices])

    useEffect(()=>{
        if(String(inputs?.total_price) && inputs?.order_quantiry){
            setInputs(prev=>({...prev, final_pay_price: inputs?.total_price * inputs?.order_quantiry}))
        }
    },[inputs?.total_price, inputs?.order_quantiry])

    useEffect(()=>{
        setProductList(prev=>{
            const arr = [...prev]
            arr[productIdx] = {...inputs}
            return arr
        })
    },[inputs])

    return (
        <>
            <span /* onClick={()=>console.log(inputs)} */>제품</span>
            <div>
                <SelectBox text={vendors?.text} value={vendors?.value} setInputs={setInputs} firstText={firstText?.vendor_id} name='vendor_id' placeholder='벤더사를 선택해주세요.'/>
            </div>
            <div>
                <SelectBox text={products?.text} value={products?.value} setInputs={setInputs} firstText={firstText?.product_id} name='product_id' placeholder='제품을 선택해주세요.' disabled={!inputs?.vendor_id || !products}/>
            </div>
            <div>
                <SelectBox text={options?.text} value={options?.value} setInputs={setInputs} firstText={firstText?.product_option_id} name='product_option_id' placeholder='옵션을 선택해주세요.' disabled={!inputs?.product_id || !options}/>
            </div>
            <div>
                <input type="number" defaultValue={inputs?.order_quantiry} min='1' onChange={(e)=>setInputs(prev=>({...prev, order_quantiry: e.target.value}))} disabled={!inputs?.product_option_id || !optionPrices}/>
            </div>
            <div>
                <SelectBox text={optionPrices?.text} value={optionPrices?.value} setInputs={setInputs} firstText={firstText?.option_price_id} name='option_price_id' placeholder='구독옵션을 선택해주세요.' disabled={!inputs?.product_option_id || !optionPrices}/>
            </div>
            <div>
                <input type="text" value={(inputs?.total_price * inputs?.order_quantiry) || '0'} name='total_price' onChange={(e)=>inputChange(e, setInputs)} disabled={!inputs?.option_price_id || !optionPrices}/>
            </div>
            <div>
                <input type="text" value={inputs?.final_pay_price || '0'} name='final_pay_price' onChange={(e)=>inputChange(e, setInputs)} disabled={!inputs?.option_price_id || !optionPrices}/>
            </div>
            <div>
                {productList.length !== 1 &&
                    <button className='btn-point-border'
                        onClick={()=>{
                            setProductList(prev=> prev.filter((_, i)=> i !== productIdx))
                        }}
                    >삭제</button>
                }
            </div>
        </>
    );
}

