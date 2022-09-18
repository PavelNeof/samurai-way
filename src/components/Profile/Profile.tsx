import React from 'react';
import s from './Profile.module.css';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, StoreType} from '../../redux/store';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileMapStateToProps, ProfileType} from "./ProfileContainer";
import {Navigate} from "react-router-dom";

export type ProfilePropsType = {
   // ProfilePage: ProfilePageType
    /*addPost: (/!*postMessage:string*!/)=> void
    updateNewPostText:(newText:string)=> void*/
   // dispatch: (action: ActionTypes) => void
  //  store: StoreType
    profile: ProfileType
    status:string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

   // if(!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;