export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageStateType = {
    posts: Array<PostType>
    newPostText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'Or it is not?', likesCount: 3},
        {id: 4, message: 'Hah...', likesCount: 0},
    ],
    newPostText: 'Hallo!'
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
        default:
            return state;
    }
}

export type ProfileActionType = ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>

export const addPostCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextCreator = (newPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
}) as const