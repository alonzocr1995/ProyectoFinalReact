import React, { ChangeEvent, useCallback, useState } from "react";
import Row from "../../../UI/Row";
import { ITvShow, useTvShows } from "../hooks/useTvShows";
import TvShowCard from "./TvShowCard";
interface RowProps {
  fetchUrl: string;
  title: string;
  isLargeRow: boolean;
}

interface SortOptions {
  [key: string]: (movieList: ITvShow[]) => ITvShow[];
}

const TvShowRow: React.FC<RowProps> = ({
  fetchUrl,
  title,
  isLargeRow = false,
}) => {
  const { tvShows } = useTvShows(fetchUrl);
  const [sortOption, setSortOption] = useState<string>("");

  // const movieList = [...movies];

  const handleRatingSort = (tvShowList: ITvShow[]): ITvShow[] =>
    tvShowList
      .map((tvShow) => tvShow)
      .sort((a, b) => b.vote_average - a.vote_average);

  const handleAlphabeticSort = (tvShowList: ITvShow[]): ITvShow[] =>
    tvShowList
      .map((tvShow) => tvShow)
      .sort((a, b) => {
        if (b.name > a.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

  const handleSortedTvShowsChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSortOption(event?.target?.value);
    },
    [setSortOption]
  );

  const handleSortedTvShows = (tvShowList: ITvShow[]) => {
    const sortOptions: SortOptions = {
      rating: handleRatingSort,
      alphabetic: handleAlphabeticSort,
    };
    const sortHandler = sortOption && sortOptions[sortOption];
    return sortHandler ? sortHandler(tvShowList) : tvShowList;
  };

  return (
    <Row>
      <h2>{title}</h2>
      <label htmlFor="">Filter By</label>

      <select name="select" onChange={handleSortedTvShowsChange}>
        <option value="">Default</option>
        <option value="rating">Rating</option>
        <option value="alphabetic">Alphabetic</option>
      </select>

      <section>
        {handleSortedTvShows(tvShows).map((tvShow) => (
          <TvShowCard key={tvShow.id} tvShow={tvShow} isLargeRow={isLargeRow} />
        ))}
      </section>
    </Row>
  );
};

export default TvShowRow;
