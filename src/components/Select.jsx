import React, { useEffect, useState } from 'react';

export default function Select({ placeholder, list, set, name, value, setProducts, productIdx, disabled}) {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState()

    useEffect(()=>{
        document.querySelector('body').addEventListener('click',bodyClick)
        return () => {
            // console.log('select 바디 클릭 종료');
            document.querySelector('body').removeEventListener('click',bodyClick)
        }
    },[])

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
            <button type="button" onClick={selectOpen} className={selected ? '' : 'placeholder'}>{ selected || placeholder}</button>
            { isActive && 
                <div>
                    {list.map((data, i)=>
                        <button key={i} type="button" onClick={()=>{
                            setIsActive(false);
                            setSelected(data); 
                            set && set((prev)=> ({...prev, [name]: data}))
                            if(setProducts){
                                setProducts(prev=>{
                                    const arr = [...prev]
                                    arr[productIdx][name] = value[i]
                                    return arr
                                })
                            }
                        }}>{ data }</button>
                    )}
                </div>
            }
        </div>
    );
}

