import React from "react";
import {initialStateUsersType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
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

    return <div className={styles.container}>
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       pageSize={props.pageSize}  totalUsersCount={props.totalUsersCount}
                       follow={props.follow} unfollow={props.unfollow}
                       followingInProgress={props.followingInProgress}
                       users={props.users}
            />
        </div>
        {props.users.map((u: initialStateUsersType) =>
                <div key={u.id} className={styles.marginBottom}>
            <span>
                <div >
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
{u.followed
    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.unfollow(u.id)} className={styles.unfollow}> Unfollow </button>
    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}} className={styles.follow}> Follow </button>
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
      </div>
        )

        }
    </div>
}


export default Users;

