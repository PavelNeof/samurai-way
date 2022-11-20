import s from "./ProfileInfo.module.css";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import React from "react";
import {ProfileDataType} from "./ProfileDataForm";

export const ProfileData = (props: ProfileDataType) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Edit</button>
            </div>}
            <div>
                <b className={s.b}>Full name</b>:<b className={s.b}>{props.profile.fullName}</b>
            </div>
            <div>
                <b className={s.b}>Looking for a job</b>:<b
                className={s.b}>{props.profile.lookingForAJob ? 'yes' : 'no'}</b>
            </div>
            {props.profile.lookingForAJob && <div>
                <b className={s.b}>My professional skills</b>: <b
                className={s.b}>{props.profile.lookingForAJobDescription}</b>
            </div>}
            <div>
                <b className={s.b}>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
            <div>
                <b className={s.b}>About me</b>:<b className={s.b}>{props.profile.aboutMe}</b>
            </div>
            <div className={s.flexBoxForInput}>
                <b className={s.b}>Status</b>:<ProfileStatusWithHooks status={props.status}
                                                                      updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

const Contact = (props: ContactType) => {
    return <div>
        <div className={s.contact}><b className={s.b}>{props.contactTitle}</b> : {props.contactValue} </div>
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue: string
}