import React, {Component} from "react";
import { connect } from 'react-redux';

import SelectTaskTime from "./SelectTaskTime";
import SelectTaskPriority from "./SelectTaskPriority";
import SelectTaskNotificationTime from "./SelectTaskNotificationTime";

class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "Task__TaskDiv">
                <div className = "Task__CheckBox"/>
                <div className = "Task__TaskBody">
                    <input type = "text" value = {this.props.task.title} className = "Task__TaskTitleInput"/>
                    <input type = "text" value = {this.props.task.description} className = "Task__TaskDescriptionInput"/>
                    <div className = "Task__ButtonBlock">
                        <SelectTaskPriority />
                        <SelectTaskTime />
                        <SelectTaskNotificationTime />
                    </div>
                </div>
                <div className = "Task__DeleteButton"/>
            </div>
        )
    }
}

export default Task;