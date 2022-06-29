import React from 'react';
import store, {StateType} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)