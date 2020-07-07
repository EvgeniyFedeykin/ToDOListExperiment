import { combineReducers } from 'redux';


const _ = require('lodash');

const Reducers = combineReducers(
    {
        placeHolderForReducers                  
    }
);

function placeHolderForReducers(state = "test", action) {
    return state;
}

export default Reducers;