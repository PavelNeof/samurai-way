import React from 'react';
import s from './Post.module.css';

export type PostPropsType ={
    message:string
    likesCount:number
}

const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://www.meme-arsenal.com/memes/597761efc057a2df1bc14b76e12c4330.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;