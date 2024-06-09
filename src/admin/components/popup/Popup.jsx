import React from 'react';
import Confirm from './Confirm';
import Cancel from './Cancel';
import SingIn from './SingIn';


export default function Popup({ popup, setPopup }) {
    console.log(1);
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
            { popup.type === 'signIn' && <SingIn popup={popup} close={close}/>}
        </div>
    );
}

