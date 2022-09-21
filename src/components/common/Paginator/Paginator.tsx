import React, {useState} from 'react';
import classes from './Paginator.module.css';

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize?: number
}
export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalItemsCount,
                                                            pageSize,
                                                            currentPage,
                                                            onPageChanged,
                                                            portionSize = 10
                                                        }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize


    return <div className={classes.pages}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => <span key={p}
                            onClick={() => onPageChanged(p)}
                            className={currentPage === p ? classes.selectedPage : ''}>{p}</span>)}
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
}