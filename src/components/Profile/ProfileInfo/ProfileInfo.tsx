import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userPhoto from '../../../assets/images/user.jpg'
import {ProfileData} from "./ProfileData";
import {ProfileApiType, ProfileDataFormRedux, ProfileDataType} from "./ProfileDataForm";
import {useParams} from "react-router-dom";

const ProfileInfo = (props: ProfilePropsType) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileApiType) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )

    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <label className={s.label}> load avatar <input type={'file'} className={s.my}
                                                                                 onChange={onMainPhotoSelected}/></label>}
                {editMode
                    ? <ProfileDataFormRedux initialValues={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} updateStatus={props.updateStatus} status={props.status}
                                   isOwner={props.isOwner} userId={props.userId}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}
                    />}
            </div>
        </div>
    )
}


export default ProfileInfo;