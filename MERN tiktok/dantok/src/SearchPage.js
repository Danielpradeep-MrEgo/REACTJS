import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Search from "./Search";
import "./SearchPage.css";

function SearchPage({ sucess, igurl, type, error, hashtags }) {
  return (
    <div className="searchpage">
      <Search />
      {/* <br/> */}
      <div className="searchpage__icon">
        <FontAwesomeIcon className="icon__tag" icon={faHashtag} color="black" />
        <div className="searchpage__headings">
          <h3>{hashtags}</h3>
          <p>djnwgjb</p>
          {/* {
            ((sucess = true),
            (igurl =
              "https://instagram.fcgk12-1.fna.fbcdn.net/v/t50.2886-16/55416859_1387882458021060_5854388449942962176_n.mp4?_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=100&oe=5D9D001F&oh=ade8e8ca65ce88536092937a7ad849d6"),
            (type = "2"))
          } */}
          {/* {
            <img src="https://www.tiktok.com/@scout2015/video/6718335390845095173"/>
          } */}

        </div>
      </div>
    </div>
  );
}

export default SearchPage;
