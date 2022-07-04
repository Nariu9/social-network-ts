import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {ActionType, PostPropsType} from "../../../redux/store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostCreator())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch(updateNewPostTextCreator(newPostElement.current.value))
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts