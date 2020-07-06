import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers.js'
import createSagaMiddleware from 'redux-saga'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(Reducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run,
  }
}