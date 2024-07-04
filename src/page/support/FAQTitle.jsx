import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { userApi } from '../../api/api';
import { urlParams } from '../../js/common';

export default function FAQTitle() {
    const { category2 } = urlParams(useLocation())
    const { category1 } = useParams()
    const [path, setPath] = useState({})
    const [detail, setDetail] = useState()

    useEffect(()=>{
        userApi('category')
            .then((result)=>{
                // console.log(result);
                // console.log(result.list.filter(data=>data.category_id === Number(category1))[0]?.name);
                if(result.result){
                    setPath(prev=>({...prev, category1: result.list.filter(data=>data.category_id === Number(category1))[0]?.name}))
                }
            })

        userApi('faq', '', {board_type: 'faq', category1, category2})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setDetail(result.list.filter(data=>data.category_id === Number(category2))[0].faq_list)
                    setPath(prev=>({...prev, category2: result.list.filter(data=>data.category_id === Number(category2))[0]?.name}))
                }
            })
    },[category1, category2])

    return (
        <section className='faqTitlePage'>
        {path && 
            <ol className='faqPager'>
                <li>{`${path.category1}`}</li>
                {/* <li>{`${path.category2}`}</li> */}
            </ol>
        }

        {path && 
            <strong>{ path.category2 }</strong>
        }
            
        <ul>
            {detail && detail.map((data)=>
                <li key={data.board_id}><Link to={`/support/faq/detail/${data.board_id}`}>{ data.title }</Link></li>
            )}
        </ul>
        </section>
    );
}

