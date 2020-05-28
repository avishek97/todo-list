import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import todo from "./reducers/todo";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

export const store = createStore(
    todo,
    applyMiddleware(logger)
  )

ReactDOM.render(<Provider store={store}><Todo/></Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
