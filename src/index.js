import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
import { combineReducers, createStore } from 'redux'
import * as reducers from './reducers/carReducer'
import { Provider } from 'react-redux'

const mainReducer = combineReducers({
    count: reducers.countReducer
})

const store = createStore(mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
