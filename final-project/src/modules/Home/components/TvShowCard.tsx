import React from "react";
import Button from "../../../UI/Button";
import { Link } from "react-router-dom";
import { ITvShow } from "../hooks/useTvShows";
import { useWishList } from "../../../shared/hooks/useWishList";
import { useSeen } from "../../../shared/hooks/useSeen";

interface Props {
  tvShow: ITvShow;
  isLargeRow: boolean;
}

const TvShowCard: React.FC<Props> = ({ tvShow, isLargeRow }) => {
  const wishList = useWishList();
  const seen = useSeen();
  const base_url = "https://image.tmdb.org./t/p/original/";

  const tvShowInWishListIndex = wishList?.tvShows?.findIndex(
    (wlTvShow) => wlTvShow.id === tvShow.id
  );
  const tvShowInSeenIndex = seen?.tvShows?.findIndex(
    (seenTvShow) => seenTvShow.id === tvShow.id
  );

  return (
    <div key={tvShow.id}>
      <Link to={`/tv-show/${tvShow.id}`}>
        <img
          src={`${base_url}${
            isLargeRow ? tvShow.poster_path : tvShow.backdrop_path
          }`}
          alt={tvShow.name}
        />
      </Link>
      <p>{tvShow.first_air_date?.slice(0, 4) || "2021"}</p>
      <label htmlFor="">Rating: {tvShow.vote_average}</label>

      <div>
        <Button
          disabled={tvShowInSeenIndex > -1}
          onClick={() => seen.handleTvShows && seen.handleTvShows(tvShow)}
        >
          {tvShowInSeenIndex > -1 ? "Added to Seen" : "Seen"}
        </Button>
        <Button
          disabled={tvShowInWishListIndex > -1}
          onClick={() =>
            wishList.handleTvShows && wishList.handleTvShows(tvShow)
          }
        >
          {tvShowInWishListIndex > -1 ? "Added to WL" : "Wish List"}
        </Button>
      </div>
    </div>
  );
};

export default TvShowCard;
