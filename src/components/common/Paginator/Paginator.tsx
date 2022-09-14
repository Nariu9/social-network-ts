import React from 'react';
import classes from './Paginator.module.css';

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}
export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) pages.push(i)
    }

    return <div className={classes.pages}>
        {pages.map(p => <span key={p}
                              onClick={() => onPageChanged(p)}
                              className={currentPage === p ? classes.selectedPage : ''}>{p}</span>)}
    </div>
}