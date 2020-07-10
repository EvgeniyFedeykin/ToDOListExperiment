import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import './index.css';
import "../src/Interface/CSS/LoginBlockLogo.css";
import "../src/Interface/CSS/LoginPage.css";

//import InputField from "../src/Interface/LoginBlock/CommonComponents/LoginBlockInputField/InputField";
import LoginBlockLogo from "../src/Interface/LoginBlock/CommonComponents/LoginBlockLogo/LoginBlockLogo";
import LoginPage from "../src/Interface/LoginBlock/LoginPage/LoginPage";
import SignUpPage from "../src/Interface/LoginBlock/SignUpPage/SignUpPage";
import TermsOfUse from "../src/Interface/LoginBlock/TermsOfUse/TermsOfUse";
import ChangePassword from "../src/Interface/LoginBlock/ChangePassword/ChangePassword";
import ForgotPassword from "../src/Interface/LoginBlock/ForgotPassword/ForgotPassword";
import ResetPassword from "../src/Interface/LoginBlock/ForgotPassword/ResetPassword";
import PrivacyPolicy from "../src/Interface/LoginBlock/PrivacyPolicy/PrivacyPolicy";



class Application extends Component {
    render() {
        const isLogged = false;
        return (
            <Router >
                <Switch>
                    <Route exact path = "/">
                        <Redirect to = {(isLogged) ? "/terms_of_use" : "/login"} />
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
                            <SignUpPage />
                        </div>
                    </Route>
                    <Route path = "/change_password">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <ChangePassword />
                        </div>
                    </Route>
                    <Route path = "/forgot_password">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <ForgotPassword />
                        </div>
                    </Route>
                    <Route path = "/reset_password">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <ResetPassword />
                        </div>
                    </Route>
                    <Route path = "/terms_of_use">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <TermsOfUse />
                        </div>
                    </Route>
                    <Route path = "/privacy_policy">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <PrivacyPolicy />
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Application;