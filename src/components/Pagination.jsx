import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { urlParams } from '../js/common';

export default function Pagination({ page }) {
    const { search } = urlParams(useLocation())

    const test = (index) =>  index + 1 + parseInt((page.page - 1) / 5) *  5;
    return (
        <div className='paginationBox'>
            <Link 
                to={`${search ? `?search=` + search : ''}?page=${page.page - 1}`}
                className={page.page <= 1 ? 'unActive' : ''}
                >이전</Link>
            <ol>
                {Array.from({ length: 5 }).map((_, index) => 
                    page.totalPage >= test(index) &&
                        <li key={index}>
                            <Link 
                                to={`${search ? `?search=` + search : ''}?page=${test(index)}`}
                                className={page.page === test(index) ? 'active' : ''}
                            >
                                { test(index) }
                            </Link>
                        </li>
                )}
            </ol>
            <Link 
                to={`${search ? `?search=` + search : ''}?page=${page.page + 1}`}
                className={page.totalPage <= page.page ? 'unActive' : ''}
                >다음</Link>
        </div>
    );
}

