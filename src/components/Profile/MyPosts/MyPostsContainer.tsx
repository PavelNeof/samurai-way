import React from 'react';
import MyPosts from "./MyPosts";

import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";


const mapStateToProps = (state:AppStateType)=>{
    return{
        posts: state.profilePage.posts,

    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        addPost: (newPostText:string) =>{
            let action = addPostActionCreator(newPostText)
            dispatch(action) ;
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;