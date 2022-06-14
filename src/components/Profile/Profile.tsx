import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../App";


type PostsPropsType = {
    state: ProfilePagePropsType
    addPost:(postMessage: string)=>void
}

const Profile = (props: PostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile