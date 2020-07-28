import React, {Component} from "react";
import { connect } from 'react-redux';

import upArrow from "../../../Data/Images/ic_arrow_up_grey@2x.png";
import downArrow from "../../../Data/Images/ic_arrow_down_grey@2x.png";

import Task from "./Task/Task";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen : false};
        this.expand = this.expand.bind(this);
    }

    expand = () => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    render() {
        let tasks = this.props.tasks.map((item) => {
            <Task key = {item.id} task = {item}/>
        });
        const tasksDate = new Date(this.props.date);
        const now = new Date();

        let day = "";
        let month = "";

        if(tasksDate.getFullYear() == now.getFullYear() && tasksDate.getMonth() == now.getMonth() && tasksDate.getDate() == now.getDate()) {
            day = "Today";
        } else if(tasksDate.getFullYear() == now.getFullYear() && tasksDate.getMonth() == now.getMonth() && tasksDate.getDate() == (now.getDate() + 1)) {
            day = "Tomorrow";
        } else if(tasksDate.getFullYear() == now.getFullYear() && tasksDate.getMonth() == now.getMonth() && tasksDate.getDate() == (now.getDate() - 1)) {
            day = "Yesterday";
        } else {
            switch(tasksDate.getDay()) {
                case(0): 
                    day = "Sunday"
                    break;
                case(1): 
                    day = "Monday"
                    break;
                case(2): 
                    day = "Tuesday"
                    break;
                case(3): 
                    day = "Wednesday"
                    break;
                case(4): 
                    day = "Thursday"
                    break;
                case(5): 
                    day = "Friday"
                    break;
                case(6): 
                    day = "Saturday"
                    break;
            }
        }

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
            <div className = "TaskForDay__MainDiv">
                <div  className = "TaskForDay__Title">
                    <span>{day + ", " + month + " " + tasksDate.getDate()}</span>
                    <img className = {"priorityMenu__orderButton" + (isOpen) ? " priorityMenu__orderButtonUp" : ""} src = {upArrow}/>
                </div>
                {(this.state.isOpen) ? tasks : ""}
            </div>
        )
    }
}