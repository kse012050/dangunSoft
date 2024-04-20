import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { tab, list } from '../js/faq'
import { urlParams } from '../js/common'


export default function FAQ() {
    const navigation = useNavigate()
    const [tabActive, setTabActive] = useState(tab()[0])
    const tabList = tab()
    const { search, page } = urlParams(useLocation())
    const {totalCount} = list(search, page)
    const [faqList, setFaqList] = useState(list(search, page).faqList)
    const pageInfo = {
        totalPage: parseInt(totalCount / 10) + 1,
        // totalPage: 12,
        currentPage: parseInt(page) || 1,
    }
    pageInfo.test = (index) =>  index + 1 + parseInt((pageInfo.currentPage - 1) / 5) *  5;

    // console.log(totalCount);

    const searchRef = useRef()

    useEffect(()=>{
        setFaqList(list(search, page).faqList)
    },[search, page])

    const onSearch = () => {
        navigation(`?search=${searchRef.current.value}`)
    }

    const onTabClick = (data) => {
        setTabActive(data)
        searchRef.current.value = data
        navigation(`?search=${data}`)
    }
    
    return (
        <section>
            <h2>FAQ</h2>
            <p>키워드를 검색하고 자주 묻는 질문을 확인하세요.</p>
            <div className='searchBox'>
                <input type="search" placeholder='ex) 라이선싱 모델 개요' ref={searchRef}/>
                <button onClick={onSearch}>검색</button>
                {/* { searchRef.current?.value &&
                    <button>검색 지우기</button>
                } */}
            </div>
            <div className='tabArea'>
                {tabList.map((data, i)=>
                    <button 
                        key={i}
                        className={tabActive === data ? 'active' : ''} 
                        onClick={()=>onTabClick(data)}
                    >{ data }</button>
                )}
                {/* <button className='active'>전체</button>
                <button>구매</button>
                <button>지원</button>
                <button>라이선싱 모델 개요</button>
                <button>JetBrains 계정 도움말</button>
                <button>관리자 가이드</button>
                <button>기타</button> */}
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
                                                {(type === 'title' &&
                                                    <strong>{ detail }</strong>
                                                )}
                                                {(type === 'img' &&
                                                    <img src={require(`../images/faq/${detail}.png`)} alt="" />
                                                )}
                                                {(type === 'video' &&
                                                    <iframe src={detail} frameborder="0" title='test'></iframe>
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

