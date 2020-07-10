import React, {Component} from 'react';

function LoginBLockPasswordField(props) {
    return (
        <input type = "password" className="LoginBlockInput" placeholder = {props.placeholderText}/>
    )
}

export default LoginBLockPasswordField;