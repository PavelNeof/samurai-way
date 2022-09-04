import React from "react";
import {ActionTypes, DialogPageType} from "./store";

export type initialStateType = {
    users: Array<initialStateUsersType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:Array<number>
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


export type UsersActionTypes = ReturnType<typeof follow> |
    ReturnType<typeof unfollow> | ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |  ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowingProgress>


let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:false,
    followingInProgress:[]
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
        case 'TOGGLE_IS_FETCHING':
            console.log('6')
            return {
                ...state, isFetching:action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress:action.isFetching
                    ?[...state.followingInProgress,action.userId]
                    :state.followingInProgress.filter((id: number)=>id!=action.userId)

            }
        default:
            return state
    }

};


export const follow = (UserID: number) => ({
    type: 'FOLLOW', UserID
} as const)
export const unfollow = (UserID: number) => ({
    type: 'UNFOLLOW', UserID
} as const)
export const setUsers = (users: Array<initialStateUsersType>) => ({
    type: 'SET_USERS', users
} as const)
export const setCurrentPage = (currentPage:number) => ({
    type:'SET_CURRENT_PAGE', currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount:number)=> ({
    type: 'SET_TOTAL_USERS_COUNT', count:totalUsersCount
} as const)
export const toggleIsFetching = (isFetching:boolean)=> ({
    type: 'TOGGLE_IS_FETCHING', isFetching
} as const)
export const toggleFollowingProgress = (isFetching:boolean,userId:number)=> ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId
} as const)