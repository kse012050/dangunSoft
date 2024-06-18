import React, { useEffect, useState } from 'react';

export default function Select({ placeholder, list, firstText, set, name, value, setInputs, setFirstText, disabled}) {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(firstText || '')
    if(name === 'product_id'){
        // console.log(firstText);
    }

    useEffect(()=>{
        setSelected(firstText || '')
        document.querySelector('body').addEventListener('click',bodyClick)
        return () => {
            // console.log('select 바디 클릭 종료');
            document.querySelector('body').removeEventListener('click',bodyClick)
        }
    },[firstText])

    useEffect(()=>{
        set && set((prev)=> ({...prev, [name]: ''}))
    },[name, set])

    const bodyClick = () =>{
        setIsActive(false)
    }

    const selectOpen = (e)=>{
        if(disabled) return;
        e.preventDefault();
        e.stopPropagation();
        setIsActive((prev)=>!prev)
    }

    return (
        <div className='selectBox'>
            <button type="button" onClick={selectOpen} className={`${selected ? '' : 'placeholder'} ${disabled ? 'disabled': ''}`}>{ selected || placeholder}</button>
            { isActive && 
                <div>
                    {list.map((data, i)=>
                        <button key={i} type="button" onClick={()=>{
                            setIsActive(false);
                            setSelected(data); 
                            set && set((prev)=> ({...prev, [name]: data}))
                            if(setInputs){
                                setInputs((prev)=> ({...prev, [name]: value[i]}))
                            }
                            if(setFirstText){
                                setFirstText((prev)=> ({...prev, [name]: list[i]}))
                            }
                        }}>{ data }</button>
                    )}
                </div>
            }
        </div>
    );
}

