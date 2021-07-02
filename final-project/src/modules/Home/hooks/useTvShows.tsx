import { useCallback, useEffect, useState } from "react";
import axios from "../../../axios";

export interface ITvShow {
  backdrop_path: null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export const useTvShows = (fetchUrl: string) => {
  const [tvShows, setTvShows] = useState<ITvShow[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(fetchUrl);

      setTvShows(response.data.results);
    } catch {
      console.error("Error");
      // TODO: Add toast error
    }
  }, [setTvShows, fetchUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { tvShows };
};
