import classes from "../Dialogs.module.css";
import React from "react";

type TextPropsType = {
    message:string
}

export const Message = (props: TextPropsType) => {
    return <div className={classes.message}>{props.message}</div>
}