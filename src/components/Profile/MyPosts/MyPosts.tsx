import classes from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {FormControl} from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                   likesCount={p.likesCount}/>)

    const addNewPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts

type FormDataType = {
    newPostText: string
}

const PostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} placeholder={'write a post'} component={FormControl}
                   validate={[required, maxLength10]} FieldType={'textarea'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm<FormDataType>({
    form: 'profileAddPostReduxForm'
})(PostsForm)