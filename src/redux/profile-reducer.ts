export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}
export type ProfilePageStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'Or it is not?', likesCount: 3},
        {id: 4, message: 'Hah...', likesCount: 0},
    ],
    newPostText: 'Hallo!',
    profile: null
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
        default:
            return state;
    }
}

export type ProfileActionType = ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof setUserProfile>

export const addPostCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextCreator = (newPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const