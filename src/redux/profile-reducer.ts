import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ProfileApiType, ProfileDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";
import {AppStateType, AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

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
    status: string

}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> | ReturnType<typeof deletePost> | ReturnType<typeof savePhotoSuccess>


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost],}

        case "SET_USER_PROFILE":
            return {...state, profile: action.profile};
        case "SET_STATUS":
            return {...state, status: action.status};
        case "DELETE_POST":
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        case "SAVE_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos}}
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
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export const savePhoto = (file: string) => async (dispatch: Dispatch<ProfileActionTypes>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }

}

export const saveProfile = (profile: ProfileApiType): AppThunkType => async (dispatch, getState) => {
    try{
        const userId = getState().auth.usersId
        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getUserProfile(userId));
            return Promise.resolve(response.data.resultCode);
        } else{
            //let message = response.data.messages.length > 0 ? response.data.messages[0] : "some Error"
            // dispatch(stopSubmit('login', {_error: message}))
            dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
    }
   catch(error:any){
        alert(error.response.message[0])
   }


}


export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText: newPostText
    } as const
}

export const deletePost = (postId: number) => {
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

export const savePhotoSuccess = (photos: string) => ({
    type: "SAVE_PHOTO_SUCCESS", photos
} as const)



