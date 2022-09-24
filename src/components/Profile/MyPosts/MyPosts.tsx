import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';
import {Field, reduxForm} from "redux-form";

export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (newPostText:string) => void


}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map((p,index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>);



    const onAddPost = (value:any) => {
        props.addPost(value.newPostText)
        // props.dispatch(addPostActionCreator(props.newPostText))
    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const AddNewPostForm = (props:any) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"></Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts;