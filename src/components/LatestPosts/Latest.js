import React from "react";
import Post from "../Post/Post";
import './Latest.css'
const Latest = () => {
  const postsData = [
    {
      id: 1,
      img: "./images/img1.png",
      title: "Minimal Post With A Preview Image",
    },
    {
      id: 2,
      img: "./images/img2.png",
      title: "Good Design Makes Me Happy",
    },
    {
      id: 3,
      img: "./images/img3.png",
      title: "Best 27 Design Blogs for 2021",
    },
    {
      id: 4,
      img: "./images/img4.png",
      title: "Creative Ways To Use Ideographies For Your Business",
    },
    {
      id: 5,
      img: "./images/img.png",
      title: "Tumblr Banner Templates : Tips To Get Better Engagement",
    },
  ];
  return (
      <div className="all-post py-3 mb-5">
          <h3 className="fw-bold pt-3 ps-3">Posts</h3>
          {
              postsData.map(post => <Post post={ post}/>)
          }
    </div>
  );
};

export default Latest;
