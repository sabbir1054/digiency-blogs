import React from "react";
import "./Tags.css";
const Tags = () => {
  return (
    <div className="tag-div mt-5">
      <h3 className="fw-bold mb-3">Tags</h3>
      <div className="tags">
        <p>
          <span className="color-text">Business</span>
        </p>
        <p>
          <span className="color-text">Graphic Design</span>
        </p>
        <p>
          <span className="color-text"> Technology</span>
        </p>
        <p>
          <span className="color-text">App Development</span>
        </p>
        <p>
          <span className="color-text">Website Design</span>
        </p>
        <p>
          <span className="color-text">Business Idea</span>
        </p>
      </div>
    </div>
  );
};

export default Tags;
