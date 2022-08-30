import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

const SET_USER_DATA = 'SET_USER_DATA';

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}


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

export type AuthActionsType =
    ReturnType<typeof setAuthUserData>


export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
}) as const

export const getAuthDataThunkCreator = (): AppThunk => (dispatch) => {
    authAPI.getMe().then(data => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    });
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthDataThunkCreator())
        }
    });
}

export const logoutTC = (): AppThunk => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}