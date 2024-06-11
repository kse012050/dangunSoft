import React, { useCallback, useEffect } from 'react';
import Confirm from './Confirm';
import Cancel from './Cancel';
import SignIn from './SignIn';
import SignInError from './SignInError';
import VendorCreate from './VendorCreate';
import VendorUpdate from './VendorUpdate';


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
            { popup.type === 'signIn' && <SignIn popup={popup} close={close}/>}
            { popup.type === 'signInError' && <SignInError popup={popup} close={close}/>}
            { popup.type === 'vendorCreate' && <VendorCreate setPopup={setPopup} close={close}/>}
            { popup.type === 'vendorUpdate' && <VendorUpdate popup={popup} setPopup={setPopup} close={close}/>}
        </div>
    );
}

