import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import styles from '../../common/FormsControls/FormsControls.module.css';
import classes from './LoginForm.module.scss';
import icon from '../../../assets/icons/icon.svg';
import {Button} from '../../common/Button/Button';

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type CustomProps = {
    captchaUrl: string | null
}
const LoginForm: React.FC<CustomProps & InjectedFormProps<FormDataType, CustomProps>> = ({
                                                                                             handleSubmit,
                                                                                             error,
                                                                                             captchaUrl
                                                                                         }) => {
    return <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.header}>
            <div className={classes.icon} style={{backgroundImage: `url(${icon})`}}/>
            <h3 className={classes.title}>Welcome</h3>
            <p className={classes.subtitle}>Let's find some friends!</p>
        </div>
        {createField('Email', 'email', [required], Input, 'input')}
        {createField('Password', 'password', [required], Input, 'input', {type: 'password'})}
        <label><Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me</label>
        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl && createField('Symbols on picture', 'captcha', [required], Input, 'input')}
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <Button title={'Log into your account'}/>
        </div>
    </form>
}
export default reduxForm<FormDataType, CustomProps>({
    form: 'login'
})(LoginForm)