import React from "react";
import {initialStateType, initialStateUsersType, toggleFollowingProgress} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";
import Paginator from "../Common/Paginator/Paginator";


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

let Users = (props: UsersType) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    return <div>
        <div>
            {/*{pages.map((p,index) => {*/}
            {/*    return <span key={index} className={props.currentPage === p ? styles.selectedPage : ''}*/}
            {/*                 onClick={(e) => {*/}
            {/*                     props.onPageChanged(p)*/}
            {/*                 }}>{p + ' '}</span>*/}
            {/*})}*/}
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       pageSize={props.pageSize}  totalUsersCount={props.totalUsersCount}
                       follow={props.follow} unfollow={props.unfollow}
                       followingInProgress={props.followingInProgress}
                       users={props.users}
            />
        </div>
        {props.users.map((u: initialStateUsersType) =>
                <span key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
{u.followed
    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.unfollow(u.id)}> Unfollow </button>
    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}> Follow </button>
}
</div>
                </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div> {'u.location.country'}</div>
                <div> {'u.location.city'}</div>
            </span>
      </span>
        )

        }
    </div>
}


export default Users;

