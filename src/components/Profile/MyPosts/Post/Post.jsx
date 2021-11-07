import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://pp.userapi.com/c836320/v836320225/63fbc/-AL8gmuPvCM.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>like</span>  {props.likesCount}
            </div>
        </div>
    )
}

export default Post;