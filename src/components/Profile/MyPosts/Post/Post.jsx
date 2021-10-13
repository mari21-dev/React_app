import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://kartinkin.net/uploads/posts/2021-07/1625174407_5-kartinkin-com-p-blondinka-s-golubimi-glazami-art-art-krasi-6.jpg"
                alt=""/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;