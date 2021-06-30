import React from "react";
import Row from "../../../UI/Row";

import { useTvShows } from "../hooks/useTvShows";
import TvShowCard from "./TvShowCard";
interface RowProps {
  fetchUrl: string;
  title: string;
  isLargeRow: boolean;
}

const TvShowRow: React.FC<RowProps> = ({
  fetchUrl,
  title,
  isLargeRow = false,
}) => {
  const { tvShows } = useTvShows(fetchUrl);

  return (
    <Row>
      <h2>{title}</h2>

      <section>
        {tvShows.map((tvShow) => (
          <TvShowCard key={tvShow.id} tvShow={tvShow} isLargeRow={isLargeRow} />
        ))}
      </section>
    </Row>
  );
};

export default TvShowRow;
