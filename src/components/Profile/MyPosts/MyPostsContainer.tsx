import React from 'react';
import MyPosts from './MyPosts';
import {addPostCreator, PostType} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    posts: Array<PostType>
}
type mapDispatchToPropsType = {
    addPost: (newPost: string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => dispatch(addPostCreator(newPost)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer