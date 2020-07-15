import React, {Component} from "react";
import {Link} from "react-router-dom";

import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import * as actionCreators from "../../../Store/ActionCreators";

import LoginBLockEmailField from "../CommonComponents/LoginBlockInputFields/EmailField";

import leftArrow from "../../../Data/Images/ic_arrow_left.png";

//<button className = "LoginButton"><Link to = "reset_password">Send</Link></button>

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.path = "/forgot_password";
        this.setRoutePath = this.setRoutePath.bind(this);
    }

    setRoutePath = (e) => {
        this.props.setPath(e.target.dataset.path);
    }

    render() {
        return(
            <div className = "LoginPage">
                {(this.path != this.props.path) ? <Redirect to = {this.props.path} /> : <span />}
                <span className = "LoginBlockTermsOfUseHeader LoginBlockBackArrow">
                    <img src = {leftArrow} alt = "back"  data-path = "/login" onClick = {this.setRoutePath}/>
                </span>
                <h3 className = "LoginBlockHeader">Forgot Password</h3>
                <p className = "LoginBlockTermsBlock">Please enter your email below to receive your <br /> password reset instruction</p>
                <div className = "LoginBlockInputBlock">
                    <LoginBLockEmailField />
                </div>
                <button data-path = "/reset_password" onClick = {this.setRoutePath} className = "LoginButton">Send</button>
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

const containerForgotPassword = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPassword);

export default containerForgotPassword;