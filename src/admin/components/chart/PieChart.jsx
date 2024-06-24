import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

export default function PieChart({ count }) {

    const data = {
        labels: ['간편문의 수', '문의 수', '견적 문의 수', '방문자 수 (전체)'],
        datasets: [
            {
                label: '# of Votes',
                data: count.total,
                backgroundColor: [
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(255, 99, 132, 0.2)',
                    '#FFFDC4',
                    '#FFE8A4',
                    '#FFE9D0',
                    '#E2F7AC',
                ],
                borderColor: [
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(255, 159, 64, 1)',
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(255, 99, 132, 1)',
                    '#F8B800',
                    '#F8B800',
                    '#F8B800',
                    '#96C51A',
                ],
                borderWidth: 1,
            },
        ],
    };
      
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw || '';
                        return `${label}: ${value}`;
                    },
                },
            },
        },
    };

    return (
        <Pie data={data} options={options} />
    );
}
