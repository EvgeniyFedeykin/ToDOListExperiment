import React, { Component } from 'react'
import './index.css'

import InputField from "../src/Interface/LoginBlock/CommonComponents/LoginBlockInputField/InputField";
import LoginBlockLogo from "../src/Interface/LoginBlock/CommonComponents/LoginBlockLogo/LoginBlockLogo";


class Application extends Component {
    render() {
        return (
            <div className = "MainClass">
                <LoginBlockLogo />
            </div>
        )
    }
}

export default Application;