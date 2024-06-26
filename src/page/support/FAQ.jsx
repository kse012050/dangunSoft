import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { tab, list } from '../../js/faq'
import { urlParams } from '../../js/common'
import { userApi } from '../../api/api';
import FAQList from './FAQList';


export default function FAQ() {
    const navigation = useNavigate()
    const { search, page } = urlParams(useLocation())
    const [category, setCategory] = useState()
    // const [inputs, setInputs] = useState({board_type: 'faq'})
    const [faqList, setFaqList] = useState(list(search, page).faqList)
    const [searchValue, setSearchValue] = useState()

    useLayoutEffect(()=>{

        userApi('category')
            .then((result)=>{
                console.log(result);
                if(result.result){
                    setCategory(result.list)
                }
            })

        userApi('faq', '', {board_type: 'faq'})
            .then((result)=>{
                // console.log(result);
            })
    },[])

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
            
            <div>
                {category && category.map((data)=>
                    <div>
                        <strong>{ data.name }</strong>
                        <FAQList id={data.category_id}/>
                    </div>
                )}
            </div>
           
        </section>
    );
}

