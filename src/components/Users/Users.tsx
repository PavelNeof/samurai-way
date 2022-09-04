import React from "react";
import {initialStateType, initialStateUsersType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
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
                return <span className={props.currentPage===p ? styles.selectedPage:''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p + ' '}</span>
            })}
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
    ? <button onClick={() => {

        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
            withCredentials: true,
            headers: {
                'API-KEY': 'adde9436-0db1-4615-b59e-fd954f05d11c'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(u.id)
                }
            })


    }}> Unfollow </button>
    : <button onClick={() => {

        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
            withCredentials: true,
            headers: {
                'API-KEY': 'adde9436-0db1-4615-b59e-fd954f05d11c'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                   props.follow(u.id)
                }
            })

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

