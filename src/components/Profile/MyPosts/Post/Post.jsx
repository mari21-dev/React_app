import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://lh3.googleusercontent.com/proxy/4aj4j0Bo8XjFBJJz3dCzedJCEzwEwWkgsmVpzsFvWOPg--w94-Yz3pxJHolvRc1y3zWq3ChfJlM5mguSsPNvDmRGvffdBwA23Ibzo3shuigsPHn6rJDZrekcqFZmpQ1XlolQUdaBX835cTXZjl-atVY"
                alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;