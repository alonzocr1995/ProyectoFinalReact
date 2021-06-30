import React, { useCallback, useEffect, useState } from "react";
import Row from "../../../UI/Row";
import { IMovie, useMovies } from "../hooks/useMovies";
import MovieCard from "./MovieCard";
interface RowProps {
  fetchUrl: string;
  title: string;
  isLargeRow: boolean;
}

// interface FilterMovies {
//   moviesList: IMovie[];
//   ratingList: IMovie[];
//   alphabetic: IMovie[];
// }

const MovieRow: React.FC<RowProps> = ({
  fetchUrl,
  title,
  isLargeRow = false,
}) => {
  const [filter, setFilter] = useState<IMovie[]>([]);
  const { movies } = useMovies(fetchUrl);

  const movieList = [...movies];
  console.log(movieList);

  const ratingList = movieList
    .map((movie) => movie)
    .sort((a, b) => b.vote_average - a.vote_average);

  const alphabeticList = movieList
    .map((movie) => movie)
    .sort((a, b) => {
      if (b.title > a.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  console.log("alpha", alphabeticList);

  console.log("rate", ratingList);

  const handleFilteredMovies = useCallback(
    (event: any) => {
      console.log(event.target.value);
      if (event.target.value === "Rating") return setFilter(ratingList);

      if (event.target.value === "Alphabetic") return setFilter(alphabeticList);

      return setFilter(movies);
    },
    [setFilter, ratingList, alphabeticList, movies]
  );

  useEffect(() => {
    setFilter(movies);
  }, [setFilter, movies]);

  return (
    <Row>
      <h2>{title}</h2>
      <label style={{ color: "white" }} htmlFor="">
        Filter By
      </label>

      <select name={"select"} onChange={handleFilteredMovies}>
        <option value="Rating">Rating</option>
        <option value="Alphabetic">Alphabetic</option>
      </select>

      <section>
        {filter.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isLargeRow={isLargeRow} />
        ))}
      </section>
    </Row>
  );
};

export default MovieRow;
