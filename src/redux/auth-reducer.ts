import React from "react";
import axios from "axios";
import {Dispatch} from "redux";
import {UsersActionTypes} from "./users-reducer";
import {authAPI} from "../api/api";

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

export type AuthActionTypes = ReturnType<typeof setAuthUserData>

let initialState: initialStateType = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching:false
}


export const authReducer = (state: initialStateType = initialState, action: AuthActionTypes): initialStateType => {
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

export const getAuthUserData = () =>
    (dispatch:Dispatch<AuthActionTypes>) => {
      authAPI.me()
    .then(
            response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
export const setAuthUserData = (usersId:number,email: string, login: string) => ({
    type: 'SET_USER_DATA', data: {usersId, email, login}
} as const)
/*
export const setAuthUserData = (data:DataAuthType) => ({
    type: 'SET_USER_DATA', data: data
} as const)*/
