const User = require("../models/User");

module.exports = {
  createProfArea
  // createContactDetail,
  // createQualification,
  // createEmployment,
  // editQualification,
  // editEmployment,
  // deleteProfArea
  // deleteContactDetail,
  // deleteQualification,
  // deleteEmployment,
};

/*---- Profesional Areas Function ----*/

function createProfArea(req, res) {
  console.log("userid", req.user._id);
  console.log("data sent", req.body);
  User.findById(req.user._id).then(function(user) {
    console.log("userfound: ", user.profile[0].professionalAreas);
    user.profile[0].professionalAreas.push(req.body);
    console.log("user changed ");
    return user.save(function(user) {
      // console.log("nwe user", user);
      res.status(200).json(user);
    });
  });
}

// function deleteProfArea(req, res) {
//   console.log("delete controller");
//   User.findById(req.user._id).then(function(user) {
//     user.profArea.id(req.params.profAreaId).remove();
//     user.save(function(user) {
//       res.status(200).json(user);
//     });
//   });
// }

/*---- Contact Details Function ----*/

// function createContactDetail(req, res) {
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

// function createQualification(req, res) {
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

// function createEmployment(req, res) {
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
