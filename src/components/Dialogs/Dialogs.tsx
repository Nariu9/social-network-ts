import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (formData: FormDataType) => {
        props.addMessage(formData.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs

type FormDataType = {
    newMessageText: string
}

const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter your message'} name={'newMessageText'} component={'textarea'}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMessageReduxForm'
})(DialogsForm)