import React from "react";

// all components we are gonna use from material-ui
import { Container } from "@material-ui/core";

// we have to use react-router-dom to make our app multi-page
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
import Footer from "./components/Footer/Footer";

import Landing from "./components/Landing/Menu.js";
import Cards from "./components/Games/Cards/Cards";
// import Slide from "./components/Games/Slide/Slide.js";
import Can from "./components/CanRec/Home.js";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Landing} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />

          <Route path="/games/cards" exact component={Cards} />
          {/* <Route path="/games/slide" exact component={Slide} /> */}
          <Route path="/can" component={Can} />

          <Route
            exact
            path="/vid"
            render={() => {
              window.location.href = "user-media.html";
            }}
          />

          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
