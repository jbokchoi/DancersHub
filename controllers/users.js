const User = require("../models/User");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  createProfile,
  getProfile,
  editProfile,
  getAllUsers,
  getUserProfile
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // TODO: Send back a JWT instead of the user
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- ALL User Functions ----*/
function getAllUsers(req, res) {
  User.find({}).then(function(users) {
    res.status(200).json(users);
  });
}

function getUserProfile(req, res) {
  User.findById(req.params.id).then(function(user) {
    res.status(200).json(user);
  });
}

/* --- Profile Functions ---- */

function createProfile(req, res) {
  User.findById(req.user._id).then(function(user) {
    user.profile.unshift(req.body);
    user.save(function(user) {
      res.status(200).json(user);
    });
  });
}

function getProfile(req, res) {
  User.findById(req.user._id).then(function(user) {
    return res.status(200).json(user);
  });
}

function editProfile(req, res) {
  User.findById(req.user._id).then(function(user) {
    const profile = user.profile[0];
    profile.set({
      about: req.body.user.about,
      gender: req.body.user.gender,
      jobTitle: req.body.user.jobTitle,
      city: req.body.user.city,
      country: req.body.user.country,
      imageUrl: req.body.user.imageUrl
    });
    return user.save(() => res.status(200).json(user));
  });
}

/* --- Helper Functions ---- */

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}
