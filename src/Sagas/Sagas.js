import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as actionCreators from "../Store/ActionCreators";

const _ = require('lodash');

const config = require("../../server/config.json");

const delay = (ms) => new Promise(res => setTimeout(res, ms))

const url = config.host + config.port;

function* watchRequestPriority(){
  yield takeEvery('ASYNC_RequestPriority',requestPriority);
}

function* requestPriority(){
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
  yield put(actionCreators.tasksPriorities(priorities));
}

function* watchTasksPool(){
  yield takeEvery('ASYNC_tasksPool',tasksPool);
}

function* watchLogin(){
  yield takeEvery('ASYNC_login',Login);
}

function* Login(action){
  try {
    let response = yield fetch(url + "/login", {
      method: 'GET',
      body: JSON.stringify({
        login: action.login,
        password: action.password
      })
    });
    if (response.ok) { 
      let json = response.json();

    } else {
      throw("Ошибка HTTP: " + response.status);
    }
  } catch(error) {

  }
}

function* watchSignUp(){
  yield takeEvery('ASYNC_login',SignUp);
}

function* SignUp(action){
  try {
    let response = yield fetch(url + "/signup", {
      method: 'POST',
      body: JSON.stringify({
        login: action.login,
        password: action.password
      })
    });
    if (response.ok) { 
      let json = response.json();
      
    } else {
      throw("Ошибка HTTP: " + response.status);
    }
  } catch(error) {

  }
}

function* tasksPool(action) {
  try {
     console.log("")
  } catch (error) {
      console.log("")
  }
}

function* rootSaga() {
    yield all([
      watchRequestPriority(),
      watchTasksPool(),
      watchLogin()
    ])
  }

export default rootSaga;