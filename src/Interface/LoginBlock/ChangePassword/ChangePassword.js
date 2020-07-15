import React, {Component} from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import * as actionCreators from "../../../Store/ActionCreators"

import LoginBLockPasswordField from "../CommonComponents/LoginBlockInputFields/PasswordField";

import leftArrow from "../../../Data/Images/ic_arrow_left.png";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.path = "/change_password";
        this.setRoutePath = this.setRoutePath.bind(this);
    }

    setRoutePath = (e) => {
        this.props.setPath(e.target.dataset.path, this.props.path);
    }

    render() {
        return(
            <div className = "LoginPage">
                {(this.path != this.props.path) ? <Redirect to = {this.props.path} /> : <span />}
                <a className = "LoginBlockTermsOfUseHeader LoginBlockBackArrow">
                    <img src = {leftArrow} alt = "back" data-path = { this.props.previousPath }  onClick = {this.props.setRoutePath}/>
                </a>
                <h3 className = "LoginBlockHeader" data-path = "/login"  onClick = {this.props.setRoutePath}>Change Password</h3>
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

const mapStateToProps = (state) => {
    return {
        path: state.RoutePath.path,
        previousPath: state.RoutePath.previousPath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       setPath: (path, previousPath) => dispatch(actionCreators.setRoutePath(path, previousPath))
    }
}

const containerChangePassword = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassword);

export default containerChangePassword;