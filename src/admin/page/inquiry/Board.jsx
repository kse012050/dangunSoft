import React from 'react';
import { Link } from 'react-router-dom';

export default function Board({ board }) {
    return (
        <>
            <div className="board-title">
                <b>No.</b>
                <p>
                    <span>제목</span>
                </p>
                <b>글쓴이</b>
                <b>후라가나</b>
                <b className='test01'>기업명</b>
                <b className='test01'>연락처</b>
                <b className='test01'>이메일</b>
                <b className='test02'>미팅요청</b>
                <b className='test02'>비밀글</b>
                <b>작성시간</b>
                <b className='test02'>답변</b>
            </div>

            <ol className="board-detail">
                { board?.list.map((data)=>
                    <li key={data.board_id}>
                        <Link to={`/admin/inquiry/${data.board_id}`}>
                            <b>{ data.board_id }</b>
                            <p>
                                <span>{ data.title }</span>
                            </p>
                            <b>{ data.write_name }</b>
                            <b>{ data.phonetic_guide }</b>
                            <b className='test01'>{ data.company_name }</b>
                            <b className='test01'>{ data.contact_information }</b>
                            <b className='test01'>{ data.email }</b>
                            <b className='test02'>{ data.meeting_request_yn }</b>
                            <b className='test02'>{ data.secret_yn }</b>
                            <b>{ data.reg_date }</b>
                            <b className='test02'>{ data.answer }</b>
                        </Link>
                    </li>
                )}
            </ol>
        </>
    );
}

