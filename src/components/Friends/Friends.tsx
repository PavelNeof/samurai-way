import axios from "axios";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {initialStateUsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.jpg";
import styles from "../Users/Users.module.css";
import React from "react";


export const Friends = (props:any) =>{
    //if(props.string === statuses.NOT_INITIALIZED){
   // }
    //props.setStatus(statuses.INPROGRESS)
   // axios.get("https://social-network.samuraijs.com/api/1.0/users?fgfd=30")

    const users = useSelector<AppStateType,Array<initialStateUsersType>>(state=>state.usersPage.users)

    const friends =  users.filter((u:initialStateUsersType)=> u.status)

    return(
        <div>kuku
            {friends.map((u: initialStateUsersType) =>
                    <span key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
{/*{u.followed*/}
{/*    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.unfollow(u.id)} className={styles.unfollow}> Unfollow </button>*/}
{/*    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}} className={styles.follow}> Follow </button>*/}
{/*}*/}
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
    )

}