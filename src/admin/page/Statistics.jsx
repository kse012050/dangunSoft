import React, { useEffect, useLayoutEffect, useState } from 'react';
import BarChart from '../components/chart/BarChart';
import PieChart from '../components/chart/PieChart';
import { adminApi } from '../api/api';
import { Link } from 'react-router-dom';
import { inputChange } from '../api/validation';

export default function Statistics() {
    const [inputs, setInputs] = useState()
    const [count, setCount] = useState();
    const [board, setBoard] = useState()
    const [period, setPeriod] = useState('30일')
    const [excelDown, setExcelDown] = useState();

    const onPeriod = (e) =>{
        const { innerHTML } = e.target;
        // console.log(innerHTML);
        setPeriod(innerHTML)
    }

    useEffect(()=>{
        function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); 
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        // 오늘 날짜 구하기
        const today = new Date();
        let start;
        const end = formatDate(today);

        if(period === '오늘'){
            start = formatDate(today);
        }
        if(period === '7일'){
            today.setDate(today.getDate() - 7);
            start = formatDate(today);
        }
        if(period === '30일'){
            today.setDate(today.getDate() - 30);
            start = formatDate(today);
        }
        if(period === '180일'){
            today.setDate(today.getDate() - 180);
            start = formatDate(today);
        }
        if(period === '365일'){
            today.setDate(today.getDate() - 365);
            start = formatDate(today);
        }

        setInputs({start_date: start, end_date: end})
    },[period])

    useLayoutEffect(()=>{
        if(!inputs?.start_date){
            return
        }

        adminApi('stat', '', inputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setCount({
                        state_date: result.list.map((data)=> data.stat_date ),
                        estimate_cnt: result.list.map((data)=> data.estimate_cnt ),
                        inquiry_cnt: result.list.map((data)=> data.inquiry_cnt ),
                        simple_inquiry_cnt: result.list.map((data)=> data.simple_inquiry_cnt ),
                        visit_cnt: result.list.map((data)=> data.visit_cnt ),
                        total: [
                            result.list.map((data)=> data.estimate_cnt ).reduce((prev, next)=> prev + next),
                            result.list.map((data)=> data.inquiry_cnt ).reduce((prev, next)=> prev + next),
                            result.list.map((data)=> data.simple_inquiry_cnt ).reduce((prev, next)=> prev + next),
                            result.list.map((data)=> data.visit_cnt ).reduce((prev, next)=> prev + next),
                        ]
                    })
                    setBoard({
                        list: result.list.reverse()
                    })
                }
            })

        // console.log(inputs);
        adminApi('stat/download', '', inputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setExcelDown(result.data.download_url)
                }
            })
    },[inputs])

    return (
        <>
            <h2>관리자 통계</h2>
            <strong>서비스 방문 / 이용 통계</strong>
            <div className='board-period'>
                <label htmlFor="">기간</label>
                <div>
                    <input type="date" name='start_date' value={inputs?.start_date || ''} disabled={!inputs?.start_date} onChange={(e)=>inputChange(e, setInputs)}/>
                    <input type="date" name='end_date' value={inputs?.end_date || ''} disabled={!inputs?.end_date} onChange={(e)=>inputChange(e, setInputs)}/>
                </div>
                <button className={period === '오늘' ? 'btn-point' : 'btn-point-border'} onClick={onPeriod}>오늘</button>
                <button className={period === '7일' ? 'btn-point' : 'btn-point-border'} onClick={onPeriod}>7일</button>
                <button className={period === '30일' ? 'btn-point' : 'btn-point-border'} onClick={onPeriod}>30일</button>
                <button className={period === '180일' ? 'btn-point' : 'btn-point-border'} onClick={onPeriod}>180일</button>
                <button className={period === '365일' ? 'btn-point' : 'btn-point-border'} onClick={onPeriod}>365일</button>
            </div>

            { count &&
                <div className='chartArea'>
                    <div className='barArea'>
                        <BarChart count={count}/>
                    </div>
                    <div className='pieArea'>
                        <PieChart count={count}/>
                    </div>
                    <ul>
                        <li>간편문의 수</li>
                        <li>문의 수</li>
                        <li>견적 문의 수</li>
                        <li>방문자 수 (전체)</li>
                    </ul>
                </div>
            }


            <strong>
                내역
                <Link to={excelDown} className='btn-point-border'>엑셀 다운로드</Link>
            </strong>
            
            <div className="boardBox-statistics">
                <div className="board-title">
                    <b>일자</b>
                    <b>방문자 수</b>
                    <b>간편문의 수</b>
                    <b>문의 수</b>
                    <b>견적요청 수</b>
                </div>

                <ol className="board-detail">
                    { board?.list.map((data, i)=>
                        <li key={i}>
                            <span>{ data.stat_date }</span>
                            <span>{ data.visit_cnt }</span>
                            <span>{ data.simple_inquiry_cnt }</span>
                            <span>{ data.inquiry_cnt }</span>
                            <span>{ data.estimate_cnt }</span>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );
}

