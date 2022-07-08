import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState()

                const sendMessage = () => store.dispatch(addMessageCreator())
                const onMessageChange = (text: string) => store.dispatch(updateNewMessageTextCreator(text))

                return <Dialogs state={state.dialogsPage}
                                addMessage={sendMessage}
                                updateNewMessageText={onMessageChange}/>
            }
        }</StoreContext.Consumer>
    )
}

export default DialogsContainer