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
                <table>
                    <thead>
                        {productData.purchase.title.map((data, i)=>
                            <Fragment key={i}>
                                {data.map((data, i)=>
                                    <th key={i} colSpan={data?.col ? data.col: 1} rowSpan={data?.row ? data.row : 1}>{ data.text || 'aa' }</th>
                                )}
                            </Fragment>
                        )}
                    </thead>
                    <tbody>
                        {productData.purchase.details.map((data, i)=>
                            <Fragment key={i}>
                            {data.map((data, i)=>
                                <tr key={i} colSpan={data?.col ? data.col: 1} rowSpan={data?.row ? data.row : 1}>{ data.text || 'aa'}</tr>
                            )}
                            </Fragment>
                        )}
                    </tbody>
                </table>
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

