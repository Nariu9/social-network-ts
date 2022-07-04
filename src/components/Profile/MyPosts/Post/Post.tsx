import classes from "./Post.module.css";
import React from "react";
import {PostPropsType} from "../../../../redux/store";



const Post = (props:PostPropsType) => {
    return (
        <div className={classes.item}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpH2L9SxARizd9V_dTyF1xaNW_71Tj0QjKQ&usqp=CAU" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post