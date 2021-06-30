import axios from "../../../axios";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { movieRequest } from "../../../Requests";
import { IMovieInfo } from "../types";

export const useMovie = () => {
  const history = useHistory();
  const [movie, setMovie] = useState<IMovieInfo>();
  const routeMatch = useRouteMatch<{ id: string }>();
  const moviePath = movieRequest(routeMatch.params.id);

  const handleLoadMovie = useCallback(async () => {
    try {
      const movieResponse = await axios.get<IMovieInfo>(moviePath);
      setMovie(movieResponse.data);
    } catch (error) {
      history.push("/");
      console.error(error);
    }
  }, [history, setMovie, moviePath]);

  useEffect(() => {
    handleLoadMovie();
  }, [handleLoadMovie]);

  return { movie };
};
