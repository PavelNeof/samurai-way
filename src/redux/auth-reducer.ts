import React from "react";
import axios from "axios";
import {Dispatch} from "redux";
import {UsersActionTypes} from "./users-reducer";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type initialStateType = {
    usersId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
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
    isFetching: false
}


export const authReducer = (state: initialStateType = initialState, action: AuthActionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }

};
export const login = (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: Dispatch<any>) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some Error"
            dispatch(stopSubmit('login', {_error: message}))
        }

    }

export const logout = () =>
    async (dispatch: Dispatch<AuthActionTypes>) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }

export const getAuthUserData = () =>
    async (dispatch: Dispatch<AuthActionTypes>) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }

    }
export const setAuthUserData = (usersId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA', payload: {usersId, email, login, isAuth}
} as const)
/*
export const setAuthUserData = (data:DataAuthType) => ({
    type: 'SET_USER_DATA', data: data
} as const)*/


