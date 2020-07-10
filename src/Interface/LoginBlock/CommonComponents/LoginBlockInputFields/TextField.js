import React, {Component} from 'react';

function LoginBLockTextField(props) {
    return (
        <input type = "text" className="LoginBlockInput" placeholder = {props.placeholderText}/>
    )
}

export default LoginBLockTextField;