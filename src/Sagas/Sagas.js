import { put, takeEvery, all, call } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* watchRequestChapterTacticsList(){
  yield console.log("test");
}



function* rootSaga() {
    yield all([
      watchRequestChapterTacticsList()
    ])
  }

export default rootSaga;