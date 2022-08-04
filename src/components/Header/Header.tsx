import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

const Header = ({isAuth, login}: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img
                src="https://www.freepnglogos.com/uploads/ukraine-flag-png/circle-flag-of-ukraine-png-download-0.png"
                alt="logo"/>
            <div className={classes.loginBlock}>
                {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header