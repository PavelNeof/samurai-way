import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (newPostText:string) => void


}

const MaxLength10 = MaxLengthCreator(10)

const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map((p,index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>);
console.log('123')


    const onAddPost = (value:any) => {
        props.addPost(value.newPostText)
        // props.dispatch(addPostActionCreator(props.newPostText))
    }



    return (
        <div className={s.postsBlock}>
            <h3 className={s.nameBlock}>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})



const AddNewPostForm = (props:any) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.textArea} name="newPostText" placeholder={'Enter your text'} component={Textarea} validate={[required, MaxLength10]}></Field>
            </div>
            <div>
                <button className={'button'}>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts;