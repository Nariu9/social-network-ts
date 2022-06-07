import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
}

type PostsType = {
    id:number
    message:string
    likesCount:number
}

const MyPosts = (props:MyPostsPropsType) => {



    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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