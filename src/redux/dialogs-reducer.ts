import {ActionType} from "./store";

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsPageStateType = {      //первый вариант типизации
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

//export type DialogsPageStateType = typeof initialState  //второй вариант типизации

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState: DialogsPageStateType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Masha'}
    ] /*as DialogType[]*/,              //уточнение для второго варианта типизации
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Ho'},
        {id: 3, message: 'Let\'s go'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Hi'}
    ] /*as MessageType[]*/,             //уточнение для второго варианта типизации
    newMessageText: 'Hi dude'
}

export const dialogsReducer = (state: DialogsPageStateType = initialState, action: ActionType): DialogsPageStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, {id: 7, message: state.newMessageText}], newMessageText: ''}
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.newMessageText}
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE}) as const
export const updateNewMessageTextCreator = (newMessageText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
}) as const