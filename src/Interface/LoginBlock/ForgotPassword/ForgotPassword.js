import React, {Component} from "react";
import {Link} from "react-router-dom";

import LoginBLockEmailField from "../CommonComponents/LoginBlockInputFields/EmailField";

import leftArrow from "../../../Data/Images/ic_arrow_left.png";

//<button className = "LoginButton"><Link to = "reset_password">Send</Link></button>

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick = (browserHistory) => {
        //useHistory().push("/reset_password");
    }

    render() {
        return(
            <div className = "LoginPage">
                <Link className = "LoginBlockTermsOfUseHeader LoginBlockBackArrow" to = "/login">
                    <img src = {leftArrow} alt = "back"/>
                </Link>
                <h3 className = "LoginBlockHeader">Forgot Password</h3>
                <p className = "LoginBlockTermsBlock">Please enter your email below to receive your <br /> password reset instruction</p>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockEmailField />
                </div>
                <button onClick = {this.onButtonClick} className = "LoginButton">Send</button>
            </div>
        )
    }
}

export default ForgotPassword;