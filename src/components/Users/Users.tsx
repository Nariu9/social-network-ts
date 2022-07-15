import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import classes from "./Users.module.css";

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFvLzZ3fP-H6wwarV4QtowIqDEujp-IcNXA&usqp=CAU',
                followed: false,
                fullName: 'Dmitry',
                status: 'I\'m boss',
                location: {city: 'Tokyo', country: 'Japan'}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFvLzZ3fP-H6wwarV4QtowIqDEujp-IcNXA&usqp=CAU',
                followed: true,
                fullName: 'Alex',
                status: 'I\'m driving',
                location: {city: 'Hel', country: 'Poland'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFvLzZ3fP-H6wwarV4QtowIqDEujp-IcNXA&usqp=CAU',
                followed: false,
                fullName: 'Oleg',
                status: 'where am I ?',
                location: {city: 'Rome', country: 'Italy'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.userPhoto} alt="user photo"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;