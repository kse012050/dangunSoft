import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { tab, list } from '../../js/faq'
import { urlParams } from '../../js/common'


export default function FAQ() {
    const navigation = useNavigate()
    const { search, page } = urlParams(useLocation())
    const tabList = tab()
    const {totalCount} = list(search, page)
    const [faqList, setFaqList] = useState(list(search, page).faqList)
    const pageInfo = {
        totalPage: Number.isInteger(totalCount / 10) ? parseInt(totalCount / 10) : parseInt(totalCount / 10) + 1,
        // totalPage: 12,
        currentPage: parseInt(page) || 1,
    }
    pageInfo.test = (index) =>  index + 1 + parseInt((pageInfo.currentPage - 1) / 5) *  5;
    const [searchValue, setSearchValue] = useState()


    useEffect(()=>{
        setFaqList(list(search, page).faqList)
    },[search, page])

    const onSearch = () => {
        navigation(`?search=${searchValue}`)
    }
    const onSearchReset = () => {
        navigation(``)
        setSearchValue('')
    }

    const onTabClick = (data) => {
        setSearchValue(data)
        navigation(`?search=${data}`)
    }
    
    return (
        <section>
            <h2>FAQ</h2>
            <p>キーワードを検索して、よくある質問を確認してください。</p>
            <div className='searchBox'>
                <input type="search" placeholder='ex) ライセンシングモデルの概要' onChange={(e)=>setSearchValue(e.target.value)} defaultValue={searchValue}/>
                <button onClick={onSearch}>검색</button>
                { searchValue &&
                    <button onClick={onSearchReset}>검색 지우기</button>
                }
            </div>
            <div className='tabArea'>
                {tabList.map((data, i)=>
                    <button 
                        key={i}
                        className={searchValue === data ? 'active' : ''} 
                        onClick={()=>onTabClick(data)}
                    >{ data }</button>
                )}
            </div>

            {faqList.map(({type, list}, i)=>
                <Fragment key={i}>
                    <strong>{ type }</strong>
                    <ul className='FAQBox'>
                        {list.map(({title, description}, i)=>
                            <li key={i}>
                                <details>
                                    <summary>Q.{ title }</summary>
                                    <div>
                                        {description.map(({type, detail}, i)=>
                                            <Fragment key={i}>
                                                {(type === 'title' &&
                                                    <strong>{ detail }</strong>
                                                )}
                                                {(type === 'text' &&
                                                    <p>{ detail }</p>
                                                )}
                                                {(type === 'link' &&
                                                    <Link to={detail.link}>{ detail.text }</Link>
                                                )}
                                                {(type === 'list' &&
                                                    <ul>
                                                        { detail.map((data, i)=><li key={i}>{ data }</li>) }
                                                    </ul>
                                                )}
                                                {(type === 'table' &&
                                                    <div className="purchaseBox2">
                                                        <table>
                                                            <thead>
                                                                {detail.title.map((data, i)=>
                                                                    <tr key={i}>
                                                                        {data.map((data, i)=>
                                                                            <th key={i} colSpan={data?.col ? data.col: 1} rowSpan={data?.row ? data.row : 1}>{ data.text }</th>
                                                                        )}
                                                                    </tr>
                                                                )}
                                                            </thead>
                                                            <tbody>
                                                                {detail.details.map((data, i)=>
                                                                    <tr key={i}>
                                                                        {data.map((data, i)=>
                                                                            <td 
                                                                                key={i}
                                                                                colSpan={data?.col ? data.col: 1}
                                                                                rowSpan={data?.row ? data.row : 1}
                                                                                title={data.include ? '포함' : ''}
                                                                            >{ data.text }</td>
                                                                        )}
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                                {(type === 'img' &&
                                                    <img src={require(`../../images/${detail}.png`)} alt="" />
                                                )}
                                                {(type === 'video' &&
                                                    <iframe src={detail} title='test'></iframe>
                                                )}
                                            </Fragment>
                                        )}
                                    </div>
                                </details>
                            </li>
                        )}
                    </ul>
                </Fragment>
            )}

            { (totalCount > 10) &&
                <div className='paginationBox'>
                    <Link 
                        to={`${search ? `?search=` + search : ''}?page=${pageInfo.currentPage - 1}`}
                        className={pageInfo.currentPage <= 1 ? 'unActive' : ''}
                        >이전</Link>
                    <ol>
                        {Array.from({ length: 5 }).map((_, index) => 
                            pageInfo.totalPage >= pageInfo.test(index) &&
                                <li key={index}>
                                    <Link 
                                        to={`${search ? `?search=` + search : ''}?page=${pageInfo.test(index)}`}
                                        className={pageInfo.currentPage === pageInfo.test(index) ? 'active' : ''}
                                    >
                                        { pageInfo.test(index) }
                                    </Link>
                                </li>
                        )}
                    </ol>
                    <Link 
                        to={`${search ? `?search=` + search : ''}?page=${pageInfo.currentPage + 1}`}
                        className={pageInfo.totalPage <= pageInfo.currentPage ? 'unActive' : ''}
                        >다음</Link>
                </div>
            }
        </section>
    );
}

