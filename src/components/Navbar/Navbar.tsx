import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import mainLogo from '../../assets/icons/logo-vertical.svg'
import {BiPaperPlane, BiUser} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.topBlock}>
                <img className={classes.logo} src={mainLogo} alt={'logo'}/>
                <div className={classes.card}>
                    <div className={classes.item}>
                        <NavLink to="/profile" activeClassName={classes.active}><BiUser className={classes.icon}/><span>Profile</span></NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/dialogs" activeClassName={classes.active}><BiPaperPlane className={classes.icon}/><span>Messages</span></NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/users" activeClassName={classes.active}><FiUsers className={classes.icon}/><span>Users</span></NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar