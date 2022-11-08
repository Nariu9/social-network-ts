import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {RootState} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import classes from '../common/FormsControls/FormsControls.module.css';
import styles from './Login.module.css';

const Login: React.FC<LoginPropsType> = ({loginTC, isAuth, captchaUrl}) => {
    const onSubmit = (formData: FormDataType) => loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={styles.container}>
        <div className={styles.form}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
        <div className={styles.credentials}>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'} rel={'noreferrer'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: <b>free@samuraijs.com</b></p>
            <p>Password: <b>free</b></p>
        </div>
    </div>
};

type FormDataType = {
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
    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', [required], Input, 'input')}
        {createField('Password', 'password', [required], Input, 'input', {type: 'password'})}
        {createField(null, 'rememberMe', [], Input, 'input', {type: 'checkbox'}, 'remember me')}

        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl && createField('Symbols on picture', 'captcha', [required], Input, 'input')}
        {error && <div className={classes.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType, CustomProps>({
    form: 'login'
})(LoginForm)

type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type mapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const mapStateToProps = (state: RootState): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginTC})(Login)