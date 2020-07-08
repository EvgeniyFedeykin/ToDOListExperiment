import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Application from './App.js'
import rootSaga from './Sagas/Sagas.js'
import configureStore from './store/configureStore'
//import "../src/Interface/bootstrap.css";

const store = configureStore()

store.runSaga(rootSaga)


ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>, 
    document.getElementById('root')
    )