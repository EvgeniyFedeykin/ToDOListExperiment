import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as actionCreators from "../Store/ActionCreators";

const _ = require('lodash');

const config = require("../../server/config.json");

const delay = (ms) => new Promise(res => setTimeout(res, ms))

//const url = "http://" + config.host + ":" + config.port;

const url = "http://localhost:" + config.port;

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": action.login,
        "password": action.password
      })
    });
    if (response.ok) { 
      //if(!_.isEmpty(json.email)) {
        let json = yield response.json();
        console.log(json);
        if(!_.isEmpty(json[0].email)) {
          localStorage.setItem("loggedUser", true);
          console.log("Пользователь " + json[0].email  + " залогинен: " + localStorage.getItem("loggedUser"));
          yield put(actionCreators.setRoutePath("/tasks", "/login"));
        }
    } else {
      throw("Ошибка HTTP: " + response.status);
    }
  } catch(error) {
    console.log(error);
  }
}

function* watchSignUp(){
  yield takeEvery('ASYNC_signUp',SignUp);
}

function* SignUp(action){
  try {
    console.log(url);
    console.log(action.login);
    console.log(action.password);
    let reqBody = {
      "email": action.login,
      "password": action.password
    };
    console.log(JSON.stringify(reqBody));
    let response = yield fetch(url + "/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    });
    if (response.ok) { 

      let json = response.json();
      //localStorage.setItem(json.email, "true");
      yield put(actionCreators.setRoutePath("/login", "/sign_up"));

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
      watchLogin(),
      watchSignUp()
    ])
  }

export default rootSaga;