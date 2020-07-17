import { combineReducers } from 'redux';


const Reducers = combineReducers(
    {
        RoutePath,
        tasksPriorities              
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

function tasksPriorities(state = [], action) {
    
    switch(action.type) {
        case "tasksPriorities":
            return priorities;
        default:
            return state;
    }
}

export function selectedPriority(state = 1, action) {
    switch(action.type) {
        case "selectPriority" :
            return action.priorityId;
        default:
            return state;
    }
}