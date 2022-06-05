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

    let dialogsData = [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Viktor'},
        {id:6, name:'Masha'}
    ]

    let messagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'Ho'},
        {id:3, message:'Let\'s go'},
        {id:4, message:'Hi'},
        {id:5, message:'Hi'},
        {id:6, message:'Hi'}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>

            </div>
        </div>
    )
}

export default Dialogs