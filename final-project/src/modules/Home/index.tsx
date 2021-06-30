import React from "react";

import HeaderNav from "../../Componets/HeaderNav";
import requests from "../../Requests";
import { requestsTv } from "../../Requests";

import MovieRow from "./components/MovieRow";
import TvShowRow from "./components/TvShowRow";

import styled from "styled-components";
import { useWishList } from "../../shared/hooks/useWishList";
import { useSeen } from "../../shared/hooks/useSeen";

const Home = styled.div`
  margin-top: 200px;
`;

const HomeScreen: React.FC = () => {
  const seen = useSeen();
  const wishList = useWishList();
  console.log("letsseetheWish", wishList.movies, wishList.tvShows);
  console.log("letsseetheSeen", seen.movies, seen.tvShows);

  return (
    <Home>
      <HeaderNav />
      {Object.keys(requests).map((req) => (
        <MovieRow key={req} fetchUrl={requests[req]} title={req} isLargeRow />
      ))}
      {Object.keys(requestsTv).map((req) => {
        return (
          <TvShowRow
            key={req}
            fetchUrl={requestsTv[req]}
            title={req}
            isLargeRow
          />
        );
      })}
    </Home>
  );
};

export default HomeScreen;
