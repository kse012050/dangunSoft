import React, { useLayoutEffect, useState } from 'react';
import SelectBox from '../../../components/SelectBox';
import { adminApi, isSubmit } from '../../../api/api';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { inputChange, inputsRequiredAdd } from '../../../api/validation';
import { urlParams } from '../../../../js/common';
import Popup from '../../../components/popup/Popup';

export default function Create() {
    const { category1, category2 } = urlParams(useLocation())
    const { id } = useParams();
    const [inputs, setInputs] = useState({board_type: 'faq', category1: category1, category2: category2})
    const [category, setCategory] = useState()
    const [firstDepth, setFirstDepth] = useState()
    const [firstText, setFirstText] = useState()
    const [popup, setPopup] = useState()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        inputsRequiredAdd(setInputs);
        adminApi('category', '', {/* depth: '1',  */all_yn: 'n'})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setCategory(result.list)
                    setFirstDepth({
                        category_id: result.list.filter((data)=> data.parent_category_id === 0).map((data)=> data.category_id),
                        name: result.list.filter((data)=> data.parent_category_id === 0).map((data)=> data.name)
                    })

                    if(category1){
                        setFirstText((prev)=>({
                            ...prev, category1: result.list.filter((data)=> data.category_id === category1)[0]?.name
                        }))
                    }

                    if(category2){
                        setFirstText((prev)=>({
                            ...prev, category2: result.list.filter((data)=> data.category_id === category2)[0]?.name
                        }))
                    }
                }
            })

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
                    <>
                        <SelectBox 
                            text={firstDepth.name}
                            value={firstDepth.category_id} 
                            name='category1'
                            setInputs={setInputs}
                            firstText={firstText?.category1 || (inputs?.category1 && category?.filter((data)=> data.category_id === inputs.category1)?.[0]?.name)}
                            placeholder='1차 카테고리를 선택하세요.'/>
                        <SelectBox 
                            text={category.filter((data)=> data.parent_category_id === inputs?.category1).map((data)=> data?.name)}
                            value={category?.filter((data)=> data.parent_category_id === inputs?.category1).map((data)=> data.category_id)} name='category2' 
                            firstText={firstText?.category2 || (inputs?.category2 && category.filter((data)=> data.category_id === inputs.category2)?.[0]?.name)}
                            setInputs={setInputs} 
                            placeholder='2차 카테고리를 선택하세요.' 
                            key={inputs?.category1}
                        />
                    </>
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
                        <Link to='/admin/support/qna' className='btn-point-border'>취소</Link>
                        <input type="submit" className='btn-point' value={!id ? '등록': '수정'} onClick={onSubmit}/>
                    </div>
                </fieldset>
            </form>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

