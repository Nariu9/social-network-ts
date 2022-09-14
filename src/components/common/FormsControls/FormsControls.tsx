import React from 'react';
import classes from './FormsControls.module.css';
import {ValidatorType} from '../../../utils/validators/validators';
import {Field} from 'redux-form';


export const FormControl = ({input, meta, FieldType, ...restProps}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                <FieldType {...input} {...restProps}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const createField = (placeholder: string | null, name: string, validators: ValidatorType[] | [], component: React.ElementType, fieldType: string, props: any = {}, text: string = '') => {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               FieldType={fieldType}
               {...props}/>
        {text}
    </div>
}