import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                   // src='https://www.meme-arsenal.com/memes/33eba91466f7b9ceea6485f2c2c1494e.jpg'/>
                    src={props.profile.photos.large}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;