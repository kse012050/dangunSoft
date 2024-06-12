import React, { useEffect, useRef, useState } from 'react';
import SelectBox from '../../../SelectBox';
import { userApi } from '../../../../../api/api';
import { inputChange } from '../../../../api/validation';
import { adminApi } from '../../../../api/api';

export default function Create({ popup, close }) {
    const [depth, setDepth] = useState('1차')
    const [firstDepth, setFirstDepth] = useState()
    const currentInputs = {name: '', depth: 1}
    const [inputs, setInputs] = useState({...currentInputs})
    const nameRef = useRef()

    useEffect(()=>{
        userApi('category', '', {depth: '1'})
            .then((result)=>{
                console.log(result);
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
            obj.parent_category_id = firstDepth.category_id[0]
        }
        nameRef.current.value = ''
        nameRef.current.focus()
        setInputs(obj)
    }

    const onSubmit = () => {
        // console.log(inputs);
        if(!inputs.name){
            nameRef.current.focus()
            return
        }

        adminApi('category/manage', 'insert', inputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    close()
                    popup.func()
                }
            })
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
                <SelectBox text={firstDepth.name} value={firstDepth.category_id} name='parent_category_id' setInputs={setInputs} nextRef={nameRef}/>
            }
            <input type="text" placeholder={`${depth} 카테고리명을 입력하세요`} name='name' onChange={(e)=>inputChange(e, setInputs)} ref={nameRef}/>
            <input type="submit" value='등록' onClick={onSubmit}/>
            <button className='close' onClick={close}>닫기</button>
        </div>
    );
}

