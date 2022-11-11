import {UpdateProfileType} from '../../../../redux/profile-reducer';
import React from 'react';
import {createField, Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import classes from '../ProfileInfo.module.scss';
import styles from '../../../common/FormsControls/FormsControls.module.css'


const ProfileDataForm: React.FC<InjectedFormProps<UpdateProfileType>> = ({handleSubmit, initialValues, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><b>Full name</b>: {createField('Full name', 'fullName', [], Input, 'input')}</div>
        <div><b>Looking for a job</b>:
            {createField('', 'lookingForAJob', [], Input, 'input', {type: 'checkbox'}, 'looking for a job')}
        </div>
        <div><b>My skills</b>:
            {createField('My skills', 'lookingForAJobDescription', [], Textarea, 'textarea')}
        </div>
        <div><b>About me</b>:
            {createField('About me', 'aboutMe', [], Textarea, 'textarea')}
        </div>
        <div>
            <b>Contacts</b>: {initialValues.contacts && Object.keys(initialValues.contacts).map((k) => <div
            key={k} className={classes.contact}><b>{k}: {createField(k, 'contacts.' + k, [], Input, 'input')}</b>
        </div>)}
        </div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Save</button>
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm<UpdateProfileType>({
    form: 'edit-profile'
})(ProfileDataForm)