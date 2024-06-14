import React, { useLayoutEffect, useRef, useState } from 'react';
import { adminApi } from '../../api/api';
import Board from './Board';
import Simple from './Simple';
import { inputChange } from '../../api/validation';

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

    const onPeriod = (e) =>{
        // console.log(e.target.id);
        if(e.target.id === 'period-all'){
            setInputs(prev=>{
                const obj = {...prev};
                delete obj.start_date
                delete obj.end_date
                return obj
            })
            return
        }

        
        if(e.target.id === 'period-setting'){
            function formatDate(date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
            }
            
            // 오늘 날짜를 구하는 방법
            const today = new Date();
            const formattedToday = formatDate(today);
            
            // 현재 년도와 월의 시작 날을 구하는 방법
            const year = today.getFullYear();
            const month = today.getMonth(); // 0이 1월, 11이 12월
            const firstDayOfMonth = new Date(year, month, 1);
            const formattedFirstDayOfMonth = formatDate(firstDayOfMonth);
            
            // 출력
            setInputs(prev=>({...prev, start_date: formattedFirstDayOfMonth, end_date: formattedToday}))
            return
        }
    }

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
                <div className='board-period'>
                    <label htmlFor="">기간</label>
                    <div>
                        <input type="radio" name='period' id='period-all' defaultChecked onChange={onPeriod}/>
                        <label htmlFor="period-all">전체</label>
                    </div>
                    <div>
                        <input type="radio" name='period' id='period-setting' onChange={onPeriod}/>
                        <label htmlFor="period-setting">기간 설정</label>
                        <input type="date" name='start_date' value={inputs?.start_date || ''} disabled={!inputs?.start_date} onChange={(e)=>inputChange(e, setInputs)}/>
                        <input type="date" name='end_date' value={inputs?.end_date || ''} disabled={!inputs?.end_date} onChange={(e)=>inputChange(e, setInputs)}/>
                    </div>
                </div>

                
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

