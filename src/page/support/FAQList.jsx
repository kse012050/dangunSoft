import React, { useEffect } from 'react';
import { userApi } from '../../api/api';

export default function FAQList({ id }) {
    useEffect(()=>{
        userApi('faq', '', {board_type: 'faq', category1: 1})
            .then((result)=>{
                console.log(result);
            })
    },[])
    return (
        <details>
            <summary></summary>
            <div>

            </div>
        </details>
    );
}

