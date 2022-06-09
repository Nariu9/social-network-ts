import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {ProfilePagePropsType} from "../../../App";


const MyPosts = (props:ProfilePagePropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id}  message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="newpost"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts