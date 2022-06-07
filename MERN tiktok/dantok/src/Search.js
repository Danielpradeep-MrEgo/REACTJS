import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";

function Search() {
  return (
    <div className="search__page">
      <div className="search">
        <SearchIcon className="search__icon" />
        <div className="search__back">
          <input type="text" />
        </div>
        <p>search</p>
      </div>
      <br/>
    </div>
  );
}

export default Search;
