import React, {ChangeEvent, useRef, useState} from 'react';
import classes from './ProfileInfo.module.scss';
import {ProfileType, UpdateProfileType} from '../../../redux/profile-reducer';
import userPhoto from '../../../assets/images/userPhoto.jpg'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';
import {ProfileDataReduxForm} from './ProfileDataForm/ProfileDataForm';
import photo from '../../../assets/images/Cover_Sri.jpg'
import {MdPhotoCamera} from 'react-icons/md';
import {Button} from '../../common/Button/Button';

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
        return <Preloader inside/>
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
                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus}
                                   turnOnEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    )
}

export default ProfileInfo


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    status: string,
    updateStatus: (status: string) => void
    turnOnEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, status, updateStatus, turnOnEditMode}) => {
    return <>
        <div className={classes.personalInfo}>
            <h3>{profile.fullName}</h3>
            <ProfileStatusWithHooks status={status} isOwner={isOwner} updateStatus={updateStatus}/>
            <div><b>Available for hire:</b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div><b>My skills:</b> {profile.lookingForAJobDescription}</div>
            <div><b>About me:</b> {profile.aboutMe}</div>
            {isOwner && <Button title={'Edit profile'} callback={turnOnEditMode}/>}
        </div>
        {profile.contacts && Object.values(profile.contacts).some(value => value !== null)
            && <div className={classes.contacts}>
                <h3>Follow me</h3> {profile.contacts && Object.keys(profile.contacts).map((k) => {
                if (profile.contacts
                    && profile.contacts[k as keyof typeof profile.contacts] !== null
                    && profile.contacts[k as keyof typeof profile.contacts].trim() !== '') {
                    return <Contact
                        key={k}
                        contactTitle={k}
                        contactValue={profile.contacts[k as keyof typeof profile.contacts]}/>
                }
                return null
            })}
            </div>}
    </>
}

type ContactType = {
    contactTitle: string
    contactValue: string | undefined
}

export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}:</b> <a href={contactValue} target={'_blank'} rel={'noreferrer'}>{contactValue}</a></div>
}