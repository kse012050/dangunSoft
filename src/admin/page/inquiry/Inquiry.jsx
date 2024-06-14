import React, { useLayoutEffect, useState } from 'react';
import { adminApi } from '../../api/api';
import Board from './Board';
import Simple from './Simple';

export default function Inquiry() {
    const [tab, setTab] = useState('inquiry')
    // console.log(tab);
    const currentInputs = {board_type: tab === 'board'? 'inquiry' : 'simple_inquiry', page:1, limit: 30}
    const [board, setBoard] = useState()
    const [inputs, setInputs] = useState({...currentInputs})

    // console.log(currentInputs);
    // console.log(inputs);
    useLayoutEffect(()=>{
        adminApi('board', '', {board_type: tab})
            .then((result) => {
                console.log(result);
                if(result.result){
                    setBoard({
                        list: result.list
                    })
                }
            })
    },[tab])

    return (
        <>
            <h2 onClick={()=>console.log(inputs)}>문의 관리</h2>
            
            <div className={`boardBox-suppot-inquiry-${tab}`}>
                <div className='board-period'>
                    <label htmlFor="">기간</label>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">전체</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">기간 설정</label>
                        <input type="date" />
                        <input type="date" />
                    </div>
                </div>

                
                <div className="board-tab">
                    <button className={tab === 'inquiry' ? 'active' : ''} onClick={()=>setTab('inquiry')}>문의 게시판</button>
                    <button className={tab === 'simple_inquiry' ? 'active' : ''} onClick={()=>setTab('simple_inquiry')}>간편 문의</button>
                </div>

                <div className='board-count'>
                    <strong className="total">123</strong>
                    <div className='searchBox'>
                        <input type="search" />
                        <button>검색</button>
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

