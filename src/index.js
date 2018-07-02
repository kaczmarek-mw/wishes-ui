import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from 'react-redux'
import store from './store';
import 'typeface-roboto';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, root);
