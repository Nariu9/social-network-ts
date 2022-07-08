import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from './StoreContext';


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}><App/></Provider>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree()

store.subscribe(renderEntireTree)