import React, { useEffect, useState } from "react";
import { useTvShow } from "./hooks/useTvShow";
import Card from "../../UI/Card";
import HeaderNav from "../../Componets/HeaderNav";
import Rating from "react-simple-star-rating";
import axios from "../../axios";
import { IGuessSessionResp } from "../Movie";
import { guestSession, tvRatingRequest } from "../../Requests";

const TvShow: React.FC = () => {
  const { tvShow } = useTvShow();

  const [rating, setRating] = useState(0);

  const handleRating = async (rate: number) => {
    setRating(rate);
    try {
      const sessionResponse = await axios.get<IGuessSessionResp>(guestSession);

      const movieRatingPath = tvRatingRequest(
        tvShow?.id as number,
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
    if (tvShow) {
      setRating(tvShow.vote_average);
    }
  }, [tvShow]);

  const base_url = "https://image.tmdb.org./t/p/original/";

  //   const rating = Math.round(Number(tvShow?.vote_average));
  return (
    <>
      <HeaderNav />
      <Card>
        <img
          width="200px"
          height="200px"
          src={`${base_url}${tvShow?.poster_path}`}
          alt=""
        />
        <h1>{tvShow?.name}</h1>
        {/* <h1 style={{ color: "white" }}>¨{tv?.backdrop_path}</h1> */}

        <div>
          <p>{tvShow?.overview || "Unknown"}</p>
        </div>
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
      </Card>
    </>
  );
};

export default TvShow;
