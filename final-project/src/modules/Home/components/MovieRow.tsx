import React, { ChangeEvent, useCallback, useState } from "react";
import Row from "../../../UI/Row";
import { IMovie, useMovies } from "../hooks/useMovies";
import MovieCard from "./MovieCard";
interface RowProps {
  fetchUrl: string;
  title: string;
  isLargeRow: boolean;
}

interface SortOptions {
  [key: string]: (movieList: IMovie[]) => IMovie[];
}

const MovieRow: React.FC<RowProps> = ({
  fetchUrl,
  title,
  isLargeRow = false,
}) => {
  const [sortOption, setSortOption] = useState<string>("");
  const { movies } = useMovies(fetchUrl);

  // const movieList = [...movies];

  const handleRatingSort = (movieList: IMovie[]): IMovie[] =>
    movieList
      .map((movie) => movie)
      .sort((a, b) => b.vote_average - a.vote_average);

  const handleAlphabeticSort = (movieList: IMovie[]): IMovie[] =>
    movieList
      .map((movie) => movie)
      .sort((a, b) => {
        if (b.title > a.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });

  // useEffect(() => {
  //   setSortedMovies(movies);
  // }, [setSortedMovies, movies]);

  const handleSortedMoviesChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSortOption(event?.target?.value);
    },
    [setSortOption]
  );

  const handleSortedMovies = (moviesList: IMovie[]) => {
    const sortOptions: SortOptions = {
      rating: handleRatingSort,
      alphabetic: handleAlphabeticSort,
    };
    const sortHandler = sortOption && sortOptions[sortOption];
    return sortHandler ? sortHandler(moviesList) : moviesList;
  };

  return (
    <Row>
      <h2>{title}</h2>
      <label htmlFor="">Filter By</label>

      <select name="select" onChange={handleSortedMoviesChange}>
        <option value="">Default</option>
        <option value="rating">Rating</option>
        <option value="alphabetic">Alphabetic</option>
      </select>

      <section>
        {handleSortedMovies(movies).map((movie) => (
          <MovieCard key={movie.id} movie={movie} isLargeRow={isLargeRow} />
        ))}
      </section>
    </Row>
  );
};

export default MovieRow;
