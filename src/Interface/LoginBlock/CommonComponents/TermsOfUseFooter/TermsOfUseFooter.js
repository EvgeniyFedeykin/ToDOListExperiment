import React from 'react';
import {Link} from "react-router-dom";

function TermsOfUseFooter(props) {
    return (
        <p className = "LoginBlockTermsBlock">
            By accesing your account, you agree to our<br />
            <Link  className = "LoginBlockLink" to = "/terms_of_use">Terms conditions</Link> and <Link to = "privacy_policy" className = "LoginBlockLink">Privacy Policy</Link>
        </p>
    )
}

export default TermsOfUseFooter;