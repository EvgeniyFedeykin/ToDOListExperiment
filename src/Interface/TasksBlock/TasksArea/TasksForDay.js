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
        const tasksDate = new Date(this.props.date);
        let day = "";
        let month = "";
        switch(tasksDate.getMonth()) {
            case(0): 
                month = "January";
                break;
            case(1): 
                month = "February";
                break;
            case(2): 
                month = "March";
                break;
            case(3): 
                month = "April";
                break;
            case(4): 
                month = "May";
                break;
            case(5): 
                month = "June";
                break;
            case(6): 
                month = "July";
                break;
            case(7): 
                month = "August";
                break;
             case(8): 
                month = "September";
                break;
            case(9): 
                month = "October";
                break;
            case(10): 
                month = "November";
                break;
            case(11): 
                month = "December";
                break;
        }
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