import React, { useEffect, useRef, useState } from 'react';

export default function SelectBox({ text, value, firstText, name, setInputs, func, nextRef, placeholder, setOptions, optionIdx, disabled }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [select, setSelect] = useState(firstText || (!placeholder ? text[0] : ''));
    const [select, setSelect] = useState(/* firstText || (!placeholder ? text[0] : '') */);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // console.log(text);
        // console.log(value);
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
        setSelect(e.target.innerHTML)
        // setTypeInputs(prev => ({...prev, [name]: type}))
        setInputs && setInputs(prev => ({...prev, [name]: type}))
        setOptions && setOptions(prev => {
            const arr = [...prev]
            arr[optionIdx][name] = type;
            return arr
        })
        setIsOpen(false)
        func && func()
        nextRef && nextRef.current.focus()
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

