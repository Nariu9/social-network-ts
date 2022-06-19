import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type AppPropsType = {
    state: StateType
    addPost:()=>void
    updateNewPostText:(newPostText: string)=>void
    addMessage:()=>void
    updateNewMessageText:(newMessageText: string)=>void
}

export type StateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}

export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText:string
}

export type DialogsPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText:string
}

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogPropsType = {
    id: number
    name: string
}

export type MessagePropsType = {
    id: number
    message: string
}

function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path={'/profile'} render={() => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
