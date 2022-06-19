import {MessagePropsType, PostPropsType} from "../App";
import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
            {id: 3, message: 'Or it is not?', likesCount: 3},
            {id: 4, message: 'Hah...', likesCount: 0},
        ],
        newPostText: 'Hallo!'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Masha'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Ho'},
            {id: 3, message: 'Let\'s go'},
            {id: 4, message: 'Hi'},
            {id: 5, message: 'Hi'},
            {id: 6, message: 'Hi'}
        ],
        newMessageText: 'Hi dude'
    }
    /*sidebar:{}*/
}

export const addPost = () => {
    const newPost: PostPropsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    renderEntireTree(state)
}

export const addMessage = () => {
    const newMessage: MessagePropsType = {
        id: 7,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    renderEntireTree(state)
}

export const updateNewMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText
    renderEntireTree(state)
}

export default state