import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SelectBox from '../../../components/SelectBox';
import { adminApi } from '../../../api/api';
import Popup from '../../../components/popup/Popup';

export default function CategoryQnA() {
    const [inputs, setInputs] = useState()
    const [category, setCategory] = useState()
    const [firstDepth, setFirstDepth] = useState()
    const [board, setBoard] = useState()
    const [popup, setPopup] = useState()

    const boardFunc = useCallback(()=>{
        let parameter = {board_type: 'faq'}
        if(inputs?.category2){
            parameter = {...parameter, ...inputs}
        }
        console.log(parameter);
        adminApi('board', '', {...parameter})
            .then((result)=>{
                console.log(result);
                if(result.result){
                    setBoard({
                        list: result.list
                    })
                }
            })
    },[inputs])

    useEffect(()=>{
        boardFunc()

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
    },[boardFunc])

    const firstDepthFunc = () => {
        boardFunc()
        setInputs(prev=>({...prev, category2: ''}))
    }

    const onExposure = (e, data) => {
        const { checked } = e.target
        // console.log(inputs);
        // console.log(data);
        // console.log({board_id: data.board_id, title: data.title, comment: data.comment, category1: data.category1, category2: data.category2, exposure_yn: checked ? 'y' : 'n'});
        adminApi('board/manage', 'update', {board_id: data.board_id, title: data.title, comment: data.comment, category1: inputs.category1, category2: inputs.category2, exposure_yn: checked ? 'y' : 'n'})
            .then((result)=>{
                console.log(result);
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
                            <b className='button'>관리</b>
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
                                        <button className='btn-point-border'
                                            onClick={()=>setPopup({
                                                type: 'cancel', 
                                                title: '삭제',
                                                description: [
                                                    '해당 정보를 삭제하겠습니까?',
                                                    '삭제 후에는 복구할 수 없으며 상위 카테고리를 삭제 시 하단 내용이 없어질 수 있으니 주의하세요.'
                                                ],
                                                func: () => {
                                                    adminApi('board/manage', 'delete', {board_id: data.board_id})
                                                        .then((result)=>{
                                                            if(result.result){
                                                                setPopup({
                                                                    type: 'confirm',
                                                                    title: '알림',
                                                                    description: ['완료되었습니다.'],
                                                                    func: () =>{
                                                                        boardFunc()
                                                                    }
                                                                })
                                                            }
                                                        })
                                                }
                                            })}
                                        >삭제</button>
                                    </div>
                                </li>
                            )}
                        </ol>
                    </>
                }
            </div>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

