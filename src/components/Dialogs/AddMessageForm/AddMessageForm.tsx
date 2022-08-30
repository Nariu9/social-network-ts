import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';

export type FormDataType = {
    newMessageText: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter your message'} name={'newMessageText'} component={FormControl}
                   validate={[required, maxLength50]} FieldType={'textarea'}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export default reduxForm<FormDataType>({
    form: 'dialogAddMessageReduxForm'
})(AddMessageForm)