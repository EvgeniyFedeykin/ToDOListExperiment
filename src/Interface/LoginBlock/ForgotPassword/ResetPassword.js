import React, {Component} from "react";
import {Link} from "react-router-dom";

import * as actionCreators from "../../../Store/ActionCreators";

import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import LoginBLockPasswordField from "../CommonComponents/LoginBlockInputFields/PasswordField";
import LoginBLockTextField from "../CommonComponents/LoginBlockInputFields/TextField";

import leftArrow from "../../../Data/Images/ic_arrow_left.png";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.path = "/reset_password";
        this.setRoutePath = this.setRoutePath.bind(this);
    }

    setRoutePath = (e) => {
        this.props.setPath(e.target.dataset.path);
    }

    render() {
        return(
            <div className = "LoginPage">
                {(this.path != this.props.path) ? <Redirect to = {this.props.path} /> : <span />}   
                <a className = "LoginBlockTermsOfUseHeader LoginBlockBackArrow">
                    <img src = {leftArrow} alt = "back" data-path = "/forgot_password" onClick = {this.setRoutePath}/>
                </a>
                <h3 className = "LoginBlockHeader">Forgot Password</h3>
                <p className = "LoginBlockTermsBlock">Reset code was sent to your Email. Please enter the code and create new password</p>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockTextField placeholderText = "Code" />
                    <LoginBLockPasswordField placeholderText = "Password" />
                    <LoginBLockPasswordField placeholderText = "Confirm password" />
                </div>
                <button data-path = "/login" className = "LoginButton" onClick = {this.setRoutePath}>Change Password</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        path: state.RoutePath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       setPath: (path) => dispatch(actionCreators.setRoutePath(path))
    }
}

const containerResetPassword = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPassword);

export default containerResetPassword;