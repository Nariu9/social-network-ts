import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessagePropsType) => {
return <div className={classes.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Andrey'} id={2}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Sasha'} id={5}/>
                <DialogItem name={'Viktor'} id={6}/>
                <DialogItem name={'Masha'} id={7}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'Let\'s go'}/>
                <Message message={'Hi'}/>
                <Message message={'Hi'}/>
                <Message message={'Hi'}/>
            </div>
        </div>
    )
}

export default Dialogs