import React from "react";
import {initialStateType, initialStateUsersType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import {AllUsersType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'
import {AppStateType} from "../../redux/redux-store";


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage:number
    onPageChanged: (pageNumber: number)=> void
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    users: Array<initialStateUsersType>
}

let Users = (props: UsersType) => {


        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={/*this.props.currentPage===p && */styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map((u: initialStateUsersType) =>
                    <span key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>

<div>
{u.followed
    ? <button onClick={() => {
       props.unfollow(u.id)
    }}> Unfollow </button>
    : <button onClick={() => {
       props.follow(u.id)
    }}> Follow </button>
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

