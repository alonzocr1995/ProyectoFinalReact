import React, { useCallback, useEffect, useState } from "react";
import { IMovie } from "../../modules/Home/hooks/useMovies";
import { ITvShow } from "../../modules/Home/hooks/useTvShows";
import storageManager from "../utils/localStorage";

interface ISeenContext {
  movies: IMovie[];
  handleMovies?: (movie: IMovie) => void;
  tvShows: ITvShow[];
  handleTvShows?: (movie: ITvShow) => void;
}

const SeenContext = React.createContext({
  movies: [],
  tvShows: [],
} as ISeenContext);

const SeenProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [tvShows, setTvShows] = useState<ITvShow[]>([]);

  const handleMovies = useCallback(
    (movie: IMovie) => {
      const newMovies = [...movies];
      newMovies.push(movie);
      setMovies(newMovies);
      storageManager.save("seen-movies", newMovies);
    },
    [movies, setMovies]
  );

  const handleLoadMovies = useCallback(() => {
    const storedMovies = storageManager.get("seen-movies");
    setMovies(storedMovies || []);
  }, [setMovies]);

  const handleTvShows = useCallback(
    (movie: ITvShow) => {
      const newTvShows = [...tvShows];
      newTvShows.push(movie);
      setTvShows(newTvShows);
      storageManager.save("seen-tv-shows", newTvShows);
    },
    [tvShows, setTvShows]
  );

  const handleLoadTvShows = useCallback(() => {
    const storedTvShows = storageManager.get("seen-tv-shows");
    setTvShows(storedTvShows || []);
  }, []);

  useEffect(() => {
    handleLoadMovies();
    handleLoadTvShows();
  }, [handleLoadMovies, handleLoadTvShows]);

  return (
    <SeenContext.Provider
      value={{ movies, handleMovies, tvShows, handleTvShows }}
    >
      {children}
    </SeenContext.Provider>
  );
};

export { SeenProvider, SeenContext };
