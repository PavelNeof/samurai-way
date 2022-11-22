import s from "./ProfileInfo.module.css";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../ProfileContainer";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {editModeAC} from "../../../redux/app-reducer";


const ProfileDataForm = (props: InjectedFormProps<ProfileApiType>) => {

    const profile = useSelector<AppStateType, ProfileApiType>(state => state.profilePage.profile)
    const isEdit = useSelector<AppStateType, boolean>(state => state.app.isEdit)

     const dispatch = useDispatch()

    const HandleSubmit = () => {
      return props.handleSubmit;
    }

    const HandleSubmit1 = () => {


        if (props.error) {
            return dispatch(editModeAC(true))
        } else {
            return dispatch(editModeAC(false))
        }
    }

    return (


        // <form onSubmit={props.error? HandleSubmit : props.handleSubmit }>
       // <form onSubmit={props.handleSubmit}>
        <form onSubmit={props.handleSubmit}>


            <div>
                <button>Save</button>
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
                    <b>{key}: <Field placeholder={key} name={'contacts.' + key}
                                     component={Input}
                    /></b>
                </div>
            })}
            </div>

            {/*<div className={s.flexBoxForInput}>*/}
            {/*    <b className={s.b}>Status</b>:<ProfileStatusWithHooks status={props.status}*/}
            {/*                                                          updateStatus={props.updateStatus}/>*/}
            {/*</div>*/}
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