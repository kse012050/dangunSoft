import React, { useEffect, useLayoutEffect, useState } from 'react';
import SelectBox from '../../components/SelectBox';
import { adminApi } from '../../api/api';

export default function Product({ data }) {
    const [inputs, setInputs] = useState({...data})
    const [firstText, setFirstText] = useState({option_price_type: data.option_price_type})
    const [vendors, setVendors] = useState();
    const [products, setProducts] = useState();
    const [options, setOptions] = useState()
    const [optionPrices, setOptionPrices] = useState()
    // console.log(data);

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
        
        if(inputs.vendor_id && products?.list){
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
    },[inputs.vendor_id, vendors, products?.list])

    useEffect(()=>{
        if(inputs.product_id && products){
            setFirstText(prev=>({
                ...prev,
                product_id: products.list.filter((data)=>data.product_id === inputs.product_id)[0]?.product_name
            }))
            setOptions({
                text: products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList.map(data => data.option_name),
                value: products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList.map(data => data.product_option_id),
                list: products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList
            })
        }
    },[inputs.product_id, products])

    useEffect(()=>{
        if(inputs?.product_option_id && options){
            setFirstText(prev=>({
                ...prev,
                product_option_id: products.list.filter(data=> data.product_id === inputs.product_id)?.[0]?.optionList.filter(data=> data.product_option_id === inputs.product_option_id)?.[0]?.option_name
            }))
            setOptionPrices({
                text: options.list.filter(data=> data.product_option_id === inputs.product_option_id)?.[0]?.optionPriceList.map(data=> data.price_type),
                value: options.list.filter(data=> data.product_option_id === inputs.product_option_id)?.[0]?.optionPriceList.map(data=> data.option_price_id),
                list: options.list.filter(data=> data.product_option_id === inputs.product_option_id)?.[0]?.optionPriceList,
            })
            setInputs(prev=>({...prev, order_quantiry: '1'}))
        }
    },[inputs?.product_option_id, inputs.product_id, options])

    useEffect(()=>{
        if(inputs?.option_price_id && optionPrices){
            console.log(optionPrices);
            setFirstText(prev=>({
                ...prev,
                option_price_id: optionPrices.list.filter(data=> data.product_option_id === inputs.product_option_id)[0].option_name
            }))
            // setInputs(prev=>({...prev, final_pay_price: optionPrices.filter(data=>data.option_price_id === inputs.option_price_id)[0].}))
        }
    },[inputs?.option_price_id])

    // useLayoutEffect(()=>{
    //     if(inputs?.vendor_id){
    //         adminApi('product', '', {all_yn: 'y'})
    //             .then((result)=>{
    //                 // console.log(result);
    //                 if(result.result){
    //                     console.log(result.list.filter((data)=>data.vendor_id === inputs.vendor_id));
    //                     setProducts({
    //                         text: result.list.filter((data)=>data.vendor_id === inputs.vendor_id).map((data)=>data.product_name),
    //                         value: result.list.filter((data)=>data.vendor_id === inputs.vendor_id).map((data)=>data.product_id)
    //                     })
    //                     setFirstText({
    //                         product_id: result.list.filter((data)=>data.product_id === inputs.product_id)[0]?.product_name
    //                     })
    //                 }
    //             })
    //     }
    // },[inputs?.vendor_id, inputs.product_id])


    return (
        <>
            <span onClick={()=>console.log(inputs)}>제품1</span>
            <div>
                <SelectBox text={vendors?.text} value={vendors?.value} setInputs={setInputs} firstText={firstText?.vendor_id} name='vendor_id' placeholder='벤더사를 선택해주세요.'/>
            </div>
            <div>
                <SelectBox text={products?.text} value={products?.value} setInputs={setInputs} firstText={firstText?.product_id} name='product_id' placeholder='제품을 선택해주세요.'/>
            </div>
            <div>
                <SelectBox text={options?.text} value={options?.value} setInputs={setInputs} firstText={firstText?.product_option_id} name='product_option_id' placeholder='옵션을 선택해주세요.'/>
            </div>
            <div>
                <input type="number" defaultValue={inputs?.order_quantiry} min='1'/>
            </div>
            <div>
                <SelectBox text={optionPrices?.text} value={optionPrices?.value} setInputs={setInputs} firstText={firstText?.option_price_type} name='option_price_id' placeholder='구독옵션을 선택해주세요.'/>
            </div>
            <p>{inputs?.final_pay_price}</p>
            <div>
                <input type="text" value={inputs?.order_quantiry * inputs?.final_pay_price || ''} readOnly/>
            </div>
            <div>
                <button className='btn-point-border'>삭제</button>
            </div>
        </>
    );
}

