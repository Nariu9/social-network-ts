import {usersAPI} from '../api/api';
import {AppThunk} from './redux-store';

export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location?: LocationType
}
export type UsersPageStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


const initialState: UsersPageStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageStateType = initialState, action: UsersActionsType): UsersPageStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS:
            return action.inProgress
                ? {...state, followingInProgress: [...state.followingInProgress, action.userID]}
                : {...state, followingInProgress: state.followingInProgress.filter(userID => userID !== action.userID)}
        default:
            return state;
    }
}

export type UsersActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (usersCount: number) => ({type: SET_TOTAL_USERS_COUNT, usersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleFollowingProgress = (inProgress: boolean, userID: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    inProgress,
    userID
}) as const

export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    });
}

export const followThunkCreator = (userId: number): AppThunk => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.followUser(userId)
        .then(data => {
            if (data.resultCode === 0) dispatch(followSuccess(userId))
            dispatch(toggleFollowingProgress(false, userId))
        });
}

export const unfollowThunkCreator = (userId: number): AppThunk => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollowUser(userId)
        .then(data => {
            if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
            dispatch(toggleFollowingProgress(false, userId))
        });
}