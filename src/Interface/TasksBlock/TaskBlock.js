import React, {Component} from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import * as actionCreators from "../../Store/ActionCreators";

import PriorityMenu from "./PriorityMenu/PrioritiMenu";


class TasksBlock extends Component {
    constructor(props) {
        super(props);
        this.path = "/tasks";
        //this.setRoutePath = this.setRoutePath.bind(this);
    }


    render() {
        return(
            <div>
               {(this.path != this.props.path) ? <Redirect to = {this.props.path} /> : <span />}
                <PriorityMenu />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        path: state.RoutePath.path,
        //previousPath: state.RoutePath.previousPath
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
       setPath: (path, previousPath) => dispatch(actionCreators.setRoutePath(path, previousPath))
    }
}
*/
const containerTasksBlock = connect(
    mapStateToProps,
    "" //mapDispatchToProps
  )(TasksBlock);

export default containerTasksBlock;