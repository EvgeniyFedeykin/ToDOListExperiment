import React, {Component} from "react";
import {Link} from "react-router-dom";

import LoginBLockPasswordField from "../CommonComponents/LoginBlockInputFields/PasswordField";

import leftArrow from "../../../Data/Images/ic_arrow_left.png";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = "LoginPage">
                <Link className = "LoginBlockTermsOfUseHeader LoginBlockBackArrow" to = "/login">
                    <img src = {leftArrow} alt = "back"/>
                </Link>
                <h3 className = "LoginBlockHeader">Change Password</h3>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockPasswordField placeholderText = "Password" />
                    <LoginBLockPasswordField placeholderText = "New password" />
                    <LoginBLockPasswordField placeholderText = "Confirm password" />
                </div>
                <button className = "LoginButton">Change Password</button>
            </div>
        )
    }
}

export default ChangePassword;