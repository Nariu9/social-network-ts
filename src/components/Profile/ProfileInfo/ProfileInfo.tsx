import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import userPhoto from '../../../assets/images/userPhoto.jpg'
import {Preloader} from '../../common/Preloader/Preloader';

type ProfileInfoPropsType = {
    profile: null | ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/08/22/00/38/meadow-2667461_960_720.jpg" alt="bg"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="user"/>
                <div>Hi, my name is {props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>Contacts:
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.mainLink}</div>
                </div>
                <div>Job preferences: {props.profile.lookingForAJobDescription}</div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo