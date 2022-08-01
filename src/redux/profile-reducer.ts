import state, {ActionTypes, PostType, ProfilePageType,} from "./state";

let initialState = {
    posts: [],
    newPostText: ''
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostType = {
                id: 5,
                message: state.newPostText /*this._state.profilePage.newPostText*/ /*postMessage*/,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ('')
            return {...state}
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return {...state}
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
