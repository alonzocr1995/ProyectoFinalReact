import React from "react";
import { useTvShow } from "./hooks/useTvShow";
import Card from "../../UI/Card";
import HeaderNav from "../../Componets/HeaderNav";

const TvShow: React.FC = () => {
  const { tvShow } = useTvShow();

  const base_url = "https://image.tmdb.org./t/p/original/";

  //   const rating = Math.round(Number(tvShow?.vote_average));
  return (
    <>
      <HeaderNav />
      <Card>
        <img
          width="200px"
          height="200px"
          src={`${base_url}${tvShow?.poster_path}`}
          alt=""
        />
        <h1>{tvShow?.name}</h1>
        {/* <h1 style={{ color: "white" }}>¨{tv?.backdrop_path}</h1> */}

        <div>
          <p>{tvShow?.overview || "Unknown"}</p>
        </div>
        <div>
          <label htmlFor="">Rate the tvShow</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </Card>
    </>
  );
};

export default TvShow;
