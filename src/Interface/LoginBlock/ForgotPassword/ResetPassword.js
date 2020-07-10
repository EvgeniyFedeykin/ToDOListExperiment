import React, {Component} from "react";
import {Link} from "react-router-dom";

import LoginBLockPasswordField from "../CommonComponents/LoginBlockInputFields/PasswordField";
import LoginBLockTextField from "../CommonComponents/LoginBlockInputFields/TextField";

import leftArrow from "../../../Data/Images/ic_arrow_left.png";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = "LoginPage">
                <Link className = "LoginBlockTermsOfUseHeader LoginBlockBackArrow" to = "/forgot_password">
                    <img src = {leftArrow} alt = "back"/>
                </Link>
                <h3 className = "LoginBlockHeader">Forgot Password</h3>
                <p className = "LoginBlockTermsBlock">Reset code was sent to your Email. Please enter the code and create new password</p>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockTextField placeholderText = "Code" />
                    <LoginBLockPasswordField placeholderText = "Password" />
                    <LoginBLockPasswordField placeholderText = "Confirm password" />
                </div>
                <button className = "LoginButton">Change Password</button>
            </div>
        )
    }
}

export default ResetPassword;