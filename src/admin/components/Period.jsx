import React, { useEffect, useState } from 'react';
import { inputChange } from '../api/validation';
import { useLocation, useNavigate } from 'react-router-dom';
import { urlParams } from '../../js/common';

export default function Period() {
    const { start_date, end_date, search_text } = urlParams(useLocation())
    const [inputs, setInputs] = useState({start_date: start_date, end_date: end_date})
    const navigate = useNavigate()

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
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(today.getDate() - 7);
            const formattedOneWeekAgo = formatDate(oneWeekAgo);
            
            // 출력
            setInputs(prev=>({...prev, start_date: formattedOneWeekAgo, end_date: formattedToday}))
            return
        }
    }
    
    useEffect(()=>{
        if(inputs?.start_date && inputs?.end_date){
            navigate(`?start_date=${inputs.start_date}?end_date=${inputs.end_date}${search_text ? `?search_text=${search_text}` : ''}`)
        }
        
        if(!inputs?.start_date && !inputs?.end_date){
            navigate(`${search_text ? `?search_text=${search_text}` : ''}`)
        }
    },[inputs?.start_date, inputs?.end])

    return (
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
    );
}

