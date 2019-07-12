import tokenService from "./tokenService";

/* --- profile index --- */

export function getProfile() {
  return fetch("/user");
}

/* --- create profile --- */

export function createProfile(profile) {
  return fetch(`/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(profile)
  });
}

/* --- edit profile --- */
