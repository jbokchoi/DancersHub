import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../src/utils/userService";

import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import IndexPage from "./pages/IndexPage/IndexPage";
import WhosWhoPage from "./pages/WhosWhoPage/WhosWhoPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfileCreatePage from "./pages/ProfileCreatePage/ProfileCreatePage";
import CreateNews from "./components/CreateNews/CreateNews";
import ShowNews from "./components/ShowNews/ShowNews";
import EditNews from "./components/EditNews/EditNews";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogOut = () => {
    console.log("handlelogout called");
    userService.logout();
    console.log("logged out");
    this.setState({ user: null });
    console.log(this.state.user);
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUpPage
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <LogInPage
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/index"
            render={props =>
              userService.getUser() ? (
                <IndexPage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/whoswho" render={() => <WhosWhoPage />} />
          <Route exact path="/news" render={() => <NewsPage />} />
          <Route
            exact
            path="/profile"
            render={props =>
              userService.getUser() ? (
                <ProfilePage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/createProfile"
            render={props =>
              userService.getUser() ? (
                <ProfileCreatePage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/news"
            render={props =>
              userService.getUser() ? (
                <NewsPage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* <Route exact path="/createnews" component={CreateNews} /> */}
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
}

export default App;
