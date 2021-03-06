import React, {Component} from "react";
import { connect } from 'react-redux';

import TasksForDay from "./TasksForDay";

const _ = require('lodash');

function TaskArea(props) {
    let taskBlocks = [];
    if(!_.isEmpty(props.dates)) {
        props.dates.forEach(element => {
            let tasks = [];
            props.tasks.forEach((e) => {
                if(e.date == element) {
                    tasks.push(e);
                }
            })
        taskBlocks.push(<TasksForDay tasks = {tasks}/>)
    });
    }
    return (
        <div>
            {taskBlocks}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        tasks: state.Tasks,
        dates: state.Dates
    }
}


const containerTaskArea = connect(
    mapStateToProps,
    ""
  )(TaskArea);

export default TaskArea;