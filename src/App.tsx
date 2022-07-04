import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Redirect, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ReduxStoreType} from "./redux/redux-store";

type AppPropsType = {
    store: ReduxStoreType
}

function App(props: AppPropsType) {

    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs state={state.dialogsPage}
                                                                dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path={'/profile'} render={() => <Profile state={state.profilePage}
                                                                dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
