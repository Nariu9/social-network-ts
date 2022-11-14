import {UpdateProfileType} from '../../../../redux/profile-reducer';
import React from 'react';
import {createField, Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
// import classes from '../ProfileInfo.module.scss';
import styles from '../../../common/FormsControls/FormsControls.module.css'
import {Button} from '../../../common/Button/Button';
import classes from './ProfileDataForm.module.scss'


const ProfileDataForm: React.FC<InjectedFormProps<UpdateProfileType>> = ({handleSubmit, initialValues, error}) => {
    return <form onSubmit={handleSubmit} className={classes.profileForm}>
        <div>
            <div><b>Full name: </b> {createField('Full name', 'fullName', [], Input, 'input')}</div>
            <div><b>Looking for a job: </b>
                {createField('', 'lookingForAJob', [], Input, 'input', {type: 'checkbox'})}
            </div>
            <div><b>My skills: </b>
                {createField('My skills', 'lookingForAJobDescription', [], Input, 'input')}
            </div>
            <div><b>About me: </b>
                {createField('About me', 'aboutMe', [], Input, 'input')}
            </div>
            <Button title={'Save'}/>
        </div>
        <div>
            <b>Contacts</b>: {initialValues.contacts && Object.keys(initialValues.contacts).map((k) => <div
            key={k} className={classes.contact}>{createField(k, 'contacts.' + k, [], Input, 'input')}<b> {k}</b>
        </div>)}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm<UpdateProfileType>({
    form: 'edit-profile'
})(ProfileDataForm)