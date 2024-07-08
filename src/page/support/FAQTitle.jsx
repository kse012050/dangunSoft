import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userApi } from '../../api/api';

function isEmpty(obj) {
    return Object.keys(obj).length !== 0;
}

export default function FAQTitle() {
    const { category1, category2 } = useParams()
    const [path, setPath] = useState({})
    const [detail, setDetail] = useState()
    const [detail2, setDetail2] = useState()

    useEffect(()=>{
        if(category2){
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
        }else{
            userApi('category')
                .then((result)=>{
                    // console.log(result);
                    // console.log(result.list.filter(data=>data.category_id === Number(category1))[0]?.name);
                    if(result.result){
                        // setPath(prev=>({...prev, category1: result.list.filter(data=>data.category_id === Number(category1))[0]?.name}))
                        setPath(prev=>({...prev, category2: result.list.filter(data=>data.category_id === Number(category1))[0]?.name}))
                    }
                })

            userApi('faq', '', {board_type: 'faq', category1})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setDetail2([...result.list.map((data)=>({
                            name: data.name,
                            category_id: data.category_id
                        }))])
                        // setPath(prev=>({...prev, category2: result.list.filter(data=>data.category_id === Number(category2))[0]?.name}))
                    }
                })

        }
    },[category1, category2])

    return (
        <section className='faqTitlePage'>
        {(path && isEmpty(path) && category2) && 
            <ol className='faqPager'>
                <li><Link to={`/support/faq/title/${category1}`}>{`${path.category1}`}</Link></li>
                {/* <li>{`${path.category2}`}</li> */}
            </ol>
        }

        {(path && isEmpty(path)) && 
            <strong onClick={()=>console.log(detail)}>{ path.category2 }</strong>
        }
        { category2 &&
            <ul>
                {detail && detail.map((data)=>
                    <li key={data.board_id}><Link to={`/support/faq/detail/${data.board_id}`}>{ data.title }</Link></li>
                )}
            </ul>
        }

        
        { !category2 &&
            <ul>
                {detail2 && detail2.map((data)=>
                    <li key={data.category_id}><Link to={`/support/faq/title/${category1}/${data.category_id}`}>{ data.name }</Link></li>
                )}
            </ul>
        }
        </section>
    );
}

