import { useCallback, useEffect, useState } from "react";
import axios from "../../../axios";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  first_air_date: string;
}

export const useMovies = (fetchUrl: string) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(fetchUrl);

      setMovies(response.data.results);
    } catch {
      console.error("Error");
    }
  }, [setMovies, fetchUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { movies };
};
