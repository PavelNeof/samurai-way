import React from "react";
import {followAC, initialStateType, initialStateUsersType, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/store";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToProps = {
    users: Array<initialStateUsersType>
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<initialStateUsersType>) => void
}

export type AllUsersType = mapStateToProps & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType):mapStateToProps => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<initialStateUsersType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;