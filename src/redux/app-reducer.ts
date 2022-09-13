import {AppThunk} from './redux-store';
import {getAuthDataThunkCreator} from './auth-reducer';

const initialState = {
    initialized: false
}


export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state;
    }
}

// action creators
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

// thunk creators
export const initializeAppTC = (): AppThunk => (dispatch) => {
    const promise = dispatch(getAuthDataThunkCreator())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

// types
export type AppStateType = typeof initialState

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type AppActionsType = ReturnType<typeof initializedSuccess>