import React from 'react';

export default function Cancel({ popup, close }) {
    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>{ popup.title }</strong>
            {popup.description && popup.description.map((data, i)=>
                <p key={i}>{ data }</p>
            )}
            <div className='buttonArea'>
                <button className="btn-point-border" type="button" onClick={close}>취소</button>
                <button className="btn-point" type="button" onClick={popup.func}>확인</button>
            </div>
        </div>
    );
}

