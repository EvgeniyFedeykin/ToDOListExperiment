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
            <div>
                <div />
                <div>
                    <input type = "text" value = {this.props.task.title}/>
                    <input type = "text" value = {this.props.task.description}/>
                    <div>
                        <div>
                            <img />
                            <SelectTaskPriority />
                        </div>
                        <div>
                            <img />
                            <SelectTaskTime />
                        </div>
                        <div>
                            <img />
                            <SelectTaskNotificationTime />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}