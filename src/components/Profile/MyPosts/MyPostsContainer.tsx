import React from "react";
import MyPosts from "./MyPosts";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (<StoreContext.Consumer>{
        (store) => {
            const state = store.getState()

            const addPost = () => store.dispatch(addPostCreator())
            const onPostChange = (text: string) => {
                const action = updateNewPostTextCreator(text)
                store.dispatch(action)
            }

            return <MyPosts posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            addPost={addPost}
                            updateNewPostText={onPostChange}/>
        }
    }</StoreContext.Consumer>)
}

export default MyPostsContainer