import React from "react";
import "./App.css";
import HomeScreen from "./modules/Home";
import Movie from "./modules/Movie";
import TvShow from "./modules/TvShow";
import Profile from "./modules/Profile";
import { Switch, Route } from "react-router-dom";
import { WishListProvider } from "./shared/context/WishListContext";
import { SeenProvider } from "./shared/context/SeenContext";

const App: React.FC = () => {
  // const user = null;

  return (
    <WishListProvider>
      <SeenProvider>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/movie/:id">
            <Movie />
          </Route>
          <Route exact path="/tv-show/:id">
            <TvShow />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </SeenProvider>
    </WishListProvider>
  );
};

export default App;
