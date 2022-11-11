import React from 'react';
import classes from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import {Button} from '../common/Button/Button';
import {FaUserCircle} from 'react-icons/fa';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = ({isAuth, login, logout}: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            {isAuth
                ? <div className={classes.loginBlock}>
                    <div className={classes.login}>
                        <FaUserCircle className={classes.icon}/> {login}
                    </div>
                    <Button title={'Log out'} callback={logout}/>
                </div>
                : <NavLink to={'/login'} className={classes.link}>Login</NavLink>}
        </header>
    )
}

export default Header