import React, { useEffect, useState } from 'react';
import { userApi } from '../../api/api';
import { useParams } from 'react-router-dom';

export default function FAQDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState()
    const [path, setPath] = useState()

    useEffect(()=>{
        // console.log(id);
        userApi('board/detail', '', {board_id: id})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    // console.log(result.data);
                    setDetail(result.data)
                    const category1 = result.data.category1;
                    const category2 = result.data.category2;
                    
                    userApi('category')
                        .then((result)=>{
                            // console.log(result);
                            if(result.result){
                                setPath(prev=>({...prev, category1: result.list.filter(data=>data.category_id === category1)[0].name}))
                            }
                        })

                    userApi('faq', '', {board_type: 'faq', category1: category1})
                        .then((result)=>{
                            // console.log(result);
                            if(result.result){
                                setPath(prev=>({
                                    ...prev,
                                    category2: result.list.filter(data=>data.category_id === category2)[0].name,
                                }))
                            }
                        })
                }
            })
    },[id])

    return (
        <section className='faqDetailPage'>
            {path && 
                <ol className='faqPager'>
                    <li>{`${path.category1}`}</li>
                    <li>{`${path.category2}`}</li>
                </ol>
            }

            {detail && 
                <>
                    <h2 className='titleArea'>{detail.title}</h2>
                    {(detail.comment.includes('<') && detail.comment.includes('>'))?
                        <div className='editorArea' dangerouslySetInnerHTML={{__html: detail.comment}}></div> :
                        <div className='detailArea'>
                            {detail.comment}
                        </div>
                    }
                </>
            }
        </section>
    );
}

