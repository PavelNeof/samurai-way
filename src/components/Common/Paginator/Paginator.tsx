import React from "react";
import styles from "./Paginator.module.css"
import userPhoto from '../../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
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

    return <div>
        <div>
            {pages.map((p,index) => {
                return <span key={index} className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p + ' '}</span>
            })}
        </div>

    </div>
}


export default Paginator;

