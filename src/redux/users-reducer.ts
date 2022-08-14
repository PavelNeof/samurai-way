import React from "react";
import {ActionTypes, DialogPageType} from "./store";

export type initialStateType = {
    users: Array<initialStateUsersType>
}

export type initialStateUsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    photoUrl: string
    location: {
        country: string
        city: string
    }
}


export type UsersActionTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>


let initialState: initialStateType = {
    users: []
}


export const usersReducer = (state: initialStateType = initialState, action: UsersActionTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.UserID) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.UserID) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case 'SET_USERS':
            return {
                ...state, users: [...state.users, ...action.users]

            }

        default:
            return state
    }

};


export const followAC = (UserID: number) => ({
    type: 'FOLLOW', UserID
} as const)
export const unfollowAC = (UserID: number) => ({
    type: 'UNFOLLOW', UserID
} as const)
export const setUsersAC = (users: Array<initialStateUsersType>) => ({
    type: 'SET_USERS', users
} as const)