import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

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
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export type AuthActionsType =
    ReturnType<typeof setAuthUserData>


export const setAuthUserData = (userId: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {userId, login, email}
}) as const

export const getAuthDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.getMe().then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        });
    }
}
