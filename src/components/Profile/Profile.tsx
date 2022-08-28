import React from 'react';
import s from './Profile.module.css';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, StoreType} from '../../redux/store';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
   // ProfilePage: ProfilePageType
    /*addPost: (/!*postMessage:string*!/)=> void
    updateNewPostText:(newText:string)=> void*/
   // dispatch: (action: ActionTypes) => void
  //  store: StoreType
}

const Profile = (props: any) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;