import React, { useEffect, useId, useLayoutEffect, useState } from 'react';
import Select from '../components/Select';
import { userApi } from '../api/api';

export default function EstimateProduct({ orderProductList, products, setProducts, productIdx}) {
    const uuid = useId()
    const [vender, setVender] = useState()
    const [product, setProduct] = useState()
    const [option, setOption] = useState()

    useLayoutEffect(()=>{
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
        if(products[productIdx].vendor_id){
            userApi('product', '', {vendor_id: products[productIdx].vendor_id})
                .then((result)=>{
                    console.log(result);
                    if(result.result){
                        setProduct({
                            list: result.list.map((data)=> data.product_name),
                            value: result.list.map((data)=> data.product_id),
                            data: result.list
                        })
                    }
                })
        }
    },[products[productIdx].vendor_id])

    useEffect(()=>{
        if(products[productIdx].product_id){
            // console.log(product.data);
            setOption({
                list: product.data.filter((data)=> data.product_id === products[productIdx].product_id)[0].optionList.map((data)=> data.option_name),
                value: product.data.filter((data)=> data.product_id === products[productIdx].product_id)[0].optionList.map((data)=> data.product_option_id),
            })
        }
    },[products[productIdx].product_id])

    useEffect(()=>{
        if(products[productIdx].product_option_id){
            setProducts((prev)=>{
                const arr = [...prev]
                arr[productIdx].order_quantiry = 1
                return arr
            })
        }
    },[products[productIdx].product_option_id])

    const productChange = (e) =>{
        const { name, value } = e.target
        products[productIdx][name] = value
    }

    return (
        <fieldset className='inputBox-product' onChange={(e)=>e.stopPropagation()}>
            <ul>
                <li>
                    <label htmlFor="">メーカー</label>
                    <div>
                        <Select placeholder="メーカー選択" list={vender?.list} value={vender?.value} setProducts={setProducts} productIdx={productIdx} name='vendor_id'/>
                    </div>
                </li>
                <li>
                    <label htmlFor="">製品</label>
                    <div>
                        <div>
                            <Select placeholder="製品選択" list={product?.list} value={product?.value} setProducts={setProducts} productIdx={productIdx} name='product_id' disabled={!products[productIdx].vendor_id} key={products[productIdx].vendor_id}/>
                        </div>
                    </div>
                </li>
                <li className='half'>
                    <label htmlFor="">オプション</label>
                    <div>
                        <div>
                            <Select placeholder="選択" list={option?.list} value={option?.value} setProducts={setProducts} productIdx={productIdx} name='product_option_id'  disabled={!products[productIdx].product_id} key={products[productIdx].product_id}/>
                        </div>
                    </div>
                </li>
                <li className='half'>
                    <label htmlFor="order_quantiry">数量</label>
                    <div>
                        <input type="number" min='1' name='order_quantiry' id='order_quantiry' disabled={!products[productIdx].product_option_id} defaultValue={products[productIdx].product_option_id ? '1' : ''} onChange={productChange}/>
                    </div>
                    {/* { test01 && 
                        <small>{ test01 }</small>
                    } */}
                </li>
                <li>
                    <label htmlFor="">サブスクリプション·オプション</label>
                    <div>
                        <input type="radio" name={`test_${uuid}`} id={`test01_${uuid}`} defaultChecked={true}/>
                        <label htmlFor={`test01_${uuid}`}>新規</label>
                        <input type="radio" name={`test_${uuid}`} id={`test02_${uuid}`}/>
                        <label htmlFor={`test02_${uuid}`}>更新</label>
                        <input type="radio" name={`test_${uuid}`} id={`test03_${uuid}`}/>
                        <label htmlFor={`test03_${uuid}`}>アップグレード</label>
                    </div>
                </li>
            </ul>
            <div>
                { products.length - 1 === productIdx &&
                    <button type='button'
                        onClick={()=>setProducts(prev=>[...prev, {...orderProductList}])}
                    >+ 製品追加</button>
                }
                { products.length > 1 &&
                    <button type='button'
                        onClick={()=>setProducts(prev=> prev.filter((_, i)=> i !== productIdx))}   
                    >- 削除</button>
                }
            </div>
        </fieldset>
    );
}

