import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType, UpdateProfileType} from '../../redux/profile-reducer';


type ProfilePropsType = {
    isOwner: boolean
    profile: null | ProfileType,
    status: string,
    updateStatus: (status: string) => void
    saveMainPhoto: (photo: File) => void
    saveProfile: (profile: UpdateProfileType) => Promise<any>
}

const Profile: React.FC<ProfilePropsType> = ({isOwner, profile, status, updateStatus, saveMainPhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus}
                         saveMainPhoto={saveMainPhoto} saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile