import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://www.freepnglogos.com/uploads/ukraine-flag-png/circle-flag-of-ukraine-png-download-0.png"
                alt="logo"/>
        </header>
    )
}

export default Header