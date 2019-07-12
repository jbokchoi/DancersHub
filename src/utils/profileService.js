import tokenService from "./tokenService";

/* --- profile index --- */

export function getProfile() {
  return fetch("/api/user");
}

/* --- create profile --- */

export function createProfile(userId, profile) {
  return fetch(`/api/users/${userId}/profile`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(profile)
  });
}

/* --- edit profile --- */
