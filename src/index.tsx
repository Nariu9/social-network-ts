import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
    {id: 3, message: 'Or it is not?', likesCount: 3},
    {id: 4, message: 'Hah...', likesCount: 0},
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Masha'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Ho'},
    {id: 3, message: 'Let\'s go'},
    {id: 4, message: 'Hi'},
    {id: 5, message: 'Hi'},
    {id: 6, message: 'Hi'}
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);