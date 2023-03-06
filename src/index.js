import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './app.js';
import store from './redux/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'
import 'font-awesome/css/font-awesome.min.css';
const FixTracker = document.getElementById('FixTracker')
window.onload = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        ,FixTracker
    );
};