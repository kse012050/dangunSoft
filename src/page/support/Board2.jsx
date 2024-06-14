import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Board2() {
    const isLock = true;
    const [popup, setPopup] = useState(false);

    const test = (e) =>{
        e.preventDefault()
        setPopup(true)
    }

    return (
        <section>
            <h2>お問い合わせ掲示板</h2>
            <div className='searchBox'>
                <input type="search" placeholder='タイトル検索'/>
                <button>검색</button>
            </div>
            <div className='boardBox'>
                <div>
                    <span>No</span>
                    <span>タイトル</span>
                    <span>名前</span>
                    <span>作成時間</span>
                </div>
                <ul data-none='登録されたお問い合わせはありません。'>
                    <li>
                        <Link to='' onClick={isLock && test} className='lack answer'>
                            <span>1</span>
                            <p>ライセンスはいつ発行されますか？</p>
                            <span>山田</span>
                            <time>2024-03-27</time>
                        </Link>
                    </li>
                    <li>
                        <Link to='/support/board/0' onClick={isLock && test} className='lack'>
                            <span>2</span>
                            <p>キャンセル要請</p>
                            <span>田中</span>
                            <time>2024-03-27</time>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* <div className='paginationBox'>
                <Link to=''>이전</Link>
                <ol>
                    <li><Link to='' className='active'>1</Link></li>
                    <li><Link to=''>2</Link></li>
                </ol>
                <Link to=''>다음</Link>
            </div> */}

            <Link to='/support/inquiry' className='btn-bg'>お問い合わせ</Link>

            { popup &&
                <div className='popupBox' onClick={()=>setPopup(false)}>
                    <div onClick={(e)=>e.stopPropagation()}>
                        <p>パスワードを入力してください。</p>
                        <input type="password" />
                        <button onClick={()=>setPopup(false)}>確認</button>
                        <button onClick={()=>setPopup(false)}>닫기</button>
                    </div>
                </div>
            }
        </section>
    );
}