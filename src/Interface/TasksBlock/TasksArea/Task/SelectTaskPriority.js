import React, {Component} from "react";
import { connect } from 'react-redux';

import * as actionCreators from "../../../../Store/ActionCreators";

class SelectTaskPriority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    _choosePriorityColor = (priorityId) => {

    }


    _buildPriorityChoices = () => {
        let choices = this.props.tasksPriorities.map((elem) => {
            <li>
                <span></span>
                <span>{elem.name}</span>
            </li>
        });
    return (<ul>{choices}</ul>)
    }

    render() {
        let priorityChoice;
        if(isOpen && !!selectedTask && (selectedTask == this.props.task.id)) {
            let priorityChoice = this._buildPriorityChoices();
        } else {
            priorityChoice = "";
        }
        return(
            <div>
                <span></span>
                <span>{this.props.priority.name}</span>
                {priorityChoice}
            </div>
        )
    }

    mapStateToProps = (state) => {
        return {
            selectedTask: state.selectedTask,
            priorities: state.tasksPriorities
        }
    } 
}