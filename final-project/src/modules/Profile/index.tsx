import React from "react";
import HeaderNav from "../../Componets/HeaderNav";
import { useSeen } from "../../shared/hooks/useSeen";
import { useWishList } from "../../shared/hooks/useWishList";
import Row from "../../UI/Row";
import MovieCard from "../Home/components/MovieCard";
import TvShowCard from "../Home/components/TvShowCard";

const Profile: React.FC = () => {
  const wishList = useWishList();
  const seen = useSeen();
  return (
    <div>
      <HeaderNav />
      <h1>Profile view</h1>
      <Row>
        <h2>Movies Wish List</h2>

        <section>
          {wishList.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isLargeRow={true} />
          ))}
        </section>
      </Row>
      <Row>
        <h2>Tv Shows Wish List</h2>

        <section>
          {wishList.tvShows.map((tvShow) => (
            <TvShowCard key={tvShow.id} tvShow={tvShow} isLargeRow={true} />
          ))}
        </section>
      </Row>
      <Row>
        <h2>Movies Seen</h2>

        <section>
          {seen.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isLargeRow={true} />
          ))}
        </section>
      </Row>
      <Row>
        <h2>Tv Shows Seen</h2>

        <section>
          {seen.tvShows.map((tvShow) => (
            <TvShowCard key={tvShow.id} tvShow={tvShow} isLargeRow={true} />
          ))}
        </section>
      </Row>
    </div>
  );
};

export default Profile;
