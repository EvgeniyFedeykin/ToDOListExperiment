import { combineReducers } from 'redux';


const _ = require('lodash');

const Reducers = combineReducers(
    {
        RoutePath                  
    }
);


export default Reducers;


function RoutePath(state = "/login", action) {
    console.log(action.path);
    switch(action.type) {
        case "setRoutePath":
            return action.path;
        default:
            return state;
    }
}