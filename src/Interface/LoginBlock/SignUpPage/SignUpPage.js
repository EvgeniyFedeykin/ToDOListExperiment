import React, {Component} from "react";
import {Link} from "react-router-dom";
//import "./LoginPage.css";

import LoginBLockPasswordField from "../CommonComponents/LoginBlockInputFields/PasswordField";
import LoginBLockEmailField from "../CommonComponents/LoginBlockInputFields/EmailField";
import TermsOfUseFooter from "../CommonComponents/TermsOfUseFooter/TermsOfUseFooter";

class SignUpPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = "LoginPage">
                <h3 className = "LoginBlockHeader">Sign Up</h3>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockEmailField />
                    <LoginBLockPasswordField placeholderText = "Password" />
                    <LoginBLockPasswordField placeholderText = "Confirm Password" />
                </div>
                <button className = "LoginButton">Sign Up</button>
                <span>I already have an account. <Link to = "/login"  className = "LoginBlockLink">Sign in</Link></span>
                <TermsOfUseFooter />
            </div>
        )
    }
}

export default SignUpPage;