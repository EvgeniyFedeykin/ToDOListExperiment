import { combineReducers } from 'redux';


const _ = require('lodash');

const Reducers = combineReducers(
    {
        RoutePath                  
    }
);


export default Reducers;


function RoutePath(state = { path: "/login", previousPath: "/login" }, action) {
    console.log(action.path);
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