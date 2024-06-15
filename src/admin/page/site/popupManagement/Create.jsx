import React, { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { inputChange, inputsRequiredAdd } from '../../../api/validation';
import { adminApi, adminFileApi, isSubmit } from '../../../api/api';
import Popup from '../../../components/popup/Popup';

export default function Create() {
    const { id } = useParams()
    const [inputs, setInputs] = useState({board_type: 'popup'})
    const [detail, setDetail] = useState()
    const [imgUrl, setImgUrl] = useState([])
    const [imgFile, setImgFIle] = useState([])
    const [popup, setPopup] = useState()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        inputsRequiredAdd(setInputs);

        if(id){
            adminApi('board/detail', '', {board_id: id})
                .then((result)=>{
                    // console.log(result);
                    if(result.result){
                        setInputs(prev => ({...prev, title: result.data.title, link: result.data.link, exposure_yn: result.data.exposure_yn, board_picture_ids: result.data.board_picture_list[0].file_id }))
                        setDetail(result.data)
                        setImgUrl([result.data.board_picture_list[0].file_url])
                    }
                })
        }
    },[id])

    const fileUpload = (e) => {
        e.stopPropagation()
        /* if(imgFile.length >= 5){
            return
        } */
        const { files } = e.target;

        if(files){
            setInputs(prev=>({...prev, board_picture_ids: ''}))
            // console.log(files[0]);
            // for(let a = 0; a < (files.length < 6 ? files.length : 5); a++){
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImgUrl((prev) => [...prev, reader.result]);
                }
                reader.readAsDataURL(files[0]);
                // setImgFIle((prev) => [...prev, files[0]])
                setImgFIle([files[0]])
            // }
        }
        e.target.value = ''
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs);

        if(isSubmit(inputs)){
            return;
        }
        // console.log(imgFile);
        if(!imgFile.length && !inputs.board_picture_ids){
            return
        }

        let apiInputs = {...inputs}
        // console.log(imgFile);
        if(imgFile.length && typeof(imgFile[0]) === 'object'){
            await adminFileApi(imgFile)
                .then((result)=>{
                    // console.log(result);
                    if(result){
                        apiInputs = {...apiInputs, board_picture_ids: result}
                    }
                })
            // console.log(apiInputs);
        }

        if(id){
            apiInputs = {...apiInputs, board_id: id}
        }

        const funcType = !id ? 'insert' : 'update';

        adminApi('board/manage', funcType, apiInputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setPopup({
                        type: 'confirm',
                        title: '알림',
                        description: id ? ['수정되었습니다.'] : ['등록되었습니다.'],
                        func: () =>{
                            navigate('/admin/site/popup')
                        }
                    })
                }
            })
    }


    return (
        <>
            <h2>팝업 상세 정보</h2>
            <form onChange={(e)=>inputChange(e, setInputs)}>
                <fieldset className='inputBox'>
                    <ul>
                        {detail &&
                            <li>
                                <label htmlFor="">No.</label>
                                <div>
                                    { detail.board_id }
                                </div>
                            </li>
                        }
                        <li>
                            <label htmlFor="">썸네일</label>
                            {!!imgUrl.length &&
                                <ul className='imgBox'>
                                    {imgUrl.map((data, i)=>
                                        <li key={i}>
                                            <img src={data} alt="" />
                                            <button type="button" 
                                                onClick={()=>{
                                                    setImgUrl((prev)=> prev.filter((_, j) =>  i !== j));
                                                    setImgFIle((prev)=> prev.filter((_, j) =>  i !== j));
                                                }}
                                            >이미지 제거</button>
                                        </li>
                                    )}
                                </ul>
                            }
                            {!imgUrl.length &&
                                <div>
                                    <input type="file" id='thumbnail' onChange={fileUpload}/>
                                    <label htmlFor='thumbnail' className='btn-point-border'>추가</label>
                                </div>
                            }
                        </li>
                        <li>
                            <label htmlFor="title">설명</label>
                            <div>
                                <input type="text" id='title' name='title' defaultValue={inputs.title} placeholder='설명을 입력하세요. (해당 정보는 웹사이트에 노출되지 않습니다.)' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="link">페이지 링크</label>
                            <div>
                                <input type="link" id='link' name='link' defaultValue={inputs.link} placeholder='링크할 페이지 URL를 입력하세요.' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">노출여부</label>
                            <div className='exposure'>
                                <input type="checkbox" id='exposure_yn' name='exposure_yn' checked={inputs.exposure_yn === 'y' || ''} required onChange={(e)=>inputChange(e, setInputs)}/>
                                <label htmlFor='exposure_yn'>노출 여부</label>
                            </div>
                        </li>
                        {detail &&
                            <li>
                                <label htmlFor="">등록일시</label>
                                <div>
                                    { detail.reg_date }
                                </div>
                            </li>
                        }
                    </ul>
                    <div className='buttonArea'>
                        <input type="submit" className='btn-point' value={!id ?'등록' : '수정'} onClick={onSubmit}/>
                    </div>
                </fieldset>
            </form>
            { popup && <Popup popup={popup} setPopup={setPopup}/>}
        </>
    );
}

