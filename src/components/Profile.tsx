import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/08/22/00/38/meadow-2667461_960_720.jpg" alt="bg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New posts</div>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </div>
    )
}

export default Profile