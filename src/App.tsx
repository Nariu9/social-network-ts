import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {initializeAppTC} from './redux/app-reducer';
import store, {RootState} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <div className={'preloader'}><Preloader inside={false}/></div>
        }

        return (
            <>
                <Switch>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <>
                        <div className="wrapper">
                            <HeaderContainer/>
                            <Navbar/>
                            <div className="content">
                                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                                <React.Suspense fallback={<Preloader inside/>}>
                                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                                </React.Suspense>
                            </div>
                        </div>
                    </>
                </Switch>
                <ToastContainer/>
            </>
        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeAppTC: () => void
}
type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeAppTC})(App);

const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp