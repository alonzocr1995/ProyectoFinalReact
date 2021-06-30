import React, { useCallback, useEffect, useState } from "react";
import { IMovie } from "../../modules/Home/hooks/useMovies";
import { ITvShow } from "../../modules/Home/hooks/useTvShows";
import storageManager from "../utils/localStorage";
interface IWishListContext {
  movies: IMovie[];
  handleMovies?: (movie: IMovie) => void;
  tvShows: ITvShow[];
  handleTvShows?: (tvShow: ITvShow) => void;
}

const WishListContext = React.createContext({
  movies: [],
  tvShows: [],
} as IWishListContext);

const WishListProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [tvShows, setTvShows] = useState<ITvShow[]>([]);

  const handleMovies = useCallback(
    (movie: IMovie) => {
      const newMovies = [...movies];
      newMovies.push(movie);
      setMovies(newMovies);
      storageManager.save("movies", newMovies);
    },
    [movies, setMovies]
  );

  const handleLoadMovies = useCallback(() => {
    const storedMovies = storageManager.get("movies");
    setMovies(storedMovies || []);
  }, [setMovies]);

  const handleTvShows = useCallback(
    (tvShow: ITvShow) => {
      const newTvShows = [...tvShows];
      newTvShows.push(tvShow);
      setTvShows(newTvShows);
      storageManager.save("tv-shows", newTvShows);
    },
    [tvShows, setTvShows]
  );

  const handleLoadTvShows = useCallback(() => {
    const storedTvShows = storageManager.get("tv-shows");
    setTvShows(storedTvShows || []);
  }, [setTvShows]);

  useEffect(() => {
    handleLoadMovies();
    handleLoadTvShows();
  }, [handleLoadMovies, handleLoadTvShows]);

  return (
    <WishListContext.Provider
      value={{ movies, handleMovies, tvShows, handleTvShows }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export { WishListProvider, WishListContext };
