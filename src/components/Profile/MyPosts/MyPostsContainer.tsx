import React from 'react';
import { RootStateType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import Post, {PostPropsType} from "./Post/Post";
import {connect} from "react-redux";
import store, {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const mapStateToProps = (state:AppStateType)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        updateNewPostText: (text:string) =>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () =>{
            let action = addPostActionCreator(store.getState().profilePage.newPostText)
            dispatch(action) ;
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;







/*
export type MyPostsPropsType = {
    // posts: Array<PostPropsType>
    /!*addPost:(/!*postMessage:string*!/)=> void*!/
    // newPostText: string
    /!*    updateNewPostText:(newText:string)=> void*!/
    //dispatch: (action: ActionTypes) => void
    //  store:StoreType
}


const MyPostsContainer = () => {
    return(
        <StoreContext.Consumer>
            {
                (store:StoreType)=>{
                    /!*let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();*!/

                    const addPost = () => {
                        store.dispatch(addPostActionCreator(store.getState().profilePage.newPostText)) //хз нужно ли передавать в функцию
                    }


                    const onPostChange = (text: string) => {
                        //   if (newPostElement.current){

                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action)
                        //  }
                    }


                    return (
                        <MyPosts posts={store.getState().profilePage.posts} updateNewPostText={onPostChange} addPost={addPost}
                                 newPostText={store.getState().profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}*/
