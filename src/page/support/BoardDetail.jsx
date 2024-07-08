import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { userApi } from '../../api/api';

export default function BoardDetail() {
    const { id } = useParams()
    const [dateil, setDetail] = useState()
    const navigate = useNavigate();
    const boardPassword = sessionStorage.getItem('boardPassword')
    
    useEffect(()=>{
        let parameter = {board_id: id};
        (boardPassword && boardPassword !== 'null') && (parameter = {...parameter, secret_password: boardPassword});
        userApi('board/detail', '', parameter)
            .then((result)=>{
                // console.log(result);
                if(result.result){
                    setDetail(result.data)
                }else{
                    navigate('/support/board')
                }
            });

        sessionStorage.setItem('boardPassword', boardPassword);
        return () => {
            sessionStorage.removeItem('boardPassword');
        }
    },[id, boardPassword, navigate])

    return (
        <section>
            <h2>お問い合わせ掲示板</h2>
            <strong>{ dateil?.title }</strong>
            <dl>
                <dt>名前</dt>
                <dd>{ dateil?.write_name }</dd>
            </dl>
            <dl>
                <dt>企業名</dt>
                <dd>{ dateil?.company_name }</dd>
            </dl>
            <div className='detailArea'>
                { dateil?.comment }
            </div>
            <div className='answerArea'>
                안녕하세요.<br/>
                <br/>
                답변드립니다~ 답변답변답변<br/>
                답변답변답변<br/>
                답변답변답변<br/>
                답변답변답변<br/>
                답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변<br/>
                <br/>
                감사합니다.
            </div>
            <Link to='/support/board' className='btn-border-black'>リスト</Link>
        </section>
    );
}

