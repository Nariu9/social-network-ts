import React from 'react';
import classes from './FormsControls.module.css';


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