import React from 'react';
import Blogs from '../Blogs/Blogs';
import SideBar from '../SideBarContent/SideBar';
import './Main.css'
const Main = () => {
    return (
      <div className="container main-section mb-5">
        <div className="row">
          <div className="col-md-8">
            <Blogs />
          </div>
          <div className="col-md-4">
            <SideBar />
          </div>
        </div>
      </div>
    );
};

export default Main;