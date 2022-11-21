import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userPhoto from '../../../assets/images/user.jpg'
import {ProfileData} from "./ProfileData";
import {ProfileDataFormRedux, ProfileDataType} from "./ProfileDataForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {editModeAC} from "../../../redux/app-reducer";


const ProfileInfo = (props: ProfilePropsType) => {

   // let [editMode, setEditMode] = useState(false)

    const editMode = useSelector<AppStateType,boolean>(state => state.app.isEdit)

    const dispatch = useDispatch()

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

    const onSubmit = (formData: ProfileDataType) => {
        props.saveProfile(formData)
       // setEditMode(false)
        dispatch(editModeAC(false))
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
                                   isOwner={props.isOwner} goToEditMode={() => {
                        /*setEditMode(true)*/
                        dispatch(editModeAC(true))
                    }}/>}
            </div>
        </div>
    )
}


export default ProfileInfo;