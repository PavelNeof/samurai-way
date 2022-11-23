import s from "./ProfileInfo.module.css";
import {ProfileType} from "../ProfileContainer";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";



const ProfileDataForm = (props: InjectedFormProps<ProfileApiType>) => {

    const profile = useSelector<AppStateType, ProfileApiType>(state => state.profilePage.profile)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button className={'button'}>Save ↓</button>
            </div>
            {props.error && <div className={s.error}>ERROR:{props.error}</div>}
            <div>
                <b className={s.b}>Full name</b>: <Field placeholder={'FullName'} name={'fullName'} component={Input}/>
            </div>

            <div>
                <b className={s.b}>Looking for a job</b>:<Field placeholder={''} name={'lookingForAJob'}
                                                                component={Input}
                                                                type={'checkbox'}/>
            </div>

            <div>
                <b className={s.b}>My professional skills</b>: <Field placeholder={'My Professional skills'}
                                                                      name={'lookingForAJobDescription'}
                                                                      component={Input} type={'textarea'}/>
            </div>

            <div>
                <b className={s.b}>About me</b>: <Field placeholder={'About me'} name={'aboutMe'}
                                                        component={Input} type={'textarea'}/>
            </div>

            <div>
                <b className={s.b}>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                // @ts-ignore
                return <div key={key}>
                    <b className={s.b}>{key}: <Field placeholder={key} name={'contacts.' + key}
                                     component={Input}
                    /></b>
                </div>
            })}
            </div>
        </form>

    )
}

export const ProfileDataFormRedux = reduxForm<ProfileApiType>({
    form: 'edit-profile'
})(ProfileDataForm)


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
    userId:number | null
    goToEditMode: () => void
}

export type ProfileApiType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
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