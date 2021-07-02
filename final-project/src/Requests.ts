const API_KEY = "26ad1266b23ce88b17ccd0ae4e271cc5";
interface Request {
  [key: string]: string;
}
const requests: Request = {
  "Upcoming Movies": `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  "Popular Movies": `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export const requestsTv: Request = {
  "Top Rated TV Shows": `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export const movieRequest = (movie_id: string) =>
  `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

export const tvRequest = (tv_id: string) =>
  `/tv/${tv_id}?api_key=${API_KEY}&language=en-US`;

export const movieRatingRequest = (
  movie_id: number,
  guest_session_id: string
) =>
  `/movie/${movie_id}/rating?api_key=${API_KEY}&guest_session_id=${guest_session_id}`;

export const tvRatingRequest = (tv_id: number, guest_session_id: string) =>
  `/tv/${tv_id}/rating?api_key=${API_KEY}&guest_session_id=${guest_session_id}`;

export const guestSession = `/authentication/guest_session/new?api_key=${API_KEY}`;

// https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=<<api_key>>

export default requests;

// const API_KEY = "26ad1266b23ce88b17ccd0ae4e271cc5";
// interface Request {
//   movie: {
//     [key: string]: string;
//   };
//   tv: {
//     [key: string]: string;
//   };
// }
// const requests: Request = {
//   movie: {
//     "Upcoming Movies": `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
//     "Popular Movies": `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
//   },
//   tv: {
//     "Top Rated TV Shows": `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
//   },
// };

// export default requests;
