import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={`${classes.dialog} ${classes.active}`}>Dimych</div>
                <div className={classes.dialog}>Andrey</div>
                <div className={classes.dialog}>Sveta</div>
                <div className={classes.dialog}>Sasha</div>
                <div className={classes.dialog}>Virtor</div>
                <div className={classes.dialog}>Masha</div>
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