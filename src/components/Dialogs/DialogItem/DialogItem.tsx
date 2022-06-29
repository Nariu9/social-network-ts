import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPropsType} from "../../../redux/state";


export const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}