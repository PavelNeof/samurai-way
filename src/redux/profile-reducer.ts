
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ''
}

export type ProfilePageType = {
    posts: Array<PostType>

    profile: any
    status:string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> | ReturnType<typeof deletePost>


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], }

        case "SET_USER_PROFILE":
            return {...state, profile: action.profile};
        case "SET_STATUS":
            return {...state, status: action.status};
        case "DELETE_POST":
            return {...state, posts:state.posts.filter(p=>p.id != action.postId)};
        default:
            return state
    }
}


export const getUserProfile = (userId: number) => (dispatch: Dispatch<ProfileActionTypes>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId: number) => (dispatch: Dispatch<ProfileActionTypes>) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch<ProfileActionTypes>) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
        dispatch(setStatus(status))}
    })
}



export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText: newPostText
    } as const
}

export const deletePost = (postId:number) => {
    return {
        type: "DELETE_POST",
        postId
    } as const
}

export const setUserProfile = (profile: any) => ({
    type: "SET_USER_PROFILE", profile
} as const)
export const setStatus = (status: string) => ({
    type: "SET_STATUS", status
} as const)