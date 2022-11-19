import React, {useState} from "react";
import styles from "./Paginator.module.css"
import {initialStateUsersType} from "../../../redux/users-reducer";



type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: Array<initialStateUsersType>
    followingInProgress: Array<number>
}

let Paginator = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/props.pageSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1;
    let rightPortionPageNumber = portionNumber * props.pageSize;

    return <div className={styles.paginator}>
        <div>
            {portionNumber > 1 &&
            <button className={styles.button} onClick={()=>{ setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {pages
                .filter(p=> p>= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p,index) => {
                return <span key={index} className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p + ' '}</span>
            })}
            { portionCount > portionNumber &&
                <button className={styles.button} onClick={()=>{ setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>

    </div>
}


export default Paginator;

