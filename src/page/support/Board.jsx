import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../api/api';
import { inputChange } from '../../api/validation';

export default function Board() {
    const [inputs, setInputs] = useState({page: '1', board_type: 'inquiry'})
    const [searchInputs, setSearchInputs] = useState()
    const [board, setBoard] = useState()
    const navigate = useNavigate();
    const [popup, setPopup] = useState(false);
    const passwordRef = useRef()

    useEffect(()=>{
        // console.log(inputs);
        userApi('board', '', inputs)
            .then((result)=>{
                // console.log(result.list);
                if(result.result){
                    setBoard({
                        list: result.list
                    })
                }
            })
    },[inputs])

    const lack = (e, board_id) =>{
        e.preventDefault()
        setPopup(board_id)
    }

    const onSubmit = () =>{
        userApi('board/detail', '', {board_id: popup, secret_password: passwordRef.current.value})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    sessionStorage.setItem('boardPassword', passwordRef.current.value)
                    navigate(`/support/board/${popup}`)
                }else{
                    passwordRef.current.value = '';
                    passwordRef.current.focus();
                }
            })
    }

    const onSearch = () =>{
        setInputs(prev => ({...prev, ...searchInputs}))
    }

    return (
        <section>
            <h2>お問い合わせ掲示板</h2>
            <div className='searchBox'>
                <input type="search" placeholder='タイトル検索' name='search_text' onChange={(e)=>inputChange(e, setSearchInputs)}  onKeyDown={(e)=> e.key === 'Enter' && onSearch(e)}/>
                <button onClick={onSearch}>검색</button>
            </div>
            <div className='boardBox'>
                <div>
                    <span>No</span>
                    <span>タイトル</span>
                    <span>名前</span>
                    <span>作成時間</span>
                </div>
                <ul data-none='登録されたお問い合わせはありません。'>
                    {board?.list && board.list.map((data)=>
                        <li key={data.board_id}>
                            <Link to={`/support/board/${data.board_id}`} onClick={(e)=>data.secret_yn === 'y' && lack(e, data.board_id)} className={`${data.secret_yn === 'y' ? 'lack' : ''} ${data.answer_date === 'y' ? 'answer' : ''}`}>
                                <span>{ data.board_id }</span>
                                <p>{ data.title }</p>
                                <span>{ data.write_name }</span>
                                <time>{ data.reg_date.split(' ')[0] }</time>
                            </Link>
                        </li>
                    )}
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
                        <input type="password" ref={passwordRef}/>
                        <button onClick={onSubmit}>確認</button>
                        <button onClick={()=>setPopup(false)}>닫기</button>
                    </div>
                </div>
            }
        </section>
    );
}

