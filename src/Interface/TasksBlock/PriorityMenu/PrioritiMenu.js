import React, {Component} from "react";
import { connect } from 'react-redux';

import * as actionCreators from "../../../Store/ActionCreators";



class PriorityMenu extends Component {
    constructor(props) {
        super(props);
        this.selectPriority = this.selectPriority.bind(this);
    }

    selectPriority = (e) => {

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