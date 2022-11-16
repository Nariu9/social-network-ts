import {profileAPI} from '../api/api';
import {AppThunk, RootState} from './redux-store';
import {reset, stopSubmit} from 'redux-form';
import {handleServerAppError, handleServerNetworkError} from '../utils/errors/errorHandlers';
import {showToast} from '../utils/helpers/showToast';
import {AxiosError} from 'axios';
import {v1} from 'uuid';

const initialState: ProfilePageStateType = {
    posts: [
        {
            id: v1(),
            message: 'In software, the most beautiful code, the most beautiful functions, and the most beautiful programs are sometimes not there at all.',
            likesCount: 11
        },
        {
            id: v1(),
            message: 'Programming isn\'t about what you know; it\'s about what you can figure out.',
            likesCount: 6
        },
        {id: v1(), message: 'One man’s crappy software is another man’s full time job.', likesCount: 28},
        {id: v1(), message: 'Testing leads to failure, and failure leads to understanding.', likesCount: 18},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageStateType = initialState, action: ProfileActionType): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: v1(), message: action.newPost, likesCount: 0}, ...state.posts]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        case SAVE_PROFILE_SUCCESS:
            return {...state, profile: {...state.profile, ...action.profile}}
        default:
            return state;
    }
}

// action creators
export const addPostAC = (newPost: string) => ({type: ADD_POST, newPost} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePostAC = (postId: string) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccessAC = (photos: { small: string, large: string }) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
} as const)
export const saveProfileSuccessAC = (profile: UpdateProfileType) => ({type: SAVE_PROFILE_SUCCESS, profile} as const)

// thunk creators
export const getUserProfileTC = (userId: number): AppThunk => async (dispatch) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res))
}

export const getUserStatusThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(res))
}

export const updateUserStatusThunkCreator = (status: string): AppThunk => async (dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status)
        if (res.resultCode === 0) {
            dispatch(setUserStatus(status))
            showToast('success', 'Status changed successfully')
        } else {
            handleServerAppError(res)
        }
    } catch (e) {
        const error = e as AxiosError
        handleServerNetworkError(error)
    }
}

export const saveMainPhotoTC = (photo: File): AppThunk => async (dispatch) => {
    try {
        const res = await profileAPI.savePhoto(photo)
        if (res.resultCode === 0) {
            dispatch(savePhotoSuccessAC(res.data.photos))
        } else {
            handleServerAppError(res)
        }
    } catch (e) {
        const error = e as AxiosError
        handleServerNetworkError(error)
    }
}

export const saveProfileTC = (profile: UpdateProfileType): AppThunk => async (dispatch, getState: () => RootState) => {
    const userId = getState().auth.id
    try {
        const res = await profileAPI.saveProfile(profile)
        if (res.resultCode === 0) {
            dispatch(saveProfileSuccessAC(profile))
            userId && dispatch(getUserProfileTC(userId))
        } else {
            dispatch(stopSubmit('edit-profile', {_error: res.messages[0]}))
            handleServerAppError(res)
            return Promise.reject(res.messages[0])
        }
    } catch (e) {
        const error = e as AxiosError
        handleServerNetworkError(error)
    }
}

export const addPostTC = (newPost: string): AppThunk => (dispatch) => {
    dispatch(addPostAC(newPost))
    dispatch(reset('profileAddPostReduxForm'))
}

// types
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe?: string
    contacts?: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos?: {
        small: string
        large: string
    }
}
export type ProfilePageStateType = {
    posts: Array<PostType>
    profile: ProfileType | null,
    status: string
}
export type UpdateProfileType = Omit<ProfileType, 'photos'>

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'profile/SAVE_PROFILE_SUCCESS';

export type ProfileActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccessAC>
    | ReturnType<typeof saveProfileSuccessAC>