import React, {Component} from "react";
import {Link} from "react-router-dom";
//import "./LoginPage.css";

import LoginBLockPasswordField from "../CommonComponents/LoginBlockInputFields/PasswordField";
import LoginBLockEmailField from "../CommonComponents/LoginBlockInputFields/EmailField";
import TermsOfUseFooter from "../CommonComponents/TermsOfUseFooter/TermsOfUseFooter";

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = "LoginPage">
                <h3 className = "LoginBlockHeader">Sign In</h3>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockEmailField />
                    <LoginBLockPasswordField placeholderText = "Password" />
                </div>
                <Link to = "/forgot_password" className = "LoginBlockLink">Forgot password</Link>
                <button className = "LoginButton">Sign In</button>
                <Link to = "/sign_up" className = "LoginBlockLink">Sign Up</Link>
                <TermsOfUseFooter />
            </div>
        )
    }
}

export default LoginPage;