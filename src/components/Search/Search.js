import React from "react";
import './Search.css'
const Search = (props) => {
    
  return (
    <div className="pb-5">
          <h3 className="fw-bold">{props.head }</h3>

      <div class="input-group mb-3 pe-3">
        <input type="text" className="form-control input" placeholder={props.placeHolder} />
        <span className="input-group-text" id="search-btn">
                  <i className={props.icon}></i>
        </span>
      </div>
    </div>
  );
};

export default Search;
