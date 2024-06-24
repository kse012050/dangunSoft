import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);


export default function BarChart({ count }) {
    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };
    
    const data = {
        labels: count.state_date,
        datasets: [
            {
                label: '간편문의 수',
                data: count.simple_inquiry_cnt,
                // backgroundColor: 'rgba(255, 206, 86, 0.2)',
                // borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: '#FFFDC4',
                borderColor: '#F8B800',
                borderWidth: 1,
            },
            {
                label: '문의 수',
                data: count.inquiry_cnt,
                // backgroundColor: 'rgba(255, 159, 64, 0.2)',
                // borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: '#FFE8A4',
                borderColor: '#F8B800',
                borderWidth: 1,
            },
            {
                label: '견적 문의 수',
                data: count.estimate_cnt,
                // backgroundColor: 'rgba(255, 99, 132, 0.2)',
                // borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: '#FFE9D0',
                borderColor: '#F8B800',
                borderWidth: 1,
            },
            {
                label: '방문자 수 (전체)',
                data: count.visit_cnt,
                // backgroundColor: 'rgba(255, 99, 132, 0.2)',
                // borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: '#E2F7AC',
                borderColor: '#96C51A',
                borderWidth: 1,
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    );
}

