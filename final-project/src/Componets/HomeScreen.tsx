import React from "react";
import Columns from "./Columns";
import HeaderNav from "./HeaderNav";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <HeaderNav />
      <Columns />
    </div>
  );
};

export default HomeScreen;
