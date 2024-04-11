import React, { useEffect, useState } from 'react';

export default function Select() {
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        document.querySelector('body').addEventListener('click',bodyClick)
        return () => {
            // console.log('select 바디 클릭 종료');
            document.querySelector('body').removeEventListener('click',bodyClick)
        }
    },[])

    const bodyClick = () =>{
        setIsActive(false)
    }

    const selectOpen = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsActive((prev)=>!prev)
    }

    return (
        <div className='selectBox'>
            <button type="button" onClick={selectOpen}>test</button>
            { isActive && 
                <div>
                    <button type="button" onClick={()=>setIsActive(false)}>test</button>
                    <button type="button" onClick={()=>setIsActive(false)}>test</button>
                </div>
            }
        </div>
    );
}

