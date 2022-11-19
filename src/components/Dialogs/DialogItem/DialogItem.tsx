import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id:number
    name:string
}

const DialogItem = (props:DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.divNavLink}>
        <NavLink className={s.navLink} to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;