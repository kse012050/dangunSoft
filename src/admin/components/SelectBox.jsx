import React, { useEffect, useRef, useState } from 'react';

export default function SelectBox({ text, value, firstText, name, setInputs, nextRef, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState(firstText || (!placeholder ? text[0] : ''));
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

    const listClick = (e, type) =>{
        setSelect(e.target.innerHTML)
        // setTypeInputs(prev => ({...prev, [name]: type}))
        setInputs(prev => ({...prev, [name]: type}))
        setIsOpen(false)
        nextRef && nextRef.current.focus()
    }

    return (
        <div className={`selectBox ${isOpen ? 'active': ''} ${select ? 'selected' : ''}`} ref={dropdownRef}>
            <button 
                onClick={()=> setIsOpen(prev => !prev)}
                className={isOpen ? 'active': ''}
            >
                { select || (placeholder || '분류') }
            </button>
            {isOpen && 
                <div>
                    {text.map((data, i)=>
                        <button key={i} onClick={(e)=>listClick(e, value[i])}>{ data }</button>
                    )}
                    {/* <button onClick={(e)=>listClick(e, 'free')}>무료</button>
                    <button onClick={(e)=>listClick(e, 'vip')}>VIP</button> */}
                </div>
            }
        </div>
    );
}

