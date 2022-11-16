import classes from './MyPosts.module.scss';
import React from 'react';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import PostsForm, {FormDataType} from './PostsForm/PostsForm';

const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post key={p.id}
                                                   id={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}
                                                   name={props.name}
                                                   avatar={props.avatar}
                                                   deletePost={props.deletePost}/>)

    const addNewPost = (formData: FormDataType) => {
        if (formData.newPostText.trim() === '') return
        props.addPost(formData.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <div className={classes.postBg}><h3>What's new?</h3>
                <div className={classes.newPost}>
                    <PostsForm onSubmit={addNewPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts