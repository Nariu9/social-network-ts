import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import mainLogo from '../../assets/images/logo-vertical.svg'
import {BiPaperPlane, BiUser} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.topBlock}>
                <div className={classes.logo} style={{backgroundImage: `url(${mainLogo})`}}/>
                <div className={classes.card}>
                    <div className={classes.item}>
                        <NavLink to="/profile" activeClassName={classes.active}><BiUser className={classes.icon}/><span>Profile</span></NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/dialogs" activeClassName={classes.active}><span><BiPaperPlane className={classes.icon}/>Messages</span></NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/users" activeClassName={classes.active}><FiUsers className={classes.icon}/><span>Users</span></NavLink>
                    </div>
                </div>
            </div>
            <div className={classes.bottomBlock}/>
        </nav>
    )
}

export default Navbar