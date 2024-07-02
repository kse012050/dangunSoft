import React, { useEffect, useLayoutEffect, useState } from 'react';
import SelectBox from '../../../components/SelectBox';
import { adminApi, isSubmit } from '../../../api/api';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { inputChange, inputsRequiredAdd } from '../../../api/validation';
import { urlParams } from '../../../../js/common';
import Popup from '../../../components/popup/Popup';

export default function Create() {
    const { category1, category2 } = urlParams(useLocation())
    const { id } = useParams();
    const [inputs, setInputs] = useState({category1: category1, category2: category2})
    const [firstDepth, setFirstDepth] = useState()
    const [secondDepth, setSecondDepth] = useState()
    const [firstText, setFirstText] = useState()
    const [popup, setPopup] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        adminApi('category', '', {depth: '1', all_yn: 'y'})
            .then((result)=>{
                if(result.result){
                    setFirstDepth({
                        category_id: result.list.map((data)=> data.category_id),
                        name: result.list.map((data)=> data.name),
                        list: result.list
                    })
                    console.log(result);

                    if(category1){
                        setFirstText({category1: result.list.filter(data=>data.category_id === Number(category1))[0].name})

                    }else if(result.list.map((data)=> data.category_id).length === 1){
                        setFirstText((prev)=>({
                            ...prev, category1: result.list[0].name
                        }))
                        setInputs(prev=> ({...prev, category1: result.list[0].category_id}))
                    }
                }
            })
    },[category1])

    useEffect(()=>{
        if(inputs?.category1){
            adminApi('category', '', {depth: '2', all_yn: 'y', parent_category_id: inputs?.category1})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setSecondDepth({
                            category_id: result.list.map(data=> data.category_id),
                            name: result.list.map(data=> data.name),
                            list: result.list
                        })

                        if(category2){
                            setFirstText(prev=> ({...prev, category2: result.list.filter(data=>data.category_id === Number(category2))?.[0]?.name}))
                        }
                    }
                })
        }
    },[inputs?.category1, category2])

    useLayoutEffect(()=>{
        inputsRequiredAdd(setInputs);
        
        if(id){
            adminApi('board/detail', '', {board_id: id})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setInputs(prev => ({...prev, board_id: id, category1: result.data.category1, category2: result.data.category2, title: result.data.title, comment: result.data.comment }))
                    }
                })
        }
    },[id, category1, category2])

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(inputs);

        if(!inputs.category1 || !inputs.category2){
            return
        }

        if(isSubmit(inputs)){
            return;
        }
       
        const funcType = id ? 'update' : 'insert'
        // console.log(inputs);
        adminApi('board/manage', funcType, inputs)
            .then((result)=>{
                if(result.result){
                    setPopup({
                        type: 'confirm',
                        title: '알림',
                        description: id ? ['수정되었습니다.'] : ['등록되었습니다.'],
                        func: () =>{
                            navigate(`/admin/support/qna${inputs?.category1 ? `?category1=${inputs.category1}` : ''}${inputs?.category2 ? `?category2=${inputs.category2}` : ''}`)
                            // navigate(`/admin/support/qna`)
                        }
                    })
                }
            })
    }


    return (
        <>
            <h2>문답 {!id ? '등록': '수정'}</h2>
            <div className='board-selectBox'>
                {firstDepth &&
                    <SelectBox 
                        text={firstDepth.name} 
                        value={firstDepth.category_id} 
                        name='category1'
                        firstText={firstText?.category1}
                        setInputs={setInputs} 
                        // func={firstDepthFunc} 
                        placeholder='1차 카테고리를 선택하세요.'
                    />
                }
                {secondDepth &&
                    <SelectBox 
                        text={secondDepth.name} 
                        value={secondDepth.category_id} 
                        name='category2' 
                        firstText={firstText?.category2}
                        setInputs={setInputs} 
                        placeholder='2차 카테고리를 선택하세요.' 
                        key={inputs?.category1}
                    />
                }
            </div>
            <form onChange={(e)=>inputChange(e, setInputs)}>
                <fieldset className='inputBox'>
                    <ul>
                        <li>
                            <label htmlFor='title'>제목</label>
                            <div>
                                <input type="text" id='title' name='title' defaultValue={inputs?.title} required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor='comment'>내용</label>
                            <div>
                                <textarea name="comment" id="comment" defaultValue={inputs?.comment} required></textarea>
                            </div>
                        </li>
                    </ul>
                    <div className='buttonArea'>
                        <Link to={`/admin/support/qna${category1 ? `?category1=${category1}` : ''}${category2 ? `?category2=${category2}` : ''}`} className='btn-point-border'>취소</Link>
                        <input type="submit" className='btn-point' value={!id ? '등록': '수정'} onClick={onSubmit}/>
                    </div>
                </fieldset>
            </form>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

