import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SelectBox from '../../../components/SelectBox';
import { adminApi } from '../../../api/api';

export default function CategoryQnA() {
    const [inputs, setInputs] = useState()
    const [category, setCategory] = useState()
    const [firstDepth, setFirstDepth] = useState()
    const [board, setBoard] = useState()

    useEffect(()=>{
        adminApi('category', '', {depth: '1', all_yn: 'n'})
            .then((result)=>{
                if(result.result){
                    setCategory(result.list)
                    setFirstDepth({
                        category_id: result.list.filter((data)=> data.parent_category_id === 0).map((data)=> data.category_id),
                        name: result.list.filter((data)=> data.parent_category_id === 0).map((data)=> data.name)
                    })
                }
            })
    },[])

    const firstDepthFunc = () => {
        setBoard()
        setInputs(prev=>({...prev, category2: ''}))
    }


    useEffect(()=>{
        if(inputs?.category2){
            adminApi('board', '', {board_type: 'faq', ...inputs})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setBoard({
                            list: result.list
                        })
                    }
                })
        }
    },[inputs])

    const onExposure = (e, data) => {
        const { checked } = e.target
        adminApi('board/manage', 'update', {board_id: data.board_id, title: data.title, comment: data.comment, category1: inputs.category1, category2: inputs.category2, exposure_yn: checked ? 'y' : 'n'})
            .then((result)=>{
                // console.log(result);
                if(result.result){

                }
            })
    }

    return (
        <>
            <h2>FAQ 관리</h2>

            <div className="boardBox-suppot-qna">
                <div className="board-tab">
                    <NavLink to='/admin/support/faq'>카테고리 관리</NavLink>
                    <NavLink to='/admin/support/qna'>문답 관리</NavLink>
                </div>

                <div className='board-selectBox'>
                    {firstDepth &&
                        <SelectBox text={firstDepth.name} value={firstDepth.category_id} name='category1' setInputs={setInputs} func={firstDepthFunc} placeholder='1차 카테고리를 선택하세요.'/>
                    }
                    {inputs?.category1 &&
                        <SelectBox text={category.filter((data)=> data.parent_category_id === inputs.category1).map((data)=> data.name)} value={category.filter((data)=> data.parent_category_id === inputs.category1).map((data)=> data.category_id)} name='category2' setInputs={setInputs} placeholder='2차 카테고리를 선택하세요.' key={inputs.category1}/>
                    }
                    <NavLink to='/admin/support/qna/create' className='btn-point'>등록</NavLink>
                </div>

                {board && 
                    <>
                        <div className="board-title">
                            <b>No.</b>
                            <p>
                                <span>제목</span>
                            </p>
                            <b>노출 여부</b>
                            <b>관리</b>
                        </div>


                        <ol className="board-detail">
                            {board.list.map((data)=>
                                <li key={data.board_id}>
                                    <b>{ data.board_id }</b>
                                    <p>
                                        <span>{ data.title }</span>
                                    </p>
                                    <div className='exposure'>
                                        <input type="checkbox" id={`check_${data.board_id}`} defaultChecked={data.exposure_yn === 'y'} onChange={(e)=>onExposure(e, data)}/>
                                        <label htmlFor={`check_${data.board_id}`}>노출 여부</label>
                                    </div>
                                    <div className='button'>
                                        <Link to={`/admin/support/qna/${data.board_id}`} className='btn-point'>수정</Link>
                                        <button className='btn-point-border'>삭제</button>
                                    </div>
                                </li>
                            )}
                        </ol>
                    </>
                }
            </div>
        </>
    );
}

