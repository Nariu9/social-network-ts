import {ActionType, PostPropsType, ProfilePageStateType} from "./store";

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

export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextCreator = (newPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
}) as const