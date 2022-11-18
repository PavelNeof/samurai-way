import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import {Navigate} from "react-router-dom";

export type ProfilePropsType = {
    profile: ProfileType
    status:string
    updateStatus: (status: string) => void
    isOwner:boolean
    savePhoto: (file:string) => void
}

const Profile = (props: ProfilePropsType) => {

   // if(!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;