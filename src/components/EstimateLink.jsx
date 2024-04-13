import React from 'react';
import { Link } from 'react-router-dom';

export default function EstimateLink() {
    return (
        <Link to='/estimate' className='estimateLink'>
            견적 링크
        </Link>
    );
}

