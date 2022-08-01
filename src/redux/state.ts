/*import {rerenderEntireTree} from "../render";*/

import profile from "../components/Profile/Profile";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMassageBody: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


/*let rerenderEntireTree = () => {
}*/

/*export const subscribe = (observer: ()=> void) =>{
    rerenderEntireTree = observer
}*/

/*export let addPost = (/!*postMessage:string*!/) => {
    let newPost: PostType = {
        id:5,
        message: state.profilePage.newPostText /!*postMessage*!/,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ('')
    rerenderEntireTree()
}*/

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

/*type AddPostActionType = {
    type:'ADD_POST'
    newPostText: string
}*/

/*type UpdateNewPostTextType = {
    type:'UPDATE-NEW-POST-TEXT'
    newText: string
}*/

/*type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>*/


export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMassageBody: '',
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)


        /* if (action.type === 'ADD_POST'){
                  let newPost: PostType = {
                      id:5,
                      message: action.newPostText /!*this._state.profilePage.newPostText*!/ /!*postMessage*!/,
                      likesCount:0
                  }
                  this._state.profilePage.posts.push(newPost)
                  this._state.profilePage.newPostText = ('')
                  this._callSubscriber()
               }

          else if (action.type ==='UPDATE-NEW-POST-TEXT'){
                  this._state.profilePage.newPostText = action.newText
                  this._callSubscriber()
          }*/

        /* else if (action.type === 'UPDATE-NEW-MESSAGE-BODY'){
             this._state.dialogsPage.newMassageBody = action.body;
             this._callSubscriber()
        }

         else if(action.type === 'SEND-MESSAGE'){
             let body = this._state.dialogsPage.newMassageBody;
            this._state.dialogsPage.newMassageBody = '';
            this._state.dialogsPage.messages.push(
                {id:6,message: body}
            );
 */

    }
}


/*let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}*/

/*export let updateNewPostText = (newText:string)=>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
}*/


export default store;
//window.store = store;