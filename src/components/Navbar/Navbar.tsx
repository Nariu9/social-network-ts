import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a href="#">Profile</a></div>
            <div className={`${classes.item} ${classes.active}`}><a href="#">Messages</a></div>
            <div className={classes.item}><a href="#">News</a></div>
            <div className={classes.item}><a href="#">Music</a></div>
            <div className={classes.item}><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar