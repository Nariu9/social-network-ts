import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null,
    status: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'Or it is not?', likesCount: 3},
        {id: 4, message: 'Hah...', likesCount: 0},
    ],
    newPostText: 'Hallo!',
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageStateType = initialState, action: ProfileActionType): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export type ProfileActionType = ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

export const addPostCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextCreator = (newPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setUserStatus = (status: string) => ({type: SET_STATUS, status}) as const

export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}

export const getUserStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data))
        });
    }
}

export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        });
    }
}