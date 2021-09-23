import React from 'react';
import'./Post.css'
const Post = (props) => {
    const { img, title } = props.post;
    return (
        <div className="py-2 post px-3">
            <div className="singlePost d-flex align-items-center">
                <img src={ img } alt="" />
                <p className="fw-bold fs-6 ms-3">{title}</p>
            </div>
        </div>
    );
};

export default Post;