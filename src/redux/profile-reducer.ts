import {profileAPI} from '../api/api';
import {AppThunk} from './redux-store';

const initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'Or it is not?', likesCount: 3},
        {id: 4, message: 'Hah...', likesCount: 0},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageStateType = initialState, action: ProfileActionType): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 5, message: action.newPost, likesCount: 0}, ...state.posts]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

// action creators
export const addPostCreator = (newPost: string) => ({type: ADD_POST, newPost} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccessAC = (photos: { small: string, large: string }) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
} as const)

// thunk creators
export const getUserProfileThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res))
}

export const getUserStatusThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(res))
}

export const updateUserStatusThunkCreator = (status: string): AppThunk => async (dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const saveMainPhotoTC = (photo: File): AppThunk => async (dispatch) => {
    const res = await profileAPI.savePhoto(photo)
    if (res.resultCode === 0) {
        dispatch(savePhotoSuccessAC(res.data.photos))
    }
}

// types
export type PostType = {
    id: number
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
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageStateType = {
    posts: Array<PostType>
    profile: ProfileType | null,
    status: string
}

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

export type ProfileActionType =
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccessAC>