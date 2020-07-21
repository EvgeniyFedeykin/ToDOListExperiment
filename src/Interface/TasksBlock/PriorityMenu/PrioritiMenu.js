import React, {Component} from "react";
import { connect } from 'react-redux';

import * as actionCreators from "../../../Store/ActionCreators";

import logo from "../../../Data/Images/ic_add.png";
import arrow from "../../../Data/Images/ic_arrow_down@2x.png";



class PriorityMenu extends Component {
    constructor(props) {
        super(props);
        this.selectPriority = this.selectPriority.bind(this);
        this.changePriorityOrder = this.changePriorityOrder.bind(this);
    }
    

    selectPriority = (e) => {
        this.props.selectPriority(e.target.dataset.priorityid);
    }

    changePriorityOrder = () => {
        
        this.props.changePriorityOrder(((this.props.priorityOrder == "desc") ? "asc": "desc"));
    }

    render() {

        let priorities = this.props.priorities.map((item) => 
            <li key = {item.id} data-priorityid = {item.id} className = {"priorityMenu__priorityButton " + ((item.id == this.props.selectedId) ? "priorityMenu__priorityButtonActive" : "")} onClick = {this.selectPriority}>{item.name}</li>
        );
        priorities.push(<li key = {priorities.length + 1} className = "priorityMenu__priorityButton"><img src = {logo} /></li>);
        
        return(
            <div className = "priorityMenu__priorityMenu">
               <div className = "priorityMenu__priorityLogo" />
               <div className = "priorityMenu__priorityOrder">
                <span>Priority</span>
                <img src = {arrow} className = {"priorityMenu__orderButton " + ((this.props.priorityOrder == "desc") ? "" : "priorityMenu__orderButtonUp")} onClick = {this.changePriorityOrder}/>
               </div>
               <ul className = "priorityMenu__priorityList">
                    {priorities}
               </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        priorities: state.tasksPriorities,
        selectedId: state.selectedPriority,
        priorityOrder: state.priorityOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       selectPriority: (id) => dispatch(actionCreators.selectPriority(id)),
       changePriorityOrder: (order) => dispatch(actionCreators.changePriorityOrder(order))
    }
}

const containerPriorityMenu = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PriorityMenu);

export default containerPriorityMenu;