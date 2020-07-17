import React, {Component} from "react";
import { connect } from 'react-redux';

import * as actionCreators from "../../../Store/ActionCreators";



class PriorityMenu extends Component {
    constructor(props) {
        super(props);
        this.selectPriority = this.selectPriority.bind(this);
    }

    selectPriority = (e) => {
        this.props.selectPriority(e.target.dataset.priorityId);
    }

    render() {

        let priorities = this.props.priorities.map((item) => 
            <li key = {item.id} data-priorityId = {item.id} className = {"priorityButton " + (item.id == this.props.selectedId) ? "priorityButtonActive" : ""}>{item.name}</li>
        );
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