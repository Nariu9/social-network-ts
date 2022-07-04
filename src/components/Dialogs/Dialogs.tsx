import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsPagePropsType} from "../../redux/store";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    state: DialogsPagePropsType
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageText = props.state.newMessageText

    const sendMessage = () => {
        props.dispatch(addMessageCreator())
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextCreator(event.currentTarget.value))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder={'Enter your message'} onChange={onMessageChange} value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs