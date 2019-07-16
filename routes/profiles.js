var express = require("express");
var router = express.Router();
var profileController = require("../controllers/profiles");

/* --- POST --- */
router.post(
  "/user/profile/profArea",
  checkAuth,
  profileController.createProfArea
);

router.post(
  "/user/profile/contactDetail",
  checkAuth,
  profileController.createContactDetail
);

router.post(
  "/user/profile/qualification",
  checkAuth,
  profileController.createQualification
);

router.post(
  "/user/profile/employment",
  checkAuth,
  profileController.createEmployment
);

/* --- DELETE --- */
router.delete(
  "/user/profile/profArea/:id",
  checkAuth,
  profileController.deleteProfArea
);

router.delete(
  "/user/profile/contactDetail/:id",
  checkAuth,
  profileController.deleteContactDetail
);

router.delete(
  "/user/profile/qualification/:id",
  checkAuth,
  profileController.deleteQualification
);

router.delete(
  "/user/profile/employment/:id",
  checkAuth,
  profileController.deleteEmployment
);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}
module.exports = router;
