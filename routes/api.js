var express = require("express");
var router = express.Router();
const usersController = require("../controllers/users");

/*---------- Public Routes ----------*/
router.post("/signup", usersController.signup);
router.post("/login", usersController.login);

/* --- Protected Routes ---*/
router.use(require("../config/auth"));
router.get("/user", checkAuth, usersController.getProfile);
router.get("/user/allUsers", checkAuth, usersController.getAllUsers);
router.get("/user/allUsers/:id", checkAuth, usersController.getUserProfile);
router.post("/user", checkAuth, usersController.createProfile);
router.put("/user", checkAuth, usersController.editProfile);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}
module.exports = router;
