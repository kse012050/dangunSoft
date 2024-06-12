import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tabList, iconList } from '../js/product'

export default function Product() {
    const [activeTab, setActiveTab] = useState(tabList[0].name)
    const [isSelect, setIsSelect] = useState();
    const [list, setList] = useState(iconList)

    const tabClick = (e, selectType) =>{
        setActiveTab(e.target.innerHTML)
        setIsSelect(prev => !prev)
        if(e.target.innerHTML === tabList[0].name){
            setList(iconList)
        }else{
            setList(()=>{
                return iconList.filter(({title})=>{
                    return selectType.some(item => item === title);
                })
            })
        }
    }

    return (
        <>
            <section className='welcomeArea'>
                <h2>
                    Welcome to<br/>
                    JetBrains Tool!
                </h2>
                <p>JetBrainsは、個人とチームの両方のために、さまざまなツールを提供しています。</p>
                <Link to='/estimate' className='btn-border-white'>お見積もり</Link>
            </section>

            <section className='productArea'>
                <h3>主な製品</h3>
                <div className='tabArea'>
                    <button onClick={()=>setIsSelect(prev => !prev)} className={isSelect ? 'active': ''}>{ activeTab }</button>
                    <ul className={isSelect ? 'active': ''}>
                        { tabList.map((data, i)=>
                            <li key={i}>
                                <button className={activeTab === data.name ? 'active' : ''} onClick={(e)=>tabClick(e, data.type)}>{ data.name }</button>
                            </li>
                        )}
                    </ul>
                </div>

                <ul style={{'--styleTotal': iconList.length}}>
                    { list.map((data)=>
                        <li style={{'--styleIdx': data.idx}} key={data.idx}>
                            <Link to={`/product/${data.idx}`}>
                                <img src={require(`../images/products/${data.idx}.svg`)} alt="" />
                                <b>{ data.title }</b>
                                <p>{ data.detail }</p>
                                <ul>
                                    { data.type.map((typeName, i)=>
                                        <li key={i}>{ typeName }</li>
                                    )}
                                </ul>
                            </Link>
                        </li>
                    )}
                </ul>
            </section>
        </>
    );
}

