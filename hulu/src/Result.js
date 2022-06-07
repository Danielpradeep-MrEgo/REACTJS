import React, { useState, useEffect } from "react";
import "./Result.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import requests from "./requests";
import { SaveRounded, ChatOutlined } from "@material-ui/icons";
import Navbar from "./Navbar";
import FlipMove from "react-flip-move";

function Result({ selectedOption }) {
  //it will render 3 video cards as ++ of []
  //const [movies, setMovies] = useState(["1", "2", "3"])
  const [movies, setMovies] = useState([]);

  //async will pull the request
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(selectedOption);
      // console.log(request)
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
    // effect
    // return () => {
    //     cleanup
    // }
  }, [selectedOption]);
  return (
    <div className="result">
      <FlipMove>
        {movies.map((movie) => (
          // {movie.id} will make that glitchi loading thing disappear
          // and make loads smoother
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
