const User = require("../models/User");

module.exports = {
  // addProfArea,
  // addContactDetail,
  // addQualification,
  // addEmployment,
  // editQualification,
  // editEmployment,
  // deleteProfArea,
  // deleteContactDetail,
  // deleteQualification,
  // deleteEmployment,
};

/*---- Profesional Areas Function ----*/

// function addProfArea(req, res) {
//   User.findById(req.user._id).then(function(user) {
//     user.profile[0].professionalAreas.unshift(req.body);
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }

// function deleteProfArea(req, res) {
//   User.findById(req.params.userId).then(function(user) {
//     user.profArea.id(req.params.profAreaId).remove();
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }

/*---- Contact Details Function ----*/

// function addContactDetail(req, res) {
//   User.findById(req.user._id).then(function(user) {
//     user.profile[0].contactDetails.unshift(req.body);
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }

// function deleteContactDetail(req, res) {
//   User.findById(req.params.userId).then(function(user) {
//     user.contactDetail.id(req.params.contactDetailId).remove();
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }

/*---- Qualifications Function ----*/

// function addQualification(req, res) {
//   User.findById(req.user._id).then(function(user) {
//     user.profile[0].qualifications.unshift(req.body);
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }

// function updateQualification(req, res) {
//   qualification
//     .findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(function(qualification) {
//       res.status(200).json(qualification);
//     });
// }

// function deleteQualification(req, res) {
//   User.findById(req.params.userId).then(function(user) {
//     user.qualifications.id(req.params.qualificationId).remove();
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }

/*---- Employment Function ----*/

// function addEmployment(req, res) {
//   User.findById(req.user._id).then(function(user) {
//     user.profile[0].employment.unshift(req.body);
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }

// function updateEmployment(req, res) {
//   employment
//     .findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(function(employment) {
//       res.status(200).json(employment);
//     });
// }

// function deleteEmployment(req, res) {
//   User.findById(req.params.userId).then(function(user) {
//     user.employments.id(req.params.employmentId).remove();
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }
