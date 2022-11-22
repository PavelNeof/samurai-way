import React from "react";
import axios from "axios";
import {Dispatch} from "redux";
import {UsersActionTypes} from "./users-reducer";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";

export type initialStateType = {
    usersId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    captchaUrl: string | null // if null, then captcha is not required
}

type DataAuthType = {
    usersId: number
    email: string
    login: string
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

let initialState: initialStateType = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null
}


export const authReducer = (state: initialStateType = initialState, action: AuthActionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

};
export const login = (email: string, password: string, rememberMe: boolean, captcha:string) =>
    async (dispatch: Dispatch<any>) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if ((response.data.resultCode === 10)) {
                dispatch(getCaptchaURL())
            }
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

export const getCaptchaURL = (): AppThunkType =>
    async (dispatch) => {
        let response = await securityAPI.getCaptchaURL()
        const captchaUrl = (response.data.url)
        dispatch(getCaptchaUrlSuccess(captchaUrl))

    }


export const setAuthUserData = (usersId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA', payload: {usersId, email, login, isAuth}
} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
} as const)

/*
export const setAuthUserData = (data:DataAuthType) => ({
    type: 'SET_USER_DATA', data: data
} as const)*/


