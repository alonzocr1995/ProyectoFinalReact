import React, { useState } from "react";
import { useMovie } from "./hooks/useMovie";
import Card from "../../UI/Card";
import HeaderNav from "../../Componets/HeaderNav";
import Rating from "react-simple-star-rating";
import axios from "../../axios";
import { movieRatingRequest } from "../../Requests";

const MovieScreen: React.FC = () => {
  const { movie } = useMovie();
  const [rating, setRating] = useState(0);

  const handleRating = async (rate: number) => {
    setRating(rate);
    try {
      const movieRatingPath = movieRatingRequest(movie?.id as number);
      console.log(movieRatingPath);

      const response = await axios.post(
        movieRatingPath,
        {
          value: rate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("ratingRes", response);
    } catch (error) {
      console.log(error);
    }
  };

  const base_url = "https://image.tmdb.org./t/p/original/";

  // const rating = Math.round(Number(movie?.vote_average));
  return (
    <>
      <HeaderNav />
      <Card>
        <img
          width="200px"
          height="200px"
          src={`${base_url}${movie?.poster_path}`}
          alt=""
        />
        <h1>{movie?.title || movie?.name}</h1>
        {/* <h1 style={{ color: "white" }}>¨{tv?.backdrop_path}</h1> */}

        <div>
          <p>{movie?.overview}</p>
        </div>
        {movie?.id && (
          <div>
            <label htmlFor="">Rate the movie</label>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              stars={10}
              size={20}
              label
              transition
              fillColor="orange"
              emptyColor="gray"
            />
          </div>
        )}
      </Card>
    </>
  );
};

export default MovieScreen;
