import MyPosts from './MyPosts';
import {addPostTC, deletePostAC, PostType} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/redux-store';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

type mapStateToPropsType = {
    posts: Array<PostType>
    avatar: string | undefined
    name: string | undefined
}
type mapDispatchToPropsType = {
    addPost: (newPost: string) => void
    deletePost: (postId: string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        avatar: state.profilePage.profile?.photos?.small,
        name: state.profilePage.profile?.fullName
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): mapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => dispatch(addPostTC(newPost)),
        deletePost: (postId: string) => dispatch(deletePostAC(postId))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer