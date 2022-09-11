
import profile from "../components/Profile/Profile";
import {followSuccess} from "./users-reducer";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileActionTypes = ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof addPostActionCreator> | ReturnType<typeof setUserProfile>


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostType = {
                id: 5,
                message: state.newPostText ,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText:action.newText };
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile };
        default:
            return state
    }
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText: newPostText
    } as const
}

export const setUserProfile = (profile: any) => ({
    type: "SET_USER_PROFILE", profile
} as const)
