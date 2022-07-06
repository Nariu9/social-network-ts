import React from "react";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    store: ReduxStoreType
}

const MyPostsContainer = (props: MyPostsPropsType) => {

    const state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostCreator())
    }
    const onPostChange = (text: string) => {
        const action = updateNewPostTextCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    updateNewPostText={onPostChange}/>
}

export default MyPostsContainer