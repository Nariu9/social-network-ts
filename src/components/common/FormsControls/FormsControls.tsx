import React from 'react';
import classes from './FormsControls.module.css';
import {ValidatorType} from '../../../utils/validators/validators';
import {Field, WrappedFieldProps} from 'redux-form';

type FormControlPropsType = {
    type: string
    children: React.ReactNode
    isError: boolean
} & WrappedFieldProps

export const FormControl = ({meta, isError, children}: FormControlPropsType) => {
    return (
        <>
            {children}
            {isError && <div className={classes.errorMessage}>{meta.error}</div>}
        </>
    );
};

export const Textarea = (props: FormControlPropsType) => {
    const isError = {isError: props.meta.touched && props.meta.error}
    return <FormControl {...props} {...isError}>
        <textarea {...props.input} className={isError.isError ? classes.errorInput : classes.input}/>
    </FormControl>
}

export const Input = (props: FormControlPropsType) => {
    const isError = {isError: props.meta.touched && props.meta.error}
    return (
        <FormControl {...props} {...isError}>
            <input {...props.input} type={props.type} className={isError.isError ? classes.errorInput : classes.input}/>
        </FormControl>
    );
};

export const createField = (placeholder: string | null, name: string, validators: ValidatorType[] | [], component: React.ElementType, fieldType: string, props: any = {}, text: string = '') => {
    return <>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               FieldType={fieldType}
               {...props}/>
        {text}
    </>
}