import classes from './MyPosts.module.scss';
import React from 'react';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';
import userPhoto from '../../../assets/images/userPhoto.jpg';
import {Button} from '../../common/Button/Button';

const maxLength10 = maxLengthCreator(30)

const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                   likesCount={p.likesCount}/>)

    const addNewPost = (formData: FormDataType) => {
        if (formData.newPostText.trim() === '') return
        props.addPost(formData.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <div className={classes.postBg}><h3>What's new?</h3>
                <div className={classes.newPost}>
                    <img alt="user"
                         src={props.avatar || userPhoto}
                         className={classes.avatar}/>
                    <AddPostReduxForm onSubmit={addNewPost}/>
                </div>
            </div>
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
            <Field name={'newPostText'} placeholder={'write a post'} component={Textarea}
                   validate={[maxLength10]} FieldType={'textarea'}/>
        </div>
        <div>
            <Button title={'Add post'}/>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm<FormDataType>({
    form: 'profileAddPostReduxForm'
})(PostsForm)