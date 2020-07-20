import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import { connect } from 'react-redux';

import './index.css';
import "../src/Interface/CSS/LoginBlockLogo.css";
import "../src/Interface/CSS/LoginPage.css";
import "../src/Interface/CSS/TasksBlock.css";


import * as actionCreators from "../src/Store/ActionCreators";

import LoginBlockLogo from "../src/Interface/LoginBlock/CommonComponents/LoginBlockLogo/LoginBlockLogo";
import LoginPage from "../src/Interface/LoginBlock/LoginPage/LoginPage";
import SignUpPage from "../src/Interface/LoginBlock/SignUpPage/SignUpPage";
import TermsOfUse from "../src/Interface/LoginBlock/TermsOfUse/TermsOfUse";
import ChangePassword from "../src/Interface/LoginBlock/ChangePassword/ChangePassword";
import ForgotPassword from "../src/Interface/LoginBlock/ForgotPassword/ForgotPassword";
import ResetPassword from "../src/Interface/LoginBlock/ForgotPassword/ResetPassword";
import PrivacyPolicy from "../src/Interface/LoginBlock/PrivacyPolicy/PrivacyPolicy";
import TasksBlock from "../src/Interface/TasksBlock/TaskBlock";



class Application extends Component {
    constructor(props) {
        super(props);
        this.isLogged = false;
        (this.isLogged) ? this.props.setPath("/terms_of_use", "/login") : this.props.setPath("/login", "/login");
    }


    render() {
        //{(isLogged) ? this.props.setPath("/terms_of_use") : this.props.setPath("/login")}
        return (
            <Router >
                <Switch>
                    <Route exact path = "/">
                        <Redirect to = {this.props.path} />
                    </Route>
                    <Route path = "/login">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <LoginPage />
                        </div>
                    </Route>
                    <Route path = "/sign_up">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <SignUpPage/>
                        </div>
                    </Route>
                    <Route path = "/change_password">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <ChangePassword/>
                        </div>
                    </Route>
                    <Route path = "/forgot_password">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <ForgotPassword/>
                        </div>
                    </Route>
                    <Route path = "/reset_password">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <ResetPassword/>
                        </div>
                    </Route>
                    <Route path = "/terms_of_use">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <TermsOfUse previousPath = {this.props.path}/>
                        </div>
                    </Route>
                    <Route path = "/privacy_policy">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <PrivacyPolicy previousPath = {this.props.path}/>
                        </div>
                    </Route>
                    <Route path = "/tasks">
                        <TasksBlock />
                    </Route>
                </Switch>
            </Router>
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

const containerApplication = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Application);

export default containerApplication;