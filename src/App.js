import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../src/utils/userService";

import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import WhosWhoPage from "./pages/WhosWhoPage/WhosWhoPage";
import UserShowPage from "./pages/UserShowPage/UserShowPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfileCreatePage from "./pages/ProfileCreatePage/ProfileCreatePage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import ShowNewsPage from "./pages/ShowNewsPage/ShowNewsPage";
import EditNewsPage from "./pages/EditNewsPage/EditNewsPage";

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
    userService.logout();
    this.setState({ user: null });
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
            path="/whoswho"
            render={props =>
              userService.getUser() ? (
                <WhosWhoPage
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
            path="/whoswho/:id"
            render={props =>
              userService.getUser() ? (
                <UserShowPage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          >
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
            path="/editProfile"
            render={props =>
              userService.getUser() ? (
                <EditProfilePage
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
          <Route
            exact
            path="/newsPosts/:id"
            render={props =>
              userService.getUser() ? (
                <ShowNewsPage
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
            path="/newsPosts/:id/edit"
            render={props =>
              userService.getUser() ? (
                <EditNewsPage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
