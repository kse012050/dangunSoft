import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Board() {
    const isLock = true;
    const [popup, setPopup] = useState(false);

    const test = (e) =>{
        e.preventDefault()
        setPopup(true)
    }

    return (
        <section>
            <h2>게시판</h2>
            <div className='searchBox'>
                <input type="search" placeholder='글 제목 검색'/>
                <button>검색</button>
            </div>
            <div className='boardBox'>
                <div>
                    <span>No</span>
                    <span>제목</span>
                    <span>이름</span>
                    <span>작성시간</span>
                </div>
                <ul>
                    <li>
                        <Link to='' onClick={isLock && test} className='lack'>
                            <span>999</span>
                            <p>프로모션으로 제품을 구매했는데요~ 문의드려요~ </p>
                            <span>홍길동</span>
                            <time>2024-03-27</time>
                        </Link>
                    </li>
                    <li>
                        <Link to='/support/board/0'>
                            <span>999</span>
                            <p>프로모션으로 제품을 구매했는데요~ 문의드려요~ </p>
                            <span>홍길동</span>
                            <time>2024-03-27</time>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='paginationBox'>
                <Link to=''>이전</Link>
                <ol>
                    <li><Link to='' className='active'>1</Link></li>
                    <li><Link to=''>2</Link></li>
                </ol>
                <Link to=''>다음</Link>
            </div>

            <Link to='' className='btn-bg'>문의하기</Link>

            { popup &&
                <div className='popupBox' onClick={()=>setPopup(false)}>
                    <div onClick={(e)=>e.stopPropagation()}>
                        <p>비밀번호를 입력하세요.</p>
                        <input type="password" />
                        <button onClick={()=>setPopup(false)}>확인</button>
                        <button onClick={()=>setPopup(false)}>닫기</button>
                    </div>
                </div>
            }
        </section>
    );
}

