import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

// action creators
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
} as const)

// thunk creators
export const getAuthDataThunkCreator = (): AppThunk => async (dispatch) => {
    const res = await authAPI.getMe()
    if (res.resultCode === 0) {
        const {id, login, email} = res.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk =>  (dispatch) => {
    debugger
    authAPI.login(email, password, rememberMe).then(data => {
        debugger
        if (data.resultCode === 0) {
            dispatch(getAuthDataThunkCreator())
        } else {
            debugger
            const message = data.messages.length > 0 ? data.messages[0] : 'An error has occurred'
            dispatch(stopSubmit('login', {_error: message}))
        }
    });
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

// types
export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const SET_USER_DATA = 'auth/SET_USER_DATA';

export type AuthActionsType =
    ReturnType<typeof setAuthUserData>