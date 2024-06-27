import React, { useLayoutEffect, useState } from 'react';
import Period from '../components/Period';
import BarChart from '../components/chart/BarChart';
import PieChart from '../components/chart/PieChart';
import { adminApi } from '../api/api';
import { Link } from 'react-router-dom';

function allDate(){
    function getFormattedDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    // 오늘 날짜 구하기
    const today = new Date();
    const formattedToday = getFormattedDate(today);

    // 일주일 전 날짜 구하기
    // const oneWeekAgo = new Date();
    // oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    // const formattedOneWeekAgo = getFormattedDate(oneWeekAgo);
    
    // 한 달 전 날짜 구하기
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const formattedOneMonthAgo = getFormattedDate(oneMonthAgo);

    // 180일 전 날짜 구하기
    // const oneEightyDaysAgo = new Date();
    // oneEightyDaysAgo.setDate(oneEightyDaysAgo.getDate() - 180);
    // const formattedOneEightyDaysAgo = getFormattedDate(oneEightyDaysAgo);

    // 365일 전 날짜 구하기
    // const oneYearAgo = new Date();
    // oneYearAgo.setDate(oneYearAgo.getDate() - 365);
    // const formattedOneYearAgo = getFormattedDate(oneYearAgo);

    return {start_date: formattedOneMonthAgo, end_date: formattedToday}
}

export default function Statistics() {
    const [inputs, setInputs] = useState()
    const [count, setCount] = useState();
    const [board, setBoard] = useState()
    const [excelDown, setExcelDown] = useState();

    useLayoutEffect(()=>{
        const parameter = !inputs?.start_date ? allDate() : inputs;
        adminApi('stat', '', parameter)
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

        // console.log(parameter);
        adminApi('stat/download', '', parameter)
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
            <Period inputs={inputs} setInputs={setInputs}/>

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

