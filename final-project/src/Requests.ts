const API_KEY = "26ad1266b23ce88b17ccd0ae4e271cc5";
interface Request {
  [key: string]: string;
}
const requests: Request = {
  "Upcoming Movies": `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  "Popular Movies": `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  "Top Rated TV Shows": `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

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
