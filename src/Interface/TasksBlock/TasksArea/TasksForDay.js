import React, {Component} from "react";
import { connect } from 'react-redux';

import Task from "./Task/Task";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen : false};
    }

    render() {
        let tasks = this.props.tasks.map((item) => {
            <Task key = {item.id} task = {item}/>
        });
        let day = "";
        let month = "";
        return (
            <div>
                <div>
                    <span>{day + ", " + month}</span>
                    <img />
                </div>
                {(this.state.isOpen) ? tasks : ""}
            </div>
        )
    }
}