const User = require("../models/User");

module.exports = {
  createProfArea,
  createContactDetail,
  createQualification,
  createEmployment,
  // editQualification,
  // editEmployment,
  deleteProfArea,
  deleteContactDetail,
  deleteQualification,
  deleteEmployment
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

function deleteProfArea(req, res) {
  console.log("delete controller");
  console.log("REQ.PARAMS", req.params);
  User.findById(req.user._id).then(function(user) {
    console.log(user.profile[0].professionalAreas);
    user.profile[0].professionalAreas.id(req.params.id).remove();
    user.save(function(user) {
      res.status(200).json(user);
    });
  });
}

/*---- Contact Details Function ----*/

function createContactDetail(req, res) {
  console.log("userid", req.user._id);
  console.log("data sent", req.body);
  User.findById(req.user._id).then(function(user) {
    console.log("userfound: ", req.body.contactDetail);
    user.profile[0].contactDetails.push(req.body.contactDetail);
    console.log("user changed ");
    return user.save(function(user) {
      res.status(200).json(user);
    });
  });
}

function deleteContactDetail(req, res) {
  User.findById(req.user._id).then(function(user) {
    user.profile[0].contactDetails.id(req.params.id).remove();
    user.save(function(user) {
      res.status(200).json(user);
    });
  });
}

/*---- Qualifications Function ----*/

function createQualification(req, res) {
  User.findById(req.user._id).then(function(user) {
    user.profile[0].qualifications.push(req.body.qualification);
    return user.save(function(user) {
      res.status(200).json(user);
    });
  });
}

// function updateQualification(req, res) {
//   qualification
//     .findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(function(qualification) {
//       res.status(200).json(qualification);
//     });
// }

function deleteQualification(req, res) {
  User.findById(req.user._id).then(function(user) {
    user.profile[0].qualifications.id(req.params.id).remove();
    user.save(function(user) {
      res.status(200).json(user);
    });
  });
}

/*---- Employment Function ----*/

function createEmployment(req, res) {
  User.findById(req.user._id).then(function(user) {
    user.profile[0].employments.push(req.body.employment);
    return user.save(function(user) {
      res.status(200).json(user);
    });
  });
}

// function updateEmployment(req, res) {
//   employment
//     .findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(function(employment) {
//       res.status(200).json(employment);
//     });
// }

function deleteEmployment(req, res) {
  User.findById(req.user._id).then(function(user) {
    user.profile[0].employments.id(req.params.id).remove();
    user.save(function(user) {
      res.status(200).json(user);
    });
  });
}
