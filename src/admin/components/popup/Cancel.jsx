import React from 'react';

export default function Cancel({ popup, close }) {
    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>{ popup.title }</strong>
            <p>{ popup.description }</p>
            {popup.description2 && <p>{ popup.description2 }</p>}
            <div>
                <button className="btn-point-border" type="button" onClick={close}>취소</button>
                <button className="btn-point" type="button" onClick={popup.func}>확인</button>
            </div>
        </div>
    );
}

