import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    addMessageActionCreator,
    DialogsPagePropsType,
    updateNewMessageTextActionCreator
} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPagePropsType
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const sendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(event.currentTarget.value))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} value={props.state.newMessageText}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs