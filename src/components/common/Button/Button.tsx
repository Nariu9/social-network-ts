import React from 'react';
import classes from './Button.module.scss';


type ButtonType = {
    title: string
    callback?: () => void
}

export const Button: React.FC<ButtonType> = ({title, callback}) => {
    return (
        <button onClick={callback} className={classes.btn}>{title}</button>
    );
};