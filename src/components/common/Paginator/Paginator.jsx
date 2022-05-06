import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 15) {
            pages.push(i);
        }
    }

    return (
        <div className={styles.numberPage}>
            {pages.map(p => {
                return <span key={p}
                             className={currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
    )

}

export default Paginator;