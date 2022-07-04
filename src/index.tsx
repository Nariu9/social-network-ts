import React from 'react';
import store, {ReduxStateType} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = (state:ReduxStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    renderEntireTree(state)
})