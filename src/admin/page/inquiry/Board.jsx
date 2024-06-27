import React from 'react';
import { Link } from 'react-router-dom';

export default function Board({ board }) {
    return (
        <>
            <div className="board-title">
                <b className='test02'>No.</b>
                <p className='pTest'>
                    <span>제목</span>
                </p>
                <b className='test01'>글쓴이</b>
                <b className='test01'>후라가나</b>
                <p>
                    <span>기업명</span>
                </p>
                <p>
                    <span>연락처</span>
                </p>
                <p>
                    <span>이메일</span>
                </p>
                <b className='test02'>미팅요청</b>
                <b className='test02'>비밀글</b>
                <b>작성시간</b>
                <b className='test02'>답변</b>
            </div>

            <ol className="board-detail">
                { board?.list.map((data)=>
                    <li key={data.board_id}>
                        <Link to={`/admin/inquiry/${data.board_id}`}>
                            <b className='test02'>{ data.board_id }</b>
                            <p className='pTest'>
                                <span>{ data.title }</span>
                            </p>
                            <b className='test01'>{ data.write_name }</b>
                            <b className='test01'>{ data.phonetic_guide }</b>
                            <p>
                                <span>{ data.company_name }</span>
                            </p>
                            <p>
                                <span>{ data.contact_information }</span>
                            </p>
                            <p>
                                <span>{ data.email }</span>
                            </p>
                            <b className='test02'>{ data.meeting_request_yn }</b>
                            <b className='test02'>{ data.secret_yn }</b>
                            <b>{ data.reg_date }</b>
                            <b className='test02'>{ data.answer ? '답변': '미답변' }</b>
                        </Link>
                    </li>
                )}
            </ol>
        </>
    );
}

