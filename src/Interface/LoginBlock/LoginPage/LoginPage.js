import React, {Component} from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
//import "./LoginPage.css";

import * as actionCreators from "../../../Store/ActionCreators";

import LoginBLockPasswordField from "../CommonComponents/LoginBlockInputFields/PasswordField";
import LoginBLockEmailField from "../CommonComponents/LoginBlockInputFields/EmailField";
import TermsOfUseFooter from "../CommonComponents/TermsOfUseFooter/TermsOfUseFooter";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.path = "/login";
        this.setRoutePath = this.setRoutePath.bind(this);
    }

    setRoutePath = (e) => {
        console.log(e.target.dataset.path);
        console.log(this.path != this.props.path);
        this.props.setPath(e.target.dataset.path);
    }

    render() {
        console.log(this.path != this.props.path);
        return(
            <div className = "LoginPage">
                {(this.path != this.props.path) ? <Redirect to = {this.props.path} /> : <span />}
                <h3 className = "LoginBlockHeader">Sign In</h3>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockEmailField />
                    <LoginBLockPasswordField placeholderText = "Password" />
                </div>
                <a data-path = "/forgot_password" onClick = {this.setRoutePath} className = "LoginBlockLink">Forgot password</a>
                <button className = "LoginButton">Sign In</button>
                <a data-path = "/sign_up" className = "LoginBlockLink" onClick = {this.setRoutePath}>Sign Up</a>
                <TermsOfUseFooter setRoutePath = {this.setRoutePath}/>
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

const containerLoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage);

export default containerLoginPage;