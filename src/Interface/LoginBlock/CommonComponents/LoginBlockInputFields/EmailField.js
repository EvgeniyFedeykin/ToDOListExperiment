import React, {Component} from 'react';

function LoginBLockEmailField(props) {
    return (
        <input id = {props.id} type = "email" className="LoginBlockInput" placeholder = "Email"/>
    )
}

export default LoginBLockEmailField;