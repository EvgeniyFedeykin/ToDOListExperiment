import React, {Component} from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
//import "./LoginPage.css";

import * as actionCreators from "../../../Store/ActionCreators"

//import "../LoginPage/LoginPage.css";

import leftArrow from "../../../Data/Images/ic_arrow_left.png";


class PrivacyPolicy extends Component  {
    constructor(props) {
        super(props);
        this.path = "/privacy_policy";
        this.setRoutePath = this.setRoutePath.bind(this);
    }

    setRoutePath = (e) => {
        this.props.setPath(e.target.dataset.path, this.props.path);
    }
        render() {
            return (
                <div className = "LoginPage LoginBlockTermsOfUse">
                    {(this.path != this.props.path) ? <Redirect to = {this.props.path} /> : <span />}
                    <div className = "LoginBlockTermsOfUseHeader">
                        <a>
                            <img src = {leftArrow} alt = "back"  data-path = {this.props.previousPath} onClick = {this.setRoutePath}/>
                        </a>
                        <h2 className = "LoginBlockTermsOfUseHeading">Privacy Policy</h2>
                    </div>
                    <p className = "LoginBlockParagraph">
                    My Company (change this) («us», «we», or «our») operates http://www.mysite.com (change this) (the «Site»). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
                    </p>
                    <h3 className = "LoginBlockOffHeading">Information Collection And Use</h3>
                    <p className = "LoginBlockParagraph">
                    While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name («Personal Information»). 
                    </p>
                    <h3 className = "LoginBlockOffHeading">Log Data</h3>
                    <p className = "LoginBlockParagraph">
                    Like many site operators, we collect information that your browser sends whenever you visit our Site («Log Data»). This Log Data may include information such as your computer’s Internet Protocol («IP») address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this … Communications We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that …
                    </p>
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

const containerPrivacyPolicy = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PrivacyPolicy);

export default containerPrivacyPolicy;