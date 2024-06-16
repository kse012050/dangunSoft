import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailedManagement() {
    return (
        <>
            <h2>제품 상세 관리</h2>

            <div className="boardBox-productDetail">
                <Link to='create' className='btn-point'>등록</Link>

                <div className="board-title">
                    <b>No.</b>
                    <p>
                        <span>벤더사 명</span>
                    </p>
                    <p>
                        <span>제품명</span>
                    </p>
                    <b>옵션</b>
                    <b>사용 구분</b>
                    <b>최소 수량</b>
                    <b className='exposure'>노출 여부</b>
                    <b>관리</b>
                </div>
            </div>
        </>
    );
}

