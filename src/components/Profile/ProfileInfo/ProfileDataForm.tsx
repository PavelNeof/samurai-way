import s from "./ProfileInfo.module.css";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../ProfileContainer";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";


const ProfileDataForm = (props: InjectedFormProps<ProfileDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div>
                <b className={s.b}>Full name</b>: <Field placeholder={'FullName'} name={'fullName'} component={Input}
                                                         validate={[required]}
            />
                {/*<b className={s.b}>{props.profile.fullName}</b>*/}
            </div>
            <div>
                <b className={s.b}>Looking for a job</b>:<Field placeholder={''} name={'lookingForAJob'}
                                                                component={Input}
                                                                validate={[required]} type={'checkbox'}
            />

                {/*<b className={s.b}>{props.profile.lookingForAJob ? 'yes' : 'no'}</b> , {type: 'checkbox'}*/}
            </div>
            <div>
                <b className={s.b}>My professional skills</b>: <Field placeholder={'My Professional skills'}
                                                                      name={'lookingForAJobDescription'}
                                                                      component={Input} type={'textarea'}
                                                                      validate={[required]}/>
                {/*<b className={s.b}>{props.profile.lookingForAJobDescription}</b>*/}
            </div>
            <div>
                <b className={s.b}>About me</b>: <Field placeholder={'About me'} name={'aboutMe'}
                                                        component={Input} type={'textarea'}
                                                        validate={[required]}/>
                {/*<b className={s.b}>{props.profile.aboutMe}</b>*/}
            </div>

            {/*<div>*/}
            {/*    <b className={s.b}>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {*/}
            {/*    // @ts-ignore*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}

            {/*<div className={s.flexBoxForInput}>*/}
            {/*    <b className={s.b}>Status</b>:<ProfileStatusWithHooks status={props.status}*/}
            {/*                                                          updateStatus={props.updateStatus}/>*/}
            {/*</div>*/}
        </form>
    )
}

export const ProfileDataFormRedux = reduxForm<ProfileDataType>({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataForm;

const Contact = (props: ContactType) => {
    return <div>
        <div className={s.contact}><b className={s.b}>{props.contactTitle}</b> : {props.contactValue} </div>
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue: string
}

export type ProfileDataType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    goToEditMode: () => void
}

export type ProfileApiType = {
    userId: number
    lookingForAJob:boolean
    lookingForAJobDescription:string | null
    fullName:string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
}