import React, { useCallback, useLayoutEffect, useState } from 'react';
import { adminApi, isSubmit } from '../../api/api';
import { useParams } from 'react-router-dom';
import { inputChange } from '../../api/validation';

export default function Detail() {
    const { id } = useParams()
    const [detail, setDetail] = useState()
    const [inputs, setInputs] = useState({board_id: id, answer: ''})

    const detailFunc = useCallback(()=>{
        adminApi('board/detail', '', {board_id: id})
            .then((result)=>{
                console.log(result);
                if(result.result){
                    setDetail(result.data)
                }
            })

    },[id])
    
    useLayoutEffect(()=>{
        detailFunc()
    },[detailFunc])

    const onSubmit = (e) =>{
        e.preventDefault();

        if(isSubmit(inputs)){
            return;
        }
        // console.log(inputs);
        adminApi('board/manage/answer', '', inputs)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    detailFunc()
                }
            })
    }

    return (
        <>
            <h2>문의 상세 정보</h2>  
            <div className='infoBox'>
                <strong>고객 정보</strong>
                <ul>
                    <li>
                        <span>No.</span>
                        <div>
                            <p>{ detail?.board_id }</p>
                        </div>
                    </li>
                    <li>
                        <span>작성시간</span>
                        <div>
                            <time>{ detail?.reg_date }</time>
                        </div>
                    </li>
                    <li>
                        <span>글쓴이</span>
                        <div>
                            <p>{ detail?.write_name }</p>
                        </div>
                    </li>
                    <li>
                        <span>기업명</span>
                        <div>
                            <p>{ detail?.company_name }</p>
                        </div>
                    </li>
                    <li>
                        <span>이메일</span>
                        <div>
                            <p>{ detail?.email }</p>
                        </div>
                    </li>
                    <li>
                        <span>연락처</span>
                        <div>
                            <p>{ detail?.contact_information }</p>
                        </div>
                    </li>
                </ul>

                <strong>문의 내역</strong>
                { detail?.board_type === 'inquiry' &&
                    <ul>
                        <li className='full'>
                            <span>제목</span>
                            <div>
                                <p>{ detail?.title }</p>
                            </div>
                        </li>
                        <li className='full'>
                            <span>내용</span>
                            <div>
                                <p>{ detail?.comment }</p>
                            </div>
                        </li>
                        <li>
                            <span>미팅요청</span>
                            <div>
                                <p>{ detail?.meeting_request_yn }</p>
                            </div>
                        </li>
                        <li>
                            <span>비밀글</span>
                            <div>
                                <p>{ detail?.secret_yn }</p>
                            </div>
                        </li>
                    </ul>
                }

                
                { detail?.board_type === 'simple_inquiry' &&
                    <ul>
                        <li className='full'>
                            <span>비고</span>
                            <div>
                                <p>{ detail?.title }</p>
                            </div>
                        </li>
                    </ul>
                }
            </div>

            <div className='answerBox'>
                <strong>답변</strong>
                {!detail?.answer ?
                    <div className='registration'>
                        <textarea name="answer" id="answer" onChange={(e)=>inputChange(e, setInputs)}
                        placeholder='답변을 입력하세요. 
                            작성한 답변은 게시판 하단에 노출되며 고객에게 메일로 함께 전송됩니다.
                            메일 발송 완료 후에는 내용을 수정할 수 없습니다.'
                        ></textarea>
                        <div className='buttonArea'>
                            <button className='btn-point' onClick={onSubmit}>등록</button>
                        </div>
                    </div> :
                    <>
                        <div className='answer'>
                            {detail.answer}
                        </div>
                        <div className='infoBox'>
                            <ul className='infoBox'>
                                <li>
                                    <span>작성자</span>
                                    <div>
                                        {detail.answer_write_name}
                                    </div>
                                </li>
                                <li>
                                    <span>작성시간</span>
                                    <div>
                                        {detail.answer_date}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

