import React, { useState } from 'react';
import SelectBox from '../../../SelectBox';

export default function Create({ close }) {
    const [depth, setDepth] = useState('1차')

    const onSubmit = () => {

    }

    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>카테고리 등록</strong>
            <div className='radio'>
                <input type="radio" id='1depth' name='depth' checked={depth === '1차'} onChange={(e)=>e.target.checked && setDepth('1차')}/>
                <label htmlFor="1depth">1차 카테고리</label>
                <input type="radio" id='2depth' name='depth' checked={depth === '2차'} onChange={(e)=>e.target.checked && setDepth('2차')}/>
                <label htmlFor="2depth">2차 카테고리</label>
            </div>
            {depth === '1차' &&
                <>
                    <input type="text" placeholder='1차 카테고리명을 입력하세요'/>
                </>
            }
            {depth === '2차' &&
                <>
                    <SelectBox text={['text01', 'text02']} value={['value01', 'value02']}/>
                    <input type="text" placeholder='2차 카테고리명을 입력하세요'/>
                </>
            }
            <input type="submit" value='등록' onClick={onSubmit}/>
            <button className='close' onClick={close}>닫기</button>
        </div>
    );
}

