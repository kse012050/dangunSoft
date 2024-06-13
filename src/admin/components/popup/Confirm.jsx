import React from 'react';

export default function Confirm({ popup, close }) {
    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <strong>{ popup.title }</strong>
            {popup.description && <p>{ popup.description }</p>}
            {popup.description2 && <p>{ popup.description2 }</p>}
            <div className='buttonArea'>
                <button className="btn-point" type="button" onClick={close}>확인</button>
            </div>
        </div>
    );
}

