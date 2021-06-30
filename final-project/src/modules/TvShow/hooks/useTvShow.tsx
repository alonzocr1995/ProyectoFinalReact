import axios from "../../../axios";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { tvRequest } from "../../../Requests";
import { ITvShowInfo } from "../types";

export const useTvShow = () => {
  const routeMatch = useRouteMatch<{ id: string }>();
  const tvPath = tvRequest(routeMatch.params.id);
  const history = useHistory();

  const [tvShow, setTv] = useState<ITvShowInfo>();

  const handleLoadTvShow = useCallback(async () => {
    try {
      const tvResponse = await axios.get<ITvShowInfo>(tvPath);
      setTv(tvResponse.data);
    } catch (error) {
      history.push("/");
      console.error(error);
    }
  }, [history, setTv, tvPath]);

  useEffect(() => {
    handleLoadTvShow();
  }, [handleLoadTvShow]);

  return { tvShow };
};
