import React, { useLayoutEffect, useState } from 'react';
import SelectBox from '../../../components/SelectBox';
import { adminApi, isSubmit } from '../../../api/api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { inputChange, inputsRequiredAdd } from '../../../api/validation';
import Popup from '../../../components/popup/Popup';

export default function Create() {
    const { id } = useParams();
    const [inputs, setInputs] = useState({board_type: 'faq', category1: '', category2: ''})
    const [category, setCategory] = useState()
    const [firstDepth, setFirstDepth] = useState()
    const [popup, setPopup] = useState()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        inputsRequiredAdd(setInputs);
        adminApi('category', '', {depth: '1', all_yn: 'n'})
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setCategory(result.list)
                    setFirstDepth({
                        category_id: result.list.filter((data)=> data.parent_category_id === 0).map((data)=> data.category_id),
                        name: result.list.filter((data)=> data.parent_category_id === 0).map((data)=> data.name)
                    })
                }
            })

        if(id){
            adminApi('board/detail', '', {board_id: id})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setInputs(prev => ({...prev, board_id: id, title: result.data.title, comment: result.data.comment }))
                    }
                })
        }
    },[id])

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

        adminApi('board/manage', funcType, inputs)
            .then((result)=>{
                if(result.result){
                    setPopup({
                        type: 'confirm',
                        title: '알림',
                        description: id ? ['수정되었습니다.'] : ['등록되었습니다.'],
                        func: () =>{
                            navigate('/admin/support/qna')
                        }
                    })
                }
            })
    }


    return (
        <>
            <h2>문답 등록</h2>
            <div className='board-selectBox'>
                {firstDepth &&
                    <>
                        <SelectBox text={firstDepth.name} value={firstDepth.category_id} name='category1' setInputs={setInputs} /* func={firstDepthFunc} */ placeholder='1차 카테고리를 선택하세요.'/>
                        <SelectBox text={category.filter((data)=> data.parent_category_id === inputs?.category1).map((data)=> data.name)} value={category.filter((data)=> data.parent_category_id === inputs?.category1).map((data)=> data.category_id)} name='category2' setInputs={setInputs} placeholder='2차 카테고리를 선택하세요.' key={inputs?.category1}/>
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
                        <input type="submit" className='btn-point' value='등록' onClick={onSubmit}/>
                    </div>
                </fieldset>
            </form>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

