import React from 'react';
import s from './Post.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

export type PostPropsType ={
    message:string
    likesCount:number
}

const Post = (props:PostPropsType) => {

   const photos = useSelector<AppStateType, string | undefined>(state=>state.profilePage.profile?.photos?.small)

    return (
        <div className={s.item}>

            {photos ? <img src={photos} /> : 'Loading photo... ' }

            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;