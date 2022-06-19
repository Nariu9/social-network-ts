import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateType} from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


export const renderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root'));
}
