import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import './index.css'

import InputField from "../src/Interface/LoginBlock/CommonComponents/LoginBlockInputField/InputField";
import LoginBlockLogo from "../src/Interface/LoginBlock/CommonComponents/LoginBlockLogo/LoginBlockLogo";
import LoginPage from "../src/Interface/LoginBlock/LoginPage/LoginPage";
import TermsOfUse from "../src/Interface/LoginBlock/TermsOfUse/TermsOfUse";

class Application extends Component {
    render() {
        const isLogged = false;
        /*
        let firstPath;
        if(isLogged) {
            firstPath = <Redirect to = "/terms_of_use" />
        } else {
            firstPath = <Redirect to = "/login" />
        }
        */
        return (
            <Router>
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
                    <Route path = "/terms_of_use">
                        <div className = "MainClass">
                            <LoginBlockLogo />
                            <TermsOfUse />
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Application;