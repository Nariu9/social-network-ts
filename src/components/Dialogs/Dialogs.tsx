import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagePropsType} from "../../App";


type DialogsPropsType = {
    state: DialogsPagePropsType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
      alert(newMessageElement.current?.value)
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs