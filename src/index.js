import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';
import  createSagaMiddleware  from 'redux-saga';
import {watchAgeUp} from './sagas';
const sagaMiddleware =createSagaMiddleware();

//sagaMiddleware.run();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
  
  );

  sagaMiddleware.run(watchAgeUp);
//const store=createStore
//Store

//Action


//Reducer

//Dispatch 

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
