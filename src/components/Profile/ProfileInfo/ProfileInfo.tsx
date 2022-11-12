import React, {ChangeEvent, useRef, useState} from 'react';
import classes from './ProfileInfo.module.scss';
import {ProfileType, UpdateProfileType} from '../../../redux/profile-reducer';
import userPhoto from '../../../assets/images/userPhoto.jpg'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';
import {ProfileDataReduxForm} from './ProfileDataForm/ProfileDataForm';
import photo from '../../../assets/images/Cover_Sri.jpg'
import {MdPhotoCamera} from 'react-icons/md';

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: null | ProfileType,
    status: string,
    updateStatus: (status: string) => void
    saveMainPhoto: (photo: File) => void
    saveProfile: (profile: UpdateProfileType) => Promise<any>
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         isOwner,
                                                         profile,
                                                         status,
                                                         updateStatus,
                                                         saveMainPhoto,
                                                         saveProfile
                                                     }) => {

    const [editMode, setEditMode] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && saveMainPhoto(e.target.files[0])
    }
    const onSubmit = (formData: UpdateProfileType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={classes.profileInfo}>
            <img src={`${photo}`} alt="field" className={classes.mainPhoto}/>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatarBlock}>
                    <img src={profile.photos!.large || userPhoto} alt="user"
                         className={classes.avatar}/>
                    {isOwner && <div className={classes.circle}><MdPhotoCamera onClick={selectFileHandler}/></div>}
                    {isOwner &&
                        <input type="file" ref={inputRef} onChange={onMainPhotoSelected} style={{display: 'none'}}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} turnOnEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    )
}

export default ProfileInfo


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    turnOnEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, turnOnEditMode}) => {
    return <div>
        <div>{profile.fullName} {isOwner &&
            <button onClick={turnOnEditMode}>Edit profile</button>}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        <div><b>My skills</b>: {profile.lookingForAJobDescription}</div>
        <div>{profile.aboutMe}</div>
        <div><b>Contacts</b>: {profile.contacts && Object.keys(profile.contacts).map((k) => <Contact
            key={k} contactTitle={k}
            contactValue={profile.contacts && profile.contacts[k as keyof typeof profile.contacts]}/>)}
        </div>
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue: string | undefined
}

export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}