import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination({ page, curruntParam }) {

    const test = (index) =>  index + 1 + parseInt((page.page - 1) / 5) *  5;
    
    const onPrev = (e) =>{
        if(page.page - 1 <= 0){
            e.preventDefault();
        }
    }
    const onNext = (e) =>{
        if(page.page + 1 > page.totalPage){
            e.preventDefault();
        }
    }
    return (
        <div className='paginationBox'>
            <Link 
                to={`${curruntParam || ''}?page=${page.page - 1}`}
                onClick={onPrev}
                className={page.page <= 1 ? 'unActive' : ''}
                >이전</Link>
            <ol>
                {Array.from({ length: 5 }).map((_, index) => 
                    page.totalPage >= test(index) &&
                        <li key={index}>
                            <Link 
                                to={`${curruntParam || ''}?page=${test(index)}`}
                                className={page.page === test(index) ? 'active' : ''}
                            >
                                { test(index) }
                            </Link>
                        </li>
                )}
            </ol>
            <Link 
                to={`${curruntParam || ''}?page=${page.page + 1}`}
                className={page.totalPage <= page.page ? 'unActive' : ''}
                onClick={onNext}
                >다음</Link>
        </div>
    );
}

