// import {addPostCreator, profileReducer, updateNewPostTextCreator} from "./profile-reducer"; закомментил на 76 уроке
// import {addMessageCreator, dialogsReducer, updateNewMessageTextCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: any) => void
    //dispatch: (action: ActionType) => void    //ошибка появилась после того как вынес типы экшенов в редьюсеры, пришлось поставить any
}

type StateType = {
    profilePage: ProfilePageStateType
    dialogsPage: DialogsPageStateType
    sidebar:{}
}

type ProfilePageStateType = {
    posts: Array<PostPropsType>
    newPostText: string
}

type DialogsPageStateType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
}

type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

type DialogPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    id: number
    message: string
}

/*type ActionType = закомментил на 76 уроке
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof addMessageCreator>
    | ReturnType<typeof updateNewMessageTextCreator> */

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'Or it is not?', likesCount: 3},
                {id: 4, message: 'Hah...', likesCount: 0},
            ],
            newPostText: 'Hallo!'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Masha'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Ho'},
                {id: 3, message: 'Let\'s go'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Hi'},
                {id: 6, message: 'Hi'}
            ],
            newMessageText: 'Hi dude'
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        // @ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action) закомментил на 76 уроке
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store