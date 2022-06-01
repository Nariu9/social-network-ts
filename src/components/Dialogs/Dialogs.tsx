import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/1'} activeClassName={classes.active}>Dimych</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/2'} activeClassName={classes.active}>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/3'} activeClassName={classes.active}>Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/4'} activeClassName={classes.active}>Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/5'} activeClassName={classes.active}>Virtor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/6'} activeClassName={classes.active}>Masha</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Let's go</div>
            </div>
        </div>
    )
}

export default Dialogs