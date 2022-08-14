import {ActionTypes, PostType, ProfilePageType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
}




export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostType = {
                id: 5,
                message: state.newPostText /*this._state.profilePage.newPostText*/ /*postMessage*/,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText:action.newText };
        default:
            return state
    }
}


/*
    if (action.type === 'ADD_POST'){
        let newPost: PostType = {
            id:5,
            message: state.newPostText /!*this._state.profilePage.newPostText*!/ /!*postMessage*!/,
            likesCount:0
        }
        state.posts.push(newPost)
       state.newPostText = ('')
       /!* this._callSubscriber()*!/
    }

    else if (action.type ==='UPDATE-NEW-POST-TEXT'){
       state.newPostText = action.newText
       /!* this._callSubscriber()*!/
    }
    return state
}*/
