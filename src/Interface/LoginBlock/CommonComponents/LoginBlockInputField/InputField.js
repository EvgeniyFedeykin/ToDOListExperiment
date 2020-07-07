import React, {Component} from 'react';
import "./InputField.css";

function InputField(props) {
    return (
        <input type="text" className="LoginBlockInputField" placeholder = {props.placeholder} />
    )
}

export default InputField;