import React, { useLayoutEffect, useRef, useState } from 'react';
import { adminApi } from '../../api/api';
import Board from './Board';
import Simple from './Simple';
import Period from '../../components/Period';

export default function Inquiry() {
    const [tab, setTab] = useState('inquiry')
    // console.log(tab);
    const currentInputs = {page:1, limit: 30}
    const [board, setBoard] = useState()
    const [inputs, setInputs] = useState({...currentInputs})
    const searchRef = useRef()

    // console.log(currentInputs);
    // console.log(inputs);
    useLayoutEffect(()=>{
        adminApi('board', '', {board_type: tab, ...inputs})
            .then((result) => {
                // console.log(result);
                if(result.result){
                    setBoard({
                        page: result.data,
                        list: result.list
                    })
                }
            })
    },[tab, inputs])

    const onSearch = () => {
        if(!searchRef.current.value && !inputs?.search_text){
            searchRef.current.focus()
            return
        }

        setInputs(prev=>({...prev, search_text: searchRef.current.value}))
    }

    return (
        <>
            <h2>문의 관리</h2>
            
            <div className={`boardBox-suppot-inquiry-${tab}`}>
                <Period inputs={inputs} setInputs={setInputs} />
                
                <div className="board-tab">
                    <button className={tab === 'inquiry' ? 'active' : ''} onClick={()=>setTab('inquiry')}>문의 게시판</button>
                    <button className={tab === 'simple_inquiry' ? 'active' : ''} onClick={()=>setTab('simple_inquiry')}>간편 문의</button>
                </div>

                <div className='board-count'>
                    <strong className="total">{ board?.page.totalCount }</strong>
                    <div className='searchBox'>
                        <input type="search" name='search_text' placeholder='검색어를 입력하세요.' ref={searchRef} onKeyDown={(e)=> e.key === 'Enter' && onSearch()}/>
                        <button onClick={onSearch}>검색</button>
                    </div>
                </div>

                {board &&
                    <>
                        {tab === 'inquiry' && <Board board={board}/>}
                        {tab === 'simple_inquiry' && <Simple board={board}/>}
                    </>  
                }
            </div>
        </>
    );
}

