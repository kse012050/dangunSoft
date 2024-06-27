import React, { useEffect, useRef, useState } from 'react';
import SelectBox from '../../../SelectBox';
import { inputChange } from '../../../../api/validation';
import { adminApi } from '../../../../api/api';

export default function Create({ setPopup, close }) {
    const [depth, setDepth] = useState('1차')
    const [firstDepth, setFirstDepth] = useState()
    const currentInputs = {name: '', depth: 1}
    const [inputs, setInputs] = useState({...currentInputs})
    const nameRef = useRef()

    useEffect(()=>{
        nameRef.current.focus()
        adminApi('category', '', {depth: '1', all_yn: 'n'})
            .then((result)=>{
                // console.log(result);
                setFirstDepth({
                    category_id: result.list.filter((data)=> data.parent_category_id === 0).map((data)=>data.category_id),
                    name: result.list.filter((data)=> data.parent_category_id === 0).map((data)=>data.name)
                })
            })
    },[])

    const onRadio = (e) => {
        setDepth(e.target.id === '1depth' ? '1차' : '2차')
        const obj = {...currentInputs}
        if(e.target.id === '2depth'){
            obj.parent_category_id = ''
        }
        nameRef.current.value = ''
        nameRef.current.focus()
        setInputs(obj)
    }

    const onSubmit = () => {
        // console.log(inputs);
        if(inputs.parent_category_id === ''){
            console.log(inputs.parent_category_id);
            return
        }

        if(!inputs.name){
            nameRef.current.focus()
            return
        }
        console.log(inputs);
        // adminApi('category/manage', 'insert', inputs)
        //     .then((result)=>{
        //         // console.log(result);
        //         if(result.result){
        //             setPopup(prev => ({
        //                 type: 'confirm',
        //                 title: '알림',
        //                 description: ['완료되었습니다.'],
        //                 func: () =>{
        //                     prev.func()
        //                 }
        //             }))
        //         }
        //     })
    }

    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>카테고리 등록</strong>
            <div className='radio'>
                <input type="radio" id='1depth' name='depth' checked={depth === '1차'} onChange={onRadio}/>
                <label htmlFor="1depth">1차 카테고리</label>
                <input type="radio" id='2depth' name='depth' checked={depth === '2차'} onChange={onRadio}/>
                <label htmlFor="2depth">2차 카테고리</label>
            </div>
            {depth === '2차' &&
                <SelectBox text={firstDepth.name} value={firstDepth.category_id} name='parent_category_id' setInputs={setInputs} nextRef={nameRef} placeholder='1차 카테고리를 선택하세요.'/>
            }
            <input type="text" placeholder={`${depth} 카테고리명을 입력하세요`} name='name' onChange={(e)=>inputChange(e, setInputs)} ref={nameRef} onKeyDown={(e)=> e.key === 'Enter' && onSubmit(e)}/>
            <input type="submit" value='등록' onClick={onSubmit}/>
            <button className='close' onClick={close}>닫기</button>
        </div>
    );
}

