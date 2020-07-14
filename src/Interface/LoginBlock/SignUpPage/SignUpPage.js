import React, {Component} from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
//import "./LoginPage.css";

import * as actionCreators from "../../../Store/ActionCreators"

import LoginBLockPasswordField from "../CommonComponents/LoginBlockInputFields/PasswordField";
import LoginBLockEmailField from "../CommonComponents/LoginBlockInputFields/EmailField";
import TermsOfUseFooter from "../CommonComponents/TermsOfUseFooter/TermsOfUseFooter";

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.path = "/sign_up";
        this.setRoutePath = this.setRoutePath.bind(this);
    }

    setRoutePath = (e) => {
        this.props.setPath(e.target.dataset.path);
    }

    render() {
        console.log(this.props);
        console.log(this.props.path);
        return(
            <div className = "LoginPage">
                {(this.path != this.props.path) ? <Redirect to = {this.props.path} /> : <span />}
                <h3 className = "LoginBlockHeader">Sign Up</h3>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockEmailField />
                    <LoginBLockPasswordField placeholderText = "Password" />
                    <LoginBLockPasswordField placeholderText = "Confirm Password" />
                </div>
                <button className = "LoginButton" data-path = "/login" onClick = {this.setRoutePath}>Sign Up</button>
                <span>I already have an account. <a data-path = "/login"  onClick = {this.setRoutePath} className = "LoginBlockLink">Sign in</a></span>
                <TermsOfUseFooter />
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

const containerSignUpPage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpPage);

export default containerSignUpPage;