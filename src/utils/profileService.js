import tokenService from "./tokenService";

const BASE_URL = "/api/";

/* --- professional areas --- */

// get professional area

// export function getProfAreas() {
//   return fetch(`BASE_URL + `user/profile/profArea).then(function(res) {
//     return res.json();
//   });
// }

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

//delete professional area

// export function deleteProfArea(user, profile) {
//   return fetch(BASE_URL + `user/profile/profArea/${profAreaId}`, {
//     method: "delete"
//   }).then(function(res) {
//     return res.json();
//   });
// }

/* ---- contact details ---- */

// get contact details

// export function getContactDetails() {
//   return fetch(`BASE_URL + `user/profile/contactDetail).then(function(res) {
//     return res.json();
//   });
// }

// add contact detail

// export function addContactDetail(user, profileId) {
//   return fetch(BASE_URL + `user/${profileId}/contactDetail`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//       Authorization: "Bearer " + tokenService.getToken()
//     },
//     body: JSON.stringify(user)
//   });
// }

// delete contact detail

// export function deleteContactDetail(user, profileId) {
//   return fetch(BASE_URL + `user/${profileId}/contactDetail/${contactDetailId`, {
//     method: "delete"
//   }).then(function(res) {
//     return res.json();
//   });
// }

/* --- qualifications --- */

// get qualifications

// export function getQualifications() {
//   return fetch(`BASE_URL + `user/profile/qualification).then(function(res) {
//     return res.json();
//   });
// }

//add qualification

// export function addQualification(user, profileId) {
//   return fetch(BASE_URL + `user/${profileId}/qualification`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//       Authorization: "Bearer " + tokenService.getToken()
//     },
//     body: JSON.stringify(user)
//   });
// }

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

// export function deleteQualification(user, profileId) {
//   return fetch(BASE_URL + `user/${profileId}/qualification/${qualificationId}`, {
//     method: "delete"
//   }).then(function(res) {
//     return res.json();
//   });
// }

/* --- employment --- */

// get employments

// export function getEmployments() {
//   return fetch(`BASE_URL + `user/profile/employment).then(function(res) {
//     return res.json();
//   });
// }

//add employment

// export function addEmployment(user, profileId) {
//   return fetch(BASE_URL + `user/${profileId}/employment`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//       Authorization: "Bearer " + tokenService.getToken()
//     },
//     body: JSON.stringify(user)
//   });
// }

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

//delete employment

// export function deleteEmployment(user, profileId) {
//   return fetch(BASE_URL + `user/${profileId}/employment/${employmentId}`, {
//     method: "delete"
//   }).then(function(res) {
//     return res.json();
//   });
// }
