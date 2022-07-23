import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';


export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost:(/*postMessage:string*/)=> void
    newPostText:string
    updateNewPostText:(newText:string)=> void
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

      /*  let addPost =() => {
            if (newPostElement.current) {
                let text = newPostElement.current.value
                props.addPost(text)
            }
        }*/

        /*let text = newPostElement.current?.value;*/
        if (newPostElement.current) {
            /*let text = newPostElement.current.value*/
            props.addPost()

        }

    }

    const onPostChange = () => {
        if (newPostElement.current) {
        let text = newPostElement.current.value
        props.updateNewPostText(text) }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;