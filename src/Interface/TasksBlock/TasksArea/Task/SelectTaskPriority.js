import React, {Component} from "react";
import { connect } from 'react-redux';

const _ = require('lodash');

import * as actionCreators from "../../../../Store/ActionCreators";

class SelectTaskPriority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this._choosePriorityColor = this._choosePriorityColor.bind(this);
        this._buildPriorityChoices = this._buildPriorityChoices.bind(this);
        this.openPriorityChoices = this.openPriorityChoices.bind(this);
    }

    _choosePriorityColor = (priorityId) => {

    }


    _buildPriorityChoices = () => {
        let choices = this.props.priorities.map((elem) => {
            <li onClick = {selectPriority} data-priorityid = {elem.id}>
                <span></span>
                <span>{elem.name}</span>
            </li>
        });
    return (<ul>{choices}</ul>)
    }

    openPriorityChoices = () => {
        this.state ? this.setState({isOpen: false}) : this.setState({isOpen: true});
    }

    selectPriority = (e) => {
        let task = Object.assign({}, this.props.task);
        task.priority = e.target.dataset.priorityid;
        this.props.updateTask(task);
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
                <span onClick = {this.openPriorityChoices}>{this.props.priority.name}</span>
                {priorityChoice}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
            selectedTask: state.selectedTask,
            priorities: state.tasksPriorities,
            priority: _.find(state.tasksPriorities, (item) => {return item.id == state.selectedTask})
        }
    } 

const mapDispatchToProps = (dispatch) => {
        return {
            updateTask: (task) => dispatch(actionCreators.ASYNC_updateTask(task))
        }
    }


const containerSelectTaskPriority = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectTaskPriority);

export default containerSelectTaskPriority;