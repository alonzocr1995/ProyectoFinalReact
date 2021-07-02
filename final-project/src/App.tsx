import React from "react";
import "./App.css";
import HomeScreen from "./modules/Home";
import Movie from "./modules/Movie";
import TvShow from "./modules/TvShow";
import Profile from "./modules/Profile";
import { Switch, Route } from "react-router-dom";
import { WishListProvider } from "./shared/context/WishListContext";
import { SeenProvider } from "./shared/context/SeenContext";
import { ThemeProvider } from "./shared/context/ThemeContext";
import Theme from "./UI/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Theme>
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
      </Theme>
    </ThemeProvider>
  );
};

export default App;
