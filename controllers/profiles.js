const User = require("../models/User");

module.exports = {
  createProfArea,
  createContactDetail,
  createQualification,
  createEmployment,
  deleteProfArea,
  deleteContactDetail,
  deleteQualification,
  deleteEmployment
};

/*---- Profesional Areas Function ----*/

function createProfArea(req, res) {
  User.findById(req.user._id).then(function(user) {
    user.profile[0].professionalAreas.push(req.body);
    return user.save(function(user) {
      res.status(200).json(user);
    });
  });
}

function deleteProfArea(req, res) {
  User.findById(req.user._id).then(function(user) {
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
    user.profile[0].contactDetails.push(req.body.contactDetail);
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

function deleteEmployment(req, res) {
  User.findById(req.user._id).then(function(user) {
    user.profile[0].employments.id(req.params.id).remove();
    user.save(function(user) {
      res.status(200).json(user);
    });
  });
}
