import classes from "./Post.module.css";
import React from "react";

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpH2L9SxARizd9V_dTyF1xaNW_71Tj0QjKQ&usqp=CAU" alt="avatar"/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post