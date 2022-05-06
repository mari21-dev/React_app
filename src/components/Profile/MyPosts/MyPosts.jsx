import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20);

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>New post</div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Post message' component={Textarea} cols="15" rows="2" name="newPostText"
                       validate={[requiredField, maxLength20]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({
    form: "profileAddNewPostForm"
})(AddNewPostForm)

export default MyPosts;