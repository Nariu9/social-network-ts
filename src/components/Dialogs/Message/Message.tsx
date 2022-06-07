import classes from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    message: string
}
export const Message = (props: MessagePropsType) => {
    return <div className={classes.message}>{props.message}</div>
}