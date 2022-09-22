import {UserType} from '../../redux/users-reducer';
import React from 'react';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';
import {Preloader} from '../common/Preloader/Preloader';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    isFetching: boolean
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
                                                    isFetching,
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
        {isFetching ? <Preloader/> : users.map(u => <User key={u.id} user={u}
                                                          followingInProgress={followingInProgress}
                                                          followThunkCreator={followThunkCreator}
                                                          unfollowThunkCreator={unfollowThunkCreator}/>)
        }</div>
}