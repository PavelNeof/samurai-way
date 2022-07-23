/*import {rerenderEntireTree} from "../render";*/

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id:number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText:string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {
}
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
    sidebar: SidebarType
}



let rerenderEntireTree = () => {
}

export const subscribe = (observer: ()=> void) =>{
    rerenderEntireTree = observer
}

export let addPost = (/*postMessage:string*/) => {
    let newPost: PostType = {
        id:5,
        message: state.profilePage.newPostText /*postMessage*/,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ('')
    rerenderEntireTree()
}

let state:RootStateType = {
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
}

export let updateNewPostText = (newText:string)=>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
}





export default state;