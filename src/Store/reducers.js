import { combineReducers } from 'redux';


const _ = require('lodash');

const Reducers = combineReducers(
    {
        RoutePath                  
    }
);


export default Reducers;


function RoutePath(state = "/sign_up", action) {
    console.log(state);
    switch(action.type) {
        case "setRoutePath":
            console.log("in reducer " + action.path);
            return action.path;
        default:
            console.log("in reducer " + state);
            return state;
    }
}