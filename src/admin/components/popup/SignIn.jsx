import React from 'react';

export default function SingIn({ close }) {
    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>알림</strong>
            <p>
                ID/PW를 확인하세요.<br/>
                문제가 지속되는 경우 개발사에 문의하세요.
            </p>
            <p>
                개발사 연락처 :  <br/>
                (주)1985 <br/>
                010.8210.3442 장혜령(PM)
            </p>
            <button className='close' onClick={close}>닫기</button>
        </div>
    );
}

