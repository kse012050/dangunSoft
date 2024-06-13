import React, { useEffect, useRef, useState } from 'react';
import SelectBox from '../../../SelectBox';
import { inputChange } from '../../../../api/validation';
import { adminApi } from '../../../../api/api';

export default function Update({ popup, setPopup, close }) {
    const depth = popup.data.parent_category_id === 0 ? '1차' : '2차'
    const [firstDepth, setFirstDepth] = useState()
    const [inputs, setInputs] = useState(()=> {
        const obj = {category_id: popup.data.category_id, name: ''}
        if(depth === '2차'){
            obj.parent_category_id = ''
        }
        return obj
    })
    const nameRef = useRef()

    useEffect(()=>{
        nameRef.current.focus()
        adminApi('category', '', {depth: '1', all_yn: 'n'})
            .then((result)=>{
                // console.log(result);
                setFirstDepth(()=>{
                    const obj = {
                        category_id: result.list.filter((data)=> data.parent_category_id === 0).map((data)=>data.category_id),
                        name: result.list.filter((data)=> data.parent_category_id === 0).map((data)=>data.name),
                    }
                    if(depth === '2차'){
                        obj.current = result.list.filter((data)=> data.category_id === popup.data.parent_category_id)[0].name
                    }
                    return obj
                })
            })
    },[nameRef, depth, popup.data.parent_category_id])


    const onSubmit = () => {
        // console.log(inputs);
        if(!inputs.name){
            nameRef.current.focus()
            return
        }

        adminApi('category/manage', 'update', inputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setPopup(prev => ({
                        type: 'confirm',
                        title: '알림',
                        description: ['완료되었습니다.'],
                        func: () =>{
                            prev.func()
                        }
                    }))
                }
            })
    }

    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>카테고리 등록</strong>
            {depth === '2차' && firstDepth &&
                <SelectBox text={firstDepth.name} value={firstDepth.category_id} firstText={firstDepth.current} name='parent_category_id' setInputs={setInputs} nextRef={nameRef}/>
            }
            <input type="text" placeholder={`${depth} 카테고리명을 입력하세요`} name='name' defaultValue={popup.data.name} onChange={(e)=>inputChange(e, setInputs)} ref={nameRef} onKeyDown={(e)=> e.key === 'Enter' && onSubmit(e)}/>
            <input type="submit" value='수정' onClick={onSubmit}/>
            <button className='close' onClick={close}>닫기</button>
        </div>
    );
}

