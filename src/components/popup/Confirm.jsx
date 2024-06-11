import React from 'react';

export default function Confirm({ popup, close }) {
    return (
        <div onClick={(e)=> e.stopPropagation()}>
            {popup.title && <strong>{ popup.title }</strong>}
            {popup.description && popup.description.map((data, i)=>
                <p key={i}>{ data }</p>
            )}
            <div>
                <button className="btn-point" type="button" onClick={close}>확인</button>
            </div>
        </div>
    );
}

