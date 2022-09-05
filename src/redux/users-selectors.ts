import {RootState} from './redux-store';
import {createSelector} from 'reselect';
import {UserType} from './users-reducer';

const getUsersSelector = (state: RootState) => state.usersPage.users
export const getUsers = createSelector(getUsersSelector, (users: UserType[]) => {
    return users.filter(u => true)
})
export const getPageSize = (state: RootState) => state.usersPage.pageSize
export const getTotalUsersCount = (state: RootState) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: RootState) => state.usersPage.currentPage
export const getIsFetching = (state: RootState) => state.usersPage.isFetching
export const getFollowingInProgress = (state: RootState) => state.usersPage.followingInProgress