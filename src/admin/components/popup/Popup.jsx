import React from 'react';
import Confirm from './Confirm';
import Cancel from './Cancel';
import SignIn from './SignIn';
import SignInError from './SignInError';
import VendorCreate from './VendorCreate';


export default function Popup({ popup, setPopup }) {
    const close = () =>{
        // navigate()
        if(popup.type === 'confirm' && popup.func){
            popup.func()
        }
        setPopup('')
    }
    return (
        <div data-popup onClick={close}>
            { popup.type === 'confirm' && <Confirm popup={popup} close={close}/>}
            { popup.type === 'cancel' && <Cancel popup={popup} close={close}/>}
            { popup.type === 'signIn' && <SignIn popup={popup} close={close}/>}
            { popup.type === 'signInError' && <SignInError popup={popup} close={close}/>}
            { popup.type === 'vendorCreate' && <VendorCreate setPopup={setPopup} close={close}/>}
        </div>
    );
}

