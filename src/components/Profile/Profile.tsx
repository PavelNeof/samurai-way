import React from 'react';
import s from './Profile.module.css';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    ProfilePage: ProfilePageType
    /*addPost: (/!*postMessage:string*!/)=> void
    updateNewPostText:(newText:string)=> void*/
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.ProfilePage.posts} newPostText={props.ProfilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;