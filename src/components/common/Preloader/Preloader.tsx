import React from 'react';
import preloader from '../../../assets/images/preloader .svg';
import classes from './Preloader.module.scss';

type PreloaderPropsType = {
    inside: boolean
}

export const Preloader = ({inside}: PreloaderPropsType) => {
    return <img src={preloader} alt="preloader" className={inside ? classes.inside : classes.outside}/>
};