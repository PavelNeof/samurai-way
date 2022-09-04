import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';
import {ActionTypes,} from "../../../redux/store";


export type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    posts: Array<PostPropsType>
    addPost: () => void
    newPostText:string
    /*addPost:(/!*postMessage:string*!/)=> void*/
    // newPostText:string
    /*    updateNewPostText:(newText:string)=> void*/
    //  dispatch: (action: ActionTypes) => void
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map((p,index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator(props.newPostText))
    }

    const onPostChange = () => {
        /*if (newPostElement.current) {
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:text}) }*/
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);

        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;