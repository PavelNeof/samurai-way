import React from "react";
import {initialStateType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import {AllUsersType} from "./UsersContainer";


let Users = (props: AllUsersType) => {

    if (props.users.length === 0) {
        props.setUsers(
            [{
                id: 1, followed: false, fullName: 'Dmitry', status: 'Iam a boss',
                photoUrl: 'https://zapilili.ru/upload/medialibrary/7d2/3e46eca70456b5bc902f6e6d423f5982.jpg',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                    id: 2, followed: true, fullName: 'Sasha', status: 'Iam a boss',
                    photoUrl: 'https://home.guranka.ru/data/content/2019/3909/8e88997dcdc91c9fbc29e4582ec9b8ef.jpg',
                    location: {country: 'Russia', city: 'Moscow'}
            },
            {
                    id: 3, followed: false, fullName: 'Andrew', status: 'Iam a boss',
                    photoUrl: 'https://cs.pikabu.ru/post_img/2013/10/20/5/1382252174_571202292.jpg',
                    location: {country: 'Ukraine', city: 'Kiev'}
            }]
        )
    }


    return <div>
        {props.users.map(u => <span key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>

<div>
{u.followed
    ? <button onClick={() => {props.unfollow(u.id)}}> Unfollow </button>
    : <button onClick={() => {props.follow(u.id)}}> Follow </button>
}
</div>
                </span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div> {u.location.country}</div>
                <div> {u.location.city}</div>
            </span>
      </span>
        )

        }
    </div>
}


    export default Users;