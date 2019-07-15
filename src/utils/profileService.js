import tokenService from "./tokenService";

const BASE_URL = "/api/";

/* --- professional areas --- */

// add professional area

export function addProfArea(user) {
  console.log("user: ", user);
  return fetch(BASE_URL + `user/profile/profArea`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(user)
  }).then(function(res) {
    return res.json();
  });
}

// delete professional area

export function deleteProfArea(profAreaId) {
  console.log("DELETE: ", profAreaId);
  return fetch(BASE_URL + `user/profile/profArea/${profAreaId}`, {
    method: "delete",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json();
  });
}

/* ---- contact details ---- */

// add contact detail

export function addContactDetail(user) {
  return fetch(BASE_URL + `user/profile/contactDetail`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(user)
  }).then(function(res) {
    return res.json();
  });
}

// delete contact detail

export function deleteContactDetail(contactDetailId) {
  return fetch(BASE_URL + `user/profile/contactDetail/${contactDetailId}`, {
    method: "delete",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json();
  });
}

/* --- qualifications --- */

//add qualification

export function addQualification(user) {
  return fetch(BASE_URL + `user/profile/qualification`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(user)
  }).then(function(res) {
    return res.json();
  });
}

//edit qualification

// export function editQualification(user) {
//   console.log("edit service hit");
//   return fetch(BASE_URL + `user/${profileId}/qualification/${qualificationId}`, {
//     method: "PUT",
//     body: JSON.stringify({ user }),
//     headers: {
//       "Content-type": "application/json",
//       Authorization: "Bearer " + tokenService.getToken()
//     }
//   }).then(function(res) {
//     return res.json(user);
//   });
// }

//delete qualification

export function deleteQualification(qualificationId) {
  return fetch(BASE_URL + `user/profile/qualification/${qualificationId}`, {
    method: "delete",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json();
  });
}

/* --- employment --- */

//add employment

export function addEmployment(user) {
  return fetch(BASE_URL + `user/profile/employment`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(user)
  }).then(function(res) {
    return res.json();
  });
}

//edit employment

// export function editEmployment(user) {
//   console.log("edit service hit");
//   return fetch(BASE_URL + `user/${profileId}/employment/${employmentId}`, {
//     method: "PUT",
//     body: JSON.stringify({ user }),
//     headers: {
//       "Content-type": "application/json",
//       Authorization: "Bearer " + tokenService.getToken()
//     }
//   }).then(function(res) {
//     return res.json(user);
//   });
// }

// delete employment;

export function deleteEmployment(employmentId) {
  return fetch(BASE_URL + `user/profile/employment/${employmentId}`, {
    method: "delete",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json();
  });
}
