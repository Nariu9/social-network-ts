import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator} from '../../../../utils/validators/validators';
import React from 'react';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import {Button} from '../../../common/Button/Button';
import classes from './PostsForm.module.scss';

const maxLength100 = maxLengthCreator(100)
export type FormDataType = {
    newPostText: string
}
const PostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit} className={classes.form}>
        <div>
            <Field name={'newPostText'} placeholder={'write a post'} component={Textarea}
                   validate={[maxLength100]} FieldType={'textarea'}/>
        </div>
        <div className={classes.btnWrapper}>
            <Button title={'Add post'}/>
        </div>
    </form>
}
export default reduxForm<FormDataType>({
    form: 'profileAddPostReduxForm'
})(PostsForm)