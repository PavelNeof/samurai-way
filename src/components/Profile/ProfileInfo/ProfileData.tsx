import s from "./ProfileInfo.module.css";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import React, {useState} from "react";
import {ProfileDataType} from "./ProfileDataForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {useParams} from "react-router-dom";

export const ProfileData = (props: ProfileDataType) => {
    const {userId} = useParams()

   // const userID = useSelector<AppStateType, number | null>(state => state.auth.usersId)

    const [isOpen, setIsOpen] = useState(false)
    // let show
    // if (userId) {
    //     show = +userId === userID
    // }
    // console.log(userId)
    // console.log(userID)


    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode} className={'button'}>Edit ↓</button>
            </div>}
            <div>
                <b className={s.b}>Full name</b>:<b className={s.word}>{props.profile.fullName}</b>
            </div>
            <div>
                <b className={s.b}>Looking for a job</b>:<span
                className={s.word}>{props.profile.lookingForAJob ? 'yes' : 'no'}</span>
            </div>
            {props.profile.lookingForAJob && <div>
                <b className={s.b}>My professional skills</b>: <span
                className={s.word}>{props.profile.lookingForAJobDescription}</span>
            </div>}
            <div>
                <b onClick={() => setIsOpen(!isOpen)} className={s.contactsBox}>Contacts</b>: {isOpen ?
                <div>{Object.keys(props.profile.contacts).map(key => {
                    // @ts-ignore
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}</div> : ' '}
            </div>
            <div>
                <b className={s.b}>About me</b>:<span className={s.word}>{props.profile.aboutMe}</span>
            </div>
            <div className={s.flexBoxForInput}>
                <b className={s.b}>Status</b>:{!userId ? <ProfileStatusWithHooks status={props.status}
                                                                                      updateStatus={props.updateStatus}/> :
                <span className={s.word}>{props.status}</span>}
            </div>
        </div>
    )

}

const Contact = (props: ContactType) => {
    return <div>
        <div className={s.contact}><b className={s.b}>{props.contactTitle}</b> : <span
            className={s.word}>{props.contactValue}</span></div>
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue: string
}