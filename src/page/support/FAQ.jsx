import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { urlParams } from '../../js/common'
import { userApi } from '../../api/api';


export default function FAQ() {
    const navigation = useNavigate()
    const [category, setCategory] = useState()
    const [searchValue, setSearchValue] = useState()

    useLayoutEffect(()=>{
        userApi('category')
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setCategory(result.list)
                }
            })
    },[])

    

    const onSearch = () => {
        navigation(`?search=${searchValue}`)
    }
    const onSearchReset = () => {
        navigation(``)
        setSearchValue('')
    }

    
    return (
        <section>
            <h2>FAQ</h2>
            <p>キーワードを検索して、よくある質問を確認してください。</p>
            <div className='searchBox'>
                <input type="search" placeholder='ex) ライセンシングモデルの概要' onChange={(e)=>setSearchValue(e.target.value)} defaultValue={searchValue} onKeyDown={(e)=> e.key === 'Enter' && onSearch(e)}/>
                <button onClick={onSearch}>검색</button>
                { searchValue &&
                    <button onClick={onSearchReset}>검색 지우기</button>
                }
            </div>
            
            <div className='test'>
                {category && category.map((data)=>
                    <div key={data.category_id}>
                        <strong>{ data.name }</strong>
                        <List category_id={data.category_id}/>
                    </div>
                )}
            </div>
        </section>
    );
}

function List({ category_id }){
    const { search } = urlParams(useLocation())
    const [list, setList] = useState()
    useEffect(()=>{
        userApi('faq', '', {board_type: 'faq', category1: category_id, search_text: search})
            .then((result)=>{
                console.log(result.list);
                // console.log(result.list.map(data=> data.faq_list).flat());
                if(result.result){
                    setList(result.list)
                    // setList(result.list.map(data=> data.faq_list).flat())
                }
            })
    },[category_id, search])
    return (
        <>
            {list && list.map((data)=>
                <details key={data.category_id}>
                    <summary>{data.name}</summary>
                    <div>
                        { data.faq_list.map((data2)=>
                            <Link key={data2.board_id} to={`/support/faq/detail/${data2.board_id}`}>{ data2.title }</Link>
                        ) }
                    </div>
                </details>
            )}
        </>
    )
}

