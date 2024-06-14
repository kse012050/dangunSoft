import React from 'react';
import { Link } from 'react-router-dom';

export default function Simple({ board }) {
    return (
        <>
            <div className="board-title">
                <b>No.</b>
                <b>글쓴이</b>
                <b className='test01'>기업명</b>
                <b className='test01'>이메일</b>
                <p>
                    <span>비고</span>
                </p>
                <b>작성시간</b>
                <b className='test02'>답변</b>
            </div>
            
            <ol className="board-detail">
                { board?.list.map((data)=>
                    <li key={data.board_id}>
                        <Link to=''>
                            <b>{ data.board_id }</b>
                            <b>{ data.write_name }</b>
                            <b className='test01'>{ data.company_name }</b>
                            <b className='test01'>{ data.email }</b>
                            <p>
                                <span>{ data.title }</span>
                            </p>
                            <b>{ data.reg_date }</b>
                            <b className='test02'>{ data.answer }</b>
                        </Link>
                    </li>
                )}
            </ol>
        </>
    );
}

