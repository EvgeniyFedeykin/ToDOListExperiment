import React, { Component } from 'react'
import './index.css'

import Warhammerportal from './WarhammerPortal.js'

class Application extends Component {
    render() {
        return (
            <div className = "MainClass">
                <Warhammerportal />
            </div>
        )
    }
}

export default Application;