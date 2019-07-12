const User = require("../models/User");

module.exports = {
  createProfile
};

function createProfile(req, res) {
  console.log("createProfile hit");
  User.findById(req.params.id).then(function(user) {
    user.profile.unshift(req.body);
    user.save(function(user) {
      console.log("profile saved");
      res.status(200).json(user);
    });
  });
}
