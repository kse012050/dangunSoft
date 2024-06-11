import React, { useCallback, useEffect } from 'react';
import Confirm from './Confirm';
import Cancel from './Cancel';

export default function Popup({ popup, setPopup }) {

    const close = useCallback(()=>{
        if(popup.type === 'confirm' && popup.func){
            popup.func()
        }
        setPopup('')

    },[popup, setPopup])

    const handleKeyDown = useCallback((e)=>{
        if (popup.type === 'confirm' && e.key === 'Enter') { 
            close();
        }
    },[popup.type, close])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);


    return (
        <div data-popup onClick={close}>
            { popup.type === 'confirm' && <Confirm popup={popup} close={close}/>}
            { popup.type === 'cancel' && <Cancel popup={popup} close={close}/>}
        </div>
    );
}

