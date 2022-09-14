import React from 'react';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../assets/images/userPhoto.jpg';
import classes from '../Users.module.css';
import {UserType} from '../../../redux/users-reducer';

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}
export const User: React.FC<UserPropsType> = ({
                                                  user,
                                                  followingInProgress,
                                                  followThunkCreator,
                                                  unfollowThunkCreator
                                              }) => {
    return <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}><img
                                src={user.photos.small ? user.photos.small : userPhoto}
                                className={classes.userPhoto} alt="user"/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.includes(user.id)} onClick={() => {
                                    unfollowThunkCreator(user.id)
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress.includes(user.id)} onClick={() => {
                                    followThunkCreator(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
        <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
    </div>
}