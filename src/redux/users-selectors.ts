import {RootState} from './redux-store';

export const getUsers = (state: RootState) => state.usersPage.users
export const getPageSize = (state: RootState) => state.usersPage.pageSize
export const getTotalUsersCount = (state: RootState) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: RootState) => state.usersPage.currentPage
export const getIsFetching = (state: RootState) => state.usersPage.isFetching
export const getFollowingInProgress = (state: RootState) => state.usersPage.followingInProgress


