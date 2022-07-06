import React from "react";
import {ReduxStoreType} from "../../redux/redux-store";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: ReduxStoreType
}

const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState()
    const sendMessage = () => {
        props.store.dispatch(addMessageCreator())
    }
    const onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return <Dialogs state={state.dialogsPage} addMessage={sendMessage} updateNewMessageText={onMessageChange}/>
}

export default DialogsContainer