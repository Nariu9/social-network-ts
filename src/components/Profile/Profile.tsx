import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from '../../redux/profile-reducer';


type ProfilePropsType = {
    isOwner: boolean
    profile: null | ProfileType,
    status: string,
    updateStatus: (status: string) => void
    saveMainPhoto: (photo: File) => void
}

const Profile: React.FC<ProfilePropsType> = ({isOwner, profile, status, updateStatus, saveMainPhoto}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} saveMainPhoto={saveMainPhoto}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile