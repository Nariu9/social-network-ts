import {UserType} from '../../redux/users-reducer';
import React from 'react';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    onPageChanged: (page: number) => void
    followingInProgress: Array<number>
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}
export const Users: React.FC<UsersPropsType> = ({
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    users,
                                                    onPageChanged,
                                                    followingInProgress,
                                                    followThunkCreator,
                                                    unfollowThunkCreator
                                                }) => {

    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {users.map(u => <User key={u.id} user={u}
                              followingInProgress={followingInProgress}
                              followThunkCreator={followThunkCreator}
                              unfollowThunkCreator={unfollowThunkCreator}/>)
        }</div>
}