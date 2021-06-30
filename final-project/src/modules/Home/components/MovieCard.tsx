import React from "react";
import { IMovie } from "../hooks/useMovies";
import Button from "../../../UI/Button";
import { Link } from "react-router-dom";
import { useWishList } from "../../../shared/hooks/useWishList";
import { useSeen } from "../../../shared/hooks/useSeen";

interface SectionProps {
  movie: IMovie;
  isLargeRow: boolean;
}

const MovieCard: React.FC<SectionProps> = ({ movie, isLargeRow }) => {
  const wishList = useWishList();
  const seen = useSeen();
  const base_url = "https://image.tmdb.org./t/p/original/";
  const isMovieInWishList = wishList?.movies?.find(
    (wlMovie) => wlMovie.id === movie.id
  );
  const isMovieInSeen = seen?.movies?.find(
    (seenMovie) => seenMovie.id === movie.id
  );


  return (
    <div key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      </Link>
      <p>
        {movie.release_date?.slice(0, 4) ||
          movie.first_air_date?.slice(0, 4) ||
          "2021"}
      </p>
      <label htmlFor="">Rating: {movie.vote_average}</label>

      <div>
        <Button
          disabled={!!isMovieInSeen}
          onClick={() => seen.handleMovies && seen.handleMovies(movie)}
        >
          {isMovieInSeen ? "Adden to Seen" : "Seen"}
        </Button>
        <Button
          disabled={!!isMovieInWishList}
          onClick={() => wishList.handleMovies && wishList.handleMovies(movie)}
        >
          {isMovieInWishList ? "Added to WL" : "Wish List"}
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
