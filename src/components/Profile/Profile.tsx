import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageStateType} from "../../redux/store";


type PostsPropsType = {
    state: ProfilePageStateType
    dispatch: (action: ActionType) => void
}

const Profile = (props: PostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile