import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {RootState} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import classes from '../common/FormsControls/FormsControls.module.css';

const Login: React.FC<LoginPropsType> = ({loginTC, isAuth}) => {
    const onSubmit = (formData: FormDataType) => loginTC(formData.email, formData.password, formData.rememberMe)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'email'} component={FormControl} validate={[required]}
                   FieldType={'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={FormControl} validate={[required]}
                   type={'password'} FieldType={'input'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={FormControl} FieldType={'input'}/> remember me
        </div>
        {props.error && <div className={classes.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
}

type mapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

const mapStateToProps = (state: RootState): mapStateToPropsType => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {loginTC})(Login)