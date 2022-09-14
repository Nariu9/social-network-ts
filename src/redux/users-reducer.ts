import {FollowUnfollowAPIMethodsType, usersAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/helpers/object-helpers';

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
            return {...state, users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})}
        case UNFOLLOW:
            return {...state, users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})}
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

// action creators
export const followSuccess = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (usersCount: number) => ({type: SET_TOTAL_USERS_COUNT, usersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (inProgress: boolean, userID: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    inProgress,
    userID
} as const)

// util functions
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: FollowUnfollowAPIMethodsType, actionCreator: FollowUnfollowACType) => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(toggleFollowingProgress(false, userId))
}

// thunk creators
export const requestUsersTC = (page: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const res = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
    dispatch(setTotalUsersCount(res.totalCount))
}

export const followThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
}

export const unfollowThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}

// types
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

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS';

type FollowUnfollowACType = typeof followSuccess | typeof unfollowSuccess
export type UsersActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>