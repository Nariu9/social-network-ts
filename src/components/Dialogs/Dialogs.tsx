import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagePropsType} from "../../App";


type DialogsPropsType = {
    state: DialogsPagePropsType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const sendMessage = () => {
        props.addMessage()
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(event.currentTarget.value)
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