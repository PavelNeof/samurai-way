import React from "react";
import {ActionTypes, DialogPageType} from "./store";

export type initialStateType = {
    users: Array<initialStateUsersType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

export type initialStateUsersType = {
    name: string
    id: number
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: boolean,
    followed: boolean
}


export type UsersActionTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |  ReturnType<typeof setUsersTotalCountAC>


let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
                ...state, users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage:action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount:action.count
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
export const setCurrentPageAC = (currentPage:number) => ({
    type:'SET_CURRENT_PAGE', currentPage
} as const)
export const setUsersTotalCountAC = (totalUsersCount:number)=> ({
    type: 'SET_TOTAL_USERS_COUNT', count:totalUsersCount
} as const)