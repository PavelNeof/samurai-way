import React from 'react';
import s from './Profile.module.css';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from '../../redux/state';

type ProfilePropsType = {
    ProfilePage: ProfilePageType
    addPost: (/*postMessage:string*/)=> void
    updateNewPostText:(newText:string)=> void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.ProfilePage.posts}  addPost={props.addPost} newPostText={props.ProfilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;