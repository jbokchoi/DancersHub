import tokenService from "./tokenService";

const BASE_URL = "/api/";

function signup(user) {
  return (
    fetch(BASE_URL + "signup", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) return res.json();
        // Probably a duplicate email
        throw new Error("Email already taken!");
      })
      // Parameter destructuring!
      .then(({ token }) => tokenService.setToken(token))
  );
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds)
  })
    .then(res => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(({ token }) => tokenService.setToken(token));
}

/*--- All Users related functions --- */
function getAllUsers() {
  return fetch(BASE_URL + `user/allUsers`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json();
  });
}

function getUserProfile(id) {
  return fetch(BASE_URL + `user/allUsers/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json();
  });
}

/*--- Profile related functions --- */

function createProfile(user) {
  return fetch(BASE_URL + `user`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(user)
  });
}

function getProfile(user) {
  return fetch(BASE_URL + "user", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json(user);
  });
}

function editProfile(user) {
  return fetch(BASE_URL + `user`, {
    method: "PUT",
    body: JSON.stringify({ user }),
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json(user);
  });
}

export default {
  signup,
  getUser,
  logout,
  login,
  createProfile,
  getProfile,
  editProfile,
  getAllUsers,
  getUserProfile
};
