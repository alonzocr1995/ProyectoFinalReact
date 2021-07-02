import React, { useEffect, useState } from "react";
import { useMovie } from "./hooks/useMovie";
import Card from "../../UI/Card";
import HeaderNav from "../../Componets/HeaderNav";
import Rating from "react-simple-star-rating";
import axios from "../../axios";
import { guestSession, movieRatingRequest } from "../../Requests";

export interface IGuessSessionResp {
  expires_at: string;
  guest_session_id: string;
  success: boolean;
}

const MovieScreen: React.FC = () => {
  const { movie } = useMovie();
  const [rating, setRating] = useState(0);

  const handleRating = async (rate: number) => {
    setRating(rate);
    try {
      const sessionResponse = await axios.get<IGuessSessionResp>(guestSession);

      const movieRatingPath = movieRatingRequest(
        movie?.id as number,
        sessionResponse.data.guest_session_id
      );

      const data = {
        value: rate,
      };

      await axios.post(movieRatingPath, data, {
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (movie) {
      setRating(movie.vote_average);
    }
  }, [movie]);

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
