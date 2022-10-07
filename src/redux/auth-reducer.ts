import {authAPI, securityAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

// action creators
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean, captchaUrl: string | null = null) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth, captchaUrl}
} as const)

export const setCaptchaUrlAC = (captchaUrl: string) => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl}
} as const)

// thunk creators
export const getAuthDataThunkCreator = (): AppThunk => async (dispatch) => {
    const res = await authAPI.getMe()
    if (res.resultCode === 0) {
        const {id, login, email} = res.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthDataThunkCreator())
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrlTC())
            }
            const message = data.messages.length > 0 ? data.messages[0] : 'An error has occurred'
            dispatch(stopSubmit('login', {_error: message}))
        }
    });
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, ))
    }
}

export const getCaptchaUrlTC = (): AppThunk => async (dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    dispatch(setCaptchaUrlAC(res.url))
}

// types
export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

export type AuthActionsType =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setCaptchaUrlAC>