import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("./data/blogs.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data));
        
    },[])

    return (
        <div className="blogs">
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id }/>)
            }
        </div>
    );
};

export default Blogs;