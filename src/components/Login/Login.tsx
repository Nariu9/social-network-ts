import React from 'react';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {RootState} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import classes from './Login.module.scss';
import LoginForm, {FormDataType} from './LoginForm/LoginForm';

const Login: React.FC<LoginPropsType> = ({loginTC, isAuth, captchaUrl}) => {
    const onSubmit = (formData: FormDataType) => loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={classes.container}>
        <div className={classes.login}>
            <div className={classes.credentials}>
                <h3 className={classes.title}>Join the network</h3>
                <p className={classes.subtitle}>A place to share your thoughts <br/> and make new connections</p>
                <div>
                    <p className={classes.text}>To log in please use common <br/> test account credentials:</p>
                    <p><b>Email:</b> free@samuraijs.com <br/> <b>Password:</b> free</p>
                </div>
            </div>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    </div>
};

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