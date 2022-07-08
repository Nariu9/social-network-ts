import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




/*type PostsPropsType = {
    store: ReduxStoreType
}*/

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile