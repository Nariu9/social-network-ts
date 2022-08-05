import {UserType} from '../../redux/users-reducer';
import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.jpg';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    onPageChanged: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    toggleFollowingProgress: (inProgress: boolean, userID: number) => void
    followingInProgress: Array<number>
}
export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) pages.push(i)
    }

    return <div>
        <div className={classes.pages}>
            {pages.map(p => <span key={p}
                                  onClick={() => props.onPageChanged(p)}
                                  className={props.currentPage === p ? classes.selectedPage : ''}>{p}</span>)}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}><img
                                src={u.photos.small ? u.photos.small : userPhoto}
                                className={classes.userPhoto} alt="user"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.includes(u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    usersAPI.unfollowUser(u.id).then(data => {
                                        if (data.resultCode === 0) props.unfollow(u.id)
                                        props.toggleFollowingProgress(false, u.id)
                                    });
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.includes(u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    usersAPI.followUser(u.id).then(data => {
                                        if (data.resultCode === 0) props.follow(u.id)
                                        props.toggleFollowingProgress(false, u.id)
                                    });
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
        }</div>
}