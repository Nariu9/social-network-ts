import {ActionType, DialogsPageStateType, MessagePropsType} from "./store";

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
}

export const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagePropsType = {
                id: 7,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE}) as const
export const updateNewMessageTextCreator = (newMessageText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
}) as const