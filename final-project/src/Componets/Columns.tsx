import React, { useState } from "react";
import requests from "../Requests";
import Card from "../UI/Card";
import axios from "../axios";
import styled from "styled-components";
import Button from "../UI/Button";

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
}

const Div = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: center;
`;

const Columns: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  // const [tvShows, setTvShows] = useState<ITvShow[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const base_url = "https://image.tmdb.org./t/p/original";

  async function fetchData(pathURL: string) {
    setIsLoading(true);
    const request = await axios.get(pathURL);
    setMovies(request.data.results);
    console.log(request);
    setIsLoading(false);
  }

  console.log("mov:", movies);

  return (
    <div>
      <Div>
        {Object.keys(requests).map((req) => (
          // <button key={req} onClick={() => fetchData(requests[req])}>
          //   {req}
          // </button>

          <Button key={req} onClick={() => fetchData(requests[req])}>
            {req}
          </Button>
        ))}
      </Div>

      {isLoading && <p>Loading...</p>}

      {movies.map((movie) => (
        <Card>
          <ul>
            <li key={movie.id}>
              {movie.backdrop_path === null ? (
                <img
                  src="https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"
                  alt=""
                />
              ) : (
                <img
                  width="300px"
                  height="300px"
                  src={`${base_url}${movie?.backdrop_path}`}
                  alt=""
                />
              )}

              <p> {movie.title || movie.name}</p>
              <p>{movie.overview}</p>
            </li>
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default Columns;
