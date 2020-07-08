import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./LoginPage.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = "LoginPage">
                <h3 className = "LoginBlockHeader">Sign In</h3>
                <div className = "LoginBlockInputBlock">
                    <input type = "email" className="LoginBlockInput" placeholder = "Email"/>
                    <input type = "password" className="LoginBlockInput" placeholder = "Password"/>
                </div>
                <a className = "LoginBlockLink">Forgot password</a>
                <button className = "LoginButton">Sign In</button>
                <a className = "LoginBlockLink">Sign Up</a>
                <p className = "LoginBlockTermsBlock">
                    By accesing your account, you agree to our<br />
                    <Link  className = "LoginBlockLink" to = "/terms_of_use">Terms conditions</Link> and <a className = "LoginBlockLink">Privacy Policy</a>
                </p>
            </div>
        )
    }
}

export default LoginPage;