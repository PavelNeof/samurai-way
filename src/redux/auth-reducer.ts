import React from "react";
import {ActionTypes, DialogPageType} from "./store";

export type initialStateType = {
    usersId: number | null
    email: string| null
    login: string| null
    isAuth:boolean
    isFetching:boolean
}

type DataAuthType = {
    usersId: number
    email: string
    login: string
}

export type UsersActionTypes = ReturnType<typeof setAuthUserData>

let initialState: initialStateType = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching:false
}


export const authReducer = (state: initialStateType = initialState, action: UsersActionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state
    }

};


export const setAuthUserData = (usersId:number,email: string, login: string) => ({
    type: 'SET_USER_DATA', data: {usersId, email, login}
} as const)
/*
export const setAuthUserData = (data:DataAuthType) => ({
    type: 'SET_USER_DATA', data: data
} as const)*/
