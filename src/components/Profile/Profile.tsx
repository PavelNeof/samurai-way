import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import {Navigate, Params, useParams} from "react-router-dom";
import {ProfileApiType} from "./ProfileInfo/ProfileDataForm";

export type ProfilePropsType = {
    profile: ProfileType
    status:string
    updateStatus: (status: string) => void
    isOwner:boolean
    savePhoto: (file:string) => void
    saveProfile:(formData: ProfileApiType)=> Promise<number>
    userId:number | null

}



const Profile = (props: ProfilePropsType) => {

   // if(!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div>
            <ProfileInfo userId={props.userId} saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner}
                         profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;