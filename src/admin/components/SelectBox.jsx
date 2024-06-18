import React, { useEffect, useRef, useState } from 'react';

export default function SelectBox({ text, value, firstText, name, setInputs, func, nextRef, placeholder, setOptions, optionIdx, disabled }) {
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState();
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(()=>{
        setSelect((prev)=> prev || (firstText || (!placeholder ? text[0] : '')))
    },[firstText, placeholder, text])

    const listClick = (e, type) =>{
        if(disabled){
            return
        }
        if(select !== e.target.innerHTML){
            setSelect(e.target.innerHTML)
            setInputs && setInputs(prev => ({...prev, [name]: type}))
            setOptions && setOptions(prev => {
                const arr = [...prev]
                arr[optionIdx][name] = type;
                return arr
            })
            func && func()
            nextRef && nextRef.current.focus()
        }
        setIsOpen(false)
    }
    
    return (
        <div className={`selectBox ${isOpen ? 'active': ''} ${select ? 'selected' : ''} ${disabled? 'disabled' : ''}`} ref={dropdownRef}>
            <button 
                type='button'
                onClick={()=> !disabled && setIsOpen(prev => !prev)}
                className={isOpen ? 'active': ''}
            >
                { select || (placeholder || '분류') }
            </button>
            {isOpen && 
                <div>
                    {text.map((data, i)=>
                        <button key={i} type='button' onClick={(e)=>listClick(e, value[i])}>{ data }</button>
                    )}
                    {/* <button onClick={(e)=>listClick(e, 'free')}>무료</button>
                    <button onClick={(e)=>listClick(e, 'vip')}>VIP</button> */}
                </div>
            }
        </div>
    );
}

