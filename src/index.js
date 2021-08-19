import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import authReducer from "./Frontend/Controllers/Redux/authReducer";
import bugReducer from "./Frontend/Controllers/Redux/bugReducer";
import userReducer from "./Frontend/Controllers/Redux/userReducer";

const reducer = combineReducers({
    auth: authReducer,
    bugs: bugReducer,
    user: userReducer
})

const store = configureStore({
    reducer
})

ReactDOM.render(
    <Provider store={store}>
    <App />,
    </Provider>,
  document.getElementById('root')
);

