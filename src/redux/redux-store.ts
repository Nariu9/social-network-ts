import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';

/*export type ReduxStoreType = Store<EmptyObject & { profilePage: ProfilePagePropsType; dialogsPage: DialogsPagePropsType; sidebar: {}; }, any>*/
//типизация из подсказки TS при передаче store в App в файле index.tsx

//export type ReduxStoreType = Store<StateType, ActionType>
//типизация с использованием типа StateType от старого store из файла store.ts

//export type ActionType = ProfileActionType | DialogsActionsType | UsersActionsType    //типизация экшенов, возможно излишня
//export type ReduxStoreType = Store<ReduxStateType, ActionType>                        //типизация ReduxStore, возможно излишня
//export type ReduxStateType = ReturnType<RootState> // ReturnType что функция возвращает
//export type RootState = typeof rootReducer;  // типизация функции combineReducers

export type ReduxStateType = ReturnType<typeof rootReducer>  //короткая запись строк 15-16

const rootReducer = combineReducers({   //один большой редьюсер
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})

const store = createStore(rootReducer)     //возможно типизация store излишня

//@ts-ignore
window.store = store


export default store