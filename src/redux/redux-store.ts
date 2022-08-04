import {combineReducers, compose, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';

//export type ActionType = ProfileActionType | DialogsActionsType | UsersActionsType    //типизация экшенов, возможно излишня
//export type ReduxStoreType = Store<ReduxStateType, ActionType>                        //типизация ReduxStore, возможно излишня
//export type ReduxStateType = ReturnType<RootState> // ReturnType что функция возвращает
//export type RootState = typeof rootReducer;  // типизация функции combineReducers

export type ReduxStateType = ReturnType<typeof rootReducer>  //короткая запись строк 10-11

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({   //один большой редьюсер
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers())

//@ts-ignore
window.store = store


export default store