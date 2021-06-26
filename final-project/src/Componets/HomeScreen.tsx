import React from "react";
// import Columns from "./Columns";
import HeaderNav from "./HeaderNav";
import requests from "../Requests";
import Rows from "./Rows";
import styled from "styled-components";

const Home = styled.div`
  margin-top: 200px;
`;

const HomeScreen: React.FC = () => {
  return (
    <Home>
      {Object.keys(requests).map((req) => (
        <Rows key={req} fetchUrl={requests[req]} title={req} isLargeRow />
      ))}

      <HeaderNav />
      {/* <Columns /> */}
    </Home>
  );
};

export default HomeScreen;
