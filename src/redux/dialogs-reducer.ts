import {v1} from 'uuid';
import {AppThunk} from './redux-store';
import {reset} from 'redux-form';

const initialState: DialogsPageStateType = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Masha'}
    ] /*as DialogType[]*/,              //уточнение для второго варианта типизации
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Ho'},
        {id: v1(), message: 'Let\'s go'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'}
    ] /*as MessageType[]*/,             //уточнение для второго варианта типизации
}

export const dialogsReducer = (state: DialogsPageStateType = initialState, action: DialogsActionsType): DialogsPageStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, {id: v1(), message: action.newMessage}]}
        default:
            return state;
    }
}

// action creators
export const addMessageAC = (newMessage: string) => ({type: ADD_MESSAGE, newMessage} as const)

//thunk creators
export const addMessageTC = (newMessage: string): AppThunk => (dispatch) => {
    dispatch(addMessageAC(newMessage))
    dispatch(reset('dialogAddMessageReduxForm'))
}

// types
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsPageStateType = {      //первый вариант типизации
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
//export type DialogsPageStateType = typeof initialState  //второй вариант типизации

const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

export type DialogsActionsType = ReturnType<typeof addMessageAC>