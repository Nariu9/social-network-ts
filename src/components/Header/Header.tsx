import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = ({isAuth, login, logout}: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                alt="logo"/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header