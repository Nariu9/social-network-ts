import {ActionType, DialogsPagePropsType, MessagePropsType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state: DialogsPagePropsType, action: ActionType) => {
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