import React, { useEffect, useState } from "react";
import Row from "../UI/Row";
import axios from "../axios";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
interface RowProps {
  fetchUrl: any;
  title: string;
  isLargeRow: any;
}

interface IMovie {
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

const Rows: React.FC<RowProps> = ({ fetchUrl, title, isLargeRow = false }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const base_url = "https://image.tmdb.org./t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <Row>
      <h2>{title}</h2>

      <section>
        {movies.map((movie) => (
          <div>
            <Link to="movie">
              <img
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </Link>
            <p>
              {movie.release_date?.slice(0, 4) ||
                movie.first_air_date?.slice(0, 4)}
            </p>
            <div>
              <Button>Seen</Button>
              <Button>Wish List</Button>
            </div>
          </div>
        ))}
      </section>
    </Row>
  );
};

export default Rows;
