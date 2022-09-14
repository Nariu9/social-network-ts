import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import userPhoto from '../../../assets/images/userPhoto.jpg'
import {Preloader} from '../../common/Preloader/Preloader';
// import {ProfileStatus} from './ProfileStatus';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: null | ProfileType,
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : userPhoto} alt="user"/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>Hi, my name is {profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>Contacts:
                    <div>{profile.contacts.facebook}</div>
                    <div>{profile.contacts.website}</div>
                    <div>{profile.contacts.vk}</div>
                    <div>{profile.contacts.twitter}</div>
                    <div>{profile.contacts.instagram}</div>
                    <div>{profile.contacts.youtube}</div>
                    <div>{profile.contacts.github}</div>
                    <div>{profile.contacts.mainLink}</div>
                </div>
                <div>Job preferences: {profile.lookingForAJobDescription}</div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo