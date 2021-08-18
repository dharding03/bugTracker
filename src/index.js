import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import authSlice from "./Controllers/Redux/authReducer";
import bugSlice from "./Controllers/Redux/bugReducer";
import userSlice from "./Controllers/Redux/userReducer";

const reducer = combineReducers({
    auth: authSlice,
    bug: bugSlice,
    user: userSlice
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

