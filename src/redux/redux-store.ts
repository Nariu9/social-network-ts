import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {ActionType} from "./store";

/*export type ReduxStoreType = Store<EmptyObject & { profilePage: ProfilePagePropsType; dialogsPage: DialogsPagePropsType; sidebar: {}; }, any>*/
//типизация из подсказки TS при передаче store в App в файле index.tsx

//export type ReduxStoreType = Store<StateType, ActionType>
//типизация с использованием типа StateType от старого store из файла store.ts

export type ReduxStoreType = Store<ReduxStateType, ActionType>
export type ReduxStateType = ReturnType<RootState> // ReturnType что функция возвращает
export type RootState = typeof reducers;  // типизация функции combineReducers

// export type ReduxStateType = ReturnType<typeof reducers> короткая запись строк 14-15


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

const store: ReduxStoreType = createStore(reducers)     //возможно типизация store излишня

export default store