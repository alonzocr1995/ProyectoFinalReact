import React from "react";
// import axios from "./axios";
// import requests from "./Requests";
import "./App.css";
import HomeScreen from "./Componets/HomeScreen";
import MovieScreen from "./Componets/MovieScreen";
import LoginScreen from "./Componets/LoginScreen";
import { Switch, Route } from "react-router-dom";
// import Card from "./UI/Card";
// interface IMovie {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
//   name: string;
// }

// interface ITvShow {
//   backdrop_path: null;
//   first_air_date: string;
//   genre_ids: number[];
//   id: number;
//   name: string;
//   origin_country: string[];
//   original_language: string;
//   original_name: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   vote_average: number;
//   vote_count: number;
// }

const App: React.FC = () => {
  // const [movies, setMovies] = useState<IMovie[]>([]);
  // // const [tvShows, setTvShows] = useState<ITvShow[]>([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const base_url = "https://image.tmdb.org./t/p/original";

  // async function fetchData(pathURL: string) {
  //   setIsLoading(true);
  //   const request = await axios.get(pathURL);
  //   setMovies(request.data.results);
  //   console.log(request);
  //   setIsLoading(false);
  // }

  // console.log("mov:", movies);
  const user = null;

  return (
    <>
      {/* {Object.keys(requests).map((req) => (
        <button key={req} onClick={() => fetchData(requests[req])}>
          {req}
        </button>
      ))}

      {isLoading && <p>Loading...</p>}

      <ul>
        {movies.map((movie) => (
          <Card>
            <li key={movie.id}>
              {movie.backdrop_path === null ? (
                <p> no image to show </p>
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
          </Card>
        ))}
      </ul> */}

      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/movie">
          <MovieScreen />
        </Route>
      </Switch>
    </>
  );
};

export default App;
