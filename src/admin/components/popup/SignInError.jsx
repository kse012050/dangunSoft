import React from 'react';

export default function SingInError({ close }) {
    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>알림</strong>
            <p>
                네트워크 오류가 발생했습니다.<br/>
                잠시 후 다시 시도해주세요. 404
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

