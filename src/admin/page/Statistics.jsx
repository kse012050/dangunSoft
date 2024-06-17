import React, { useLayoutEffect, useState } from 'react';
import Period from '../components/Period';
import BarChart from '../components/chart/BarChart';
import PieChart from '../components/chart/PieChart';
import { adminApi } from '../api/api';
import { Link } from 'react-router-dom';

export default function Statistics() {
    const [inputs, setInputs] = useState({start_date: '2024-06-01', end_date: '2024-06-11'})
    const [count, setCount] = useState();
    const [board, setBoard] = useState()
    const [excelDown, setExcelDown] = useState();

    useLayoutEffect(()=>{
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

