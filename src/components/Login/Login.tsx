import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';

const Login = () => {
    const onSubmit = (formData: FormDataType) => console.log(formData)
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={FormControl} validate={[required]}
                   FieldType={'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={FormControl} validate={[required]}
                   FieldType={'input'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={FormControl} FieldType={'input'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)
