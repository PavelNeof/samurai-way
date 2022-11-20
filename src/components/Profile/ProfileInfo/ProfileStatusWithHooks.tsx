import React, {ChangeEvent, useEffect, useState} from "react";
import {AppStateType} from "../../../redux/redux-store";
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div >
            {!editMode &&
                <div className={s.inputBox}>
                    <span className={s.input} onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
            }
            {editMode &&
                <div className={s.inputBox}>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode}
                           value={status}/>
                </div>}
        </div>
    )

}