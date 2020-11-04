import React, {Component} from "react";
import { connect } from 'react-redux';

import * as actionCreators from "../../../../Store/ActionCreators";

import SelectTaskTime from "./SelectTaskTime";
import SelectTaskPriority from "./SelectTaskPriority";
import SelectTaskNotificationTime from "./SelectTaskNotificationTime";

class Task extends Component {
    constructor(props) {
        super(props);
    }

    selectTask = (e) => {
        if(this.props.activeTask != this.props.task.id) this.props.selectTask(e.target.dataset.taskid);
    }

    render() {
        return (
            <div data-taskid = {this.props.task.id}  className = "Task__TaskDiv" onClick = {this.selectTask}>
                <div className = "Task__CheckBox"/>
                <div className = "Task__TaskBody">
                    <input type = "text" value = {this.props.task.title} className = "Task__TaskTitleInput"/>
                    <input type = "text" value = {this.props.task.description} className = "Task__TaskDescriptionInput"/>
                    <div className = "Task__ButtonBlock">
                        <SelectTaskPriority task = {this.props.task}/>
                        <SelectTaskTime />
                        <SelectTaskNotificationTime />
                    </div>
                </div>
                <div className = "Task__DeleteButton"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeTask: state.selectedTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       selectTask: (id) => dispatch(actionCreators.selectTask(id))
    }
}

const containerTask = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Task);

export default containerTask;