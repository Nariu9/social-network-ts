import {AppThunk} from './redux-store';
import {getAuthDataThunkCreator} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state;
    }
}

export type AppActionsType =
    ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) as const

export const initializeAppTC = (): AppThunk => (dispatch) => {
    const promise = dispatch(getAuthDataThunkCreator())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}