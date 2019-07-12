// var express = require("express");
// var router = express.Router();
// const usersController = require("../controllers/users");

// /* --- Protected Routes ---*/
// // router.post("/userType", usersController.userType);
// router.use("../config/auth");
// router.post("/api/users/userType", checkAuth, usersController.userType);

// function checkAuth(req, res, next) {
//   console.log(req.user);
//   if (req.user) return next();
//   return res.status(401).json({ msg: "Not Authorized" });
// }

// module.exports = router;
