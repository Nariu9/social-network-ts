import classes from './Post.module.scss';
import React from 'react';
import {PostType} from '../../../../redux/profile-reducer';
import userPhoto from '../../../../assets/images/userPhoto.jpg'
import {AiFillDelete, AiFillHeart} from 'react-icons/ai';

type PostPropsType = PostType & {
    avatar: string | undefined
    name: string | undefined
    deletePost: (postId: string) => void
}

const Post = (props: PostPropsType) => {
    return (
        <div className={classes.post}>

            <div className={classes.user}>
                <img alt="user"
                     src={props.avatar || userPhoto}
                     className={classes.avatar}/>
                <h3>{props.name || 'Marty Wilson'}</h3>
            </div>
            <div className={classes.message}>{props.message}</div>
            <div className={classes.bottomBlock}>
                <AiFillHeart className={classes.like}/>
                <p>{props.likesCount}</p>
                <AiFillDelete className={classes.basket} onClick={() => props.deletePost(props.id)}/>
            </div>
        </div>
    )
}

export default Post