import React from 'react';
import { Link } from 'react-router-dom';

export default function Simple({ board }) {
    return (
        <>
            <div className="board-title">
                <b className='test02'>No.</b>
                <b className='test01'>글쓴이</b>
                <p>
                    <span>기업명</span>
                </p>
                <p>
                    <span>이메일</span>
                </p>
                <p className='pTest'>
                    <span>비고</span>
                </p>
                <b className='test01'>작성시간</b>
                <b className='test02'>답변</b>
            </div>
            
            <ol className="board-detail">
                { board?.list.map((data)=>
                    <li key={data.board_id}>
                        <Link to={`/admin/inquiry/${data.board_id}`}>
                            <b className='test02'>{ data.board_id }</b>
                            <b className='test01'>{ data.write_name }</b>
                            <p>
                                <span>{ data.company_name }</span>
                            </p>
                            <p>
                                <span>{ data.email }</span>
                            </p>
                            <p className='pTest'>
                                <span>{ data.title }</span>
                            </p>
                            <b className='test01'>{ data.reg_date }</b>
                            <b className='test02'>{ data.answer }</b>
                        </Link>
                    </li>
                )}
            </ol>
        </>
    );
}

