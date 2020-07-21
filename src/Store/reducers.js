import { combineReducers } from 'redux';

const priorities = [
    {
        id : 0,
        name: "All"
    },
    {
        id : 1,
        name: "Urgently"
    },
    {
        id : 2,
        name: "Important"
    },
    {
        id : 3,
        name: "Normal"
    },
    {
        id : 4,
        name: "Neutral"
    }
];

const Reducers = combineReducers(
    {
        RoutePath,
        tasksPriorities,
        selectedPriority,
        priorityOrder          
    }
);


export default Reducers;


function RoutePath(state = { path: "/login", previousPath: "/login" }, action) {
    
    switch(action.type) {
        case "setRoutePath":
            return { 
                path: action.path,
                previousPath: action.previousPath
            };
        default:
            return state;
    }
}



function tasksPriorities(state = priorities, action) {
    
    switch(action.type) {
        case "tasksPriorities":
            return priorities;
        default:
            return state;
    }
}

export function selectedPriority(state = 0, action) {
    switch(action.type) {
        case "selectPriority" :
            return action.priorityId;
        default:
            return state;
    }
}

export function priorityOrder(state = "desc", action) {
    switch(action.type) {
        case "PriorityOrder" :
            return action.order;
        default:
            return state;
    }
}