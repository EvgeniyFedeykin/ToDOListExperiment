import React from 'react';
import {Link} from "react-router-dom";

function TermsOfUseFooter(props) {
    return (
        <p className = "LoginBlockTermsBlock">
            By accesing your account, you agree to our<br />
            <a onClick = {props.setRoutePath} data-path = "/terms_of_use" className = "LoginBlockLink">Terms conditions</a> and <a onClick = {props.setRoutePath} data-path = "/privacy_policy" className = "LoginBlockLink">Privacy Policy</a>
        </p>
    )
}

export default TermsOfUseFooter;