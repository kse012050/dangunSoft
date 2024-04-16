import React, { Fragment } from 'react';
import { iconList } from '../js/product'
import { Link, useParams } from 'react-router-dom';
import EstimateLink from '../components/EstimateLink';

export default function ProductDetail() {
    const { productIdx } = useParams()
    const productData = iconList[productIdx]
    console.log(productData);
    return (
        <>
            <section className='topArea' style={{'--styleTotal': iconList.length, '--styleIdx': productData.idx}}>
                <h2>{ productData.title }</h2>
                <p>
                    { productData.summary }
                </p>
                <EstimateLink />
            </section>

            <section className='infoArea'>
                <h3>製品概要</h3>
                <p>{ productData.info }</p>
                <ul>
                    {productData.function.map((data, i)=>
                        <li key={i}>
                            <div>
                                <strong>{ data.title }</strong>
                                <p>{ data.description }</p>
                            </div>
                        </li>
                    )}
                </ul>
            </section>

            <section className='purchaseBox-white'>
                <h3>구매 옵션</h3>
                { productData.purchase.map((data, i)=>
                    <div key={i}>
                        <b><span>{ data.title }</span></b>
                        <ul>
                            {data.details.map((detailData, i)=>
                                <li title={ detailData.title } key={i}>
                                    <span title={ detailData.include ? '포함': ''}>{ detailData.detail }</span>
                                </li>
                            )}
                            <li><span><Link to='/estimate' className='btn-border-black'>견적요청</Link></span></li>
                            <li><span><Link to='/buy' className='btn-bg'>구매하기</Link></span></li>
                        </ul>
                    </div>
                )}
            </section>

            { productData.subscribe &&
                <section className='subscribeArea'>
                    <h3>サブスクリプションオプション</h3>
                    {productData.subscribe.map((subscribeData, i)=>
                        <Fragment key={i}>
                            <strong>{ subscribeData.title }</strong>
                            <p>{ subscribeData.description }</p>
                        </Fragment>
                    )}
                </section>
            }

            <section className='FAQBox'>
                <h3>FAQ</h3>
                <ul className='FAQBox'>
                    
                    {productData.FAQ.map((faqData, i)=>
                        <li key={i}>
                            <details>
                                <summary>{ faqData.title }</summary>
                                <div>
                                    <p>{ faqData.description }</p>
                                    { faqData.list &&
                                        <ul>
                                            {faqData.list.map((faqListData, faqIdx)=>
                                                <li key={faqIdx}>{ faqListData }</li>
                                            )}
                                        </ul>
                                    }
                                </div>
                            </details>
                        </li>
                    )}
                </ul>
            </section>
        </>
    );
}

