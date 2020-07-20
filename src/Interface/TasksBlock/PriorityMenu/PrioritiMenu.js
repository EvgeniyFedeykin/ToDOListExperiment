import React, {Component} from "react";
import { connect } from 'react-redux';

import * as actionCreators from "../../../Store/ActionCreators";

import logo from "../../../Data/Images/ic_add.png";



class PriorityMenu extends Component {
    constructor(props) {
        super(props);
        this.selectPriority = this.selectPriority.bind(this);
    }

    selectPriority = (e) => {
        this.props.selectPriority(e.target.dataset.priorityid);
    }

    render() {

        let priorities = this.props.priorities.map((item) => 
            <li key = {item.id} data-priorityid = {item.id} className = {"priorityButton " + ((item.id == this.props.selectedId) ? "priorityButtonActive" : "")} onClick = {this.selectPriority}>{item.name}</li>
        );
        priorities.push(<li key = {priorities.length + 1} className = "priorityButton"><img src = {logo} /></li>);
        return(
            <div className = "priorityMenu">
               <div className = "priorityLogo"></div>
               <ul className = "priorityList">
                    {priorities}
               </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        priorities: state.tasksPriorities,
        selectedId: state.selectedPriority
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       selectPriority: (id) => dispatch(actionCreators.selectPriority(id))
    }
}

const containerPriorityMenu = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PriorityMenu);

export default containerPriorityMenu;