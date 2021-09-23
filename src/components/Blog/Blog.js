import React from "react";
import './Blog.css'
const Blog = (props) => {
 
    const { img, title, describe } = props.blog;
    return (
      <div className="container mt-4 blog">
        <div className="d-flex justify-content-center">
          <div>
            <div className="w-90">
              <img src={img} className="img-fluid" alt="" />
            </div>
            <h3 className="my-3">{title}</h3>
            <p className="fs-6 w-90 text-justify text-dark">{describe}</p>
          </div>
        </div>
      </div>
    );
};

export default Blog;
