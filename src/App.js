import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import IndexPage from "./pages/IndexPage/IndexPage";
import WhosWhoPage from "./pages/WhosWhoPage/WhosWhoPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CreateNews from "./components/CreateNews/CreateNews";
import ShowNews from "./components/ShowNews/ShowNews";
import EditNews from "./components/EditNews/EditNews";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/signup" render={() => <SignUpPage />} />
        <Route exact path="/login" render={() => <LogInPage />} />
        <Route exact path="/index" render={() => <IndexPage />} />
        <Route exact path="/whoswho" render={() => <WhosWhoPage />} />
        <Route exact path="/news" render={() => <NewsPage />} />
        <Route exact path="/profile" render={() => <ProfilePage />} />
        <Route exact path="/createnews" component={CreateNews} />
        <Route
          exact
          path="/news/:id"
          render={props => <ShowNews {...props} />}
        />
        <Route
          exact
          path="/news/:id/edit"
          render={props => <EditNews {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
