import React, {Component} from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import * as actionCreators from "../../Store/ActionCreators";



class TasksBlock extends Component {
    constructor(props) {
        super(props);
        this.path = "/change_password";
        this.setRoutePath = this.setRoutePath.bind(this);
    }


    render() {
        return(
            <div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        path: state.RoutePath.path,
        previousPath: state.RoutePath.previousPath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       setPath: (path, previousPath) => dispatch(actionCreators.setRoutePath(path, previousPath))
    }
}

const containerTasksBlock = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassword);

export default TasksBlock;