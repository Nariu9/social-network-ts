import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {ReduxStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    };

    return connect(mapStateToProps)(RedirectComponent)
}