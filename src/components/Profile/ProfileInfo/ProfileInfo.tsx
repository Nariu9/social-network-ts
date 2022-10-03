import React, {ChangeEvent} from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import userPhoto from '../../../assets/images/userPhoto.jpg'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: null | ProfileType,
    status: string,
    updateStatus: (status: string) => void
    saveMainPhoto: (photo: File) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({isOwner, profile, status, updateStatus, saveMainPhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && saveMainPhoto(e.target.files[0])
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt="user" className={classes.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>Hi, my name is {profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                {profile.contacts && <div>Contacts:
                    <div>{profile.contacts.facebook}</div>
                    <div>{profile.contacts.website}</div>
                    <div>{profile.contacts.vk}</div>
                    <div>{profile.contacts.twitter}</div>
                    <div>{profile.contacts.instagram}</div>
                    <div>{profile.contacts.youtube}</div>
                    <div>{profile.contacts.github}</div>
                    <div>{profile.contacts.mainLink}</div>
                </div>}
                <div>Job preferences: {profile.lookingForAJobDescription}</div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo