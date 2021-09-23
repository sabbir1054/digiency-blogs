import React from 'react';
import Categories from '../Categories/Categories';
import Latest from '../LatestPosts/Latest';
import Search from '../Search/Search';
import Tags from '../Tags/Tags';

const SideBar = () => {
    const searchHead="Search"
    const iconID = "fas fa-search";
    const place="Search"
    return (
        <div className="mt-5">
            <Search icon={iconID} head={searchHead} placeHolder={place}/>
            <Latest />
            <Categories />
            <Tags/>
        </div>
    );
};

export default SideBar;