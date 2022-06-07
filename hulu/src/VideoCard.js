import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";


// fucntion VideoCard({movie}) {
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    // <div className="videoCard">
    // this will refers the every video in the browser
    <div ref={ref} className="videoCard">
      <img
        //src="data:image/jpeg;base64,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" width="90%"
        src={`${base_url}${movie.backdrop_path || movie.paster_path}`}
        alt="movie poster"
      />

      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
        //   textTruncateChild={<a href="#">Read on</a>}
      />

      {/* <p>{movie.release_date || movie.first_air_date}</p> */}
      {/* <p>{movie.overview}</p> */}
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
          {/* && == only then */}
          {movie.media_type && `$(movie.media_type) . `}
          {movie.release_date || movie.first_air_date}
        <ThumbUpSharp /> { " " }
        {movie.vote_count}
      </p>
    </div>
  );
})

export default VideoCard;