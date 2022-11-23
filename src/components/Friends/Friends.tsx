import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "../../redux/redux-store";
import {getUsersTC, initialStateUsersType} from "../../redux/users-reducer";
import {Navigate, NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.jpg";
import styles from "../Users/Users.module.css";
import React, {useEffect} from "react";
import Paginator from "../Common/Paginator/Paginator";


export const Friends = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersTC(1, 10, true))
    }, [])

    const users = useSelector<AppStateType, Array<initialStateUsersType>>(state => state.usersPage.users)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const followingInProgress = useSelector<AppStateType, number[]>(state => state.usersPage.followingInProgress)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    const totalUsersCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount)

    const friends = users.filter((u: initialStateUsersType) => u.followed)

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize, true))
    }

    if (!isAuth) return <Navigate to={'/login'}/>

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       pageSize={pageSize} totalUsersCount={totalUsersCount}

                       followingInProgress={followingInProgress}
                       users={friends}
            />
            {friends.map((u: initialStateUsersType) =>
                    <div key={u.id} className={styles.block}>
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
                    </div>
            )

            }
        </div>
    )

}