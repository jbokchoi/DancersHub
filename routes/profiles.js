var express = require("express");
var router = express.Router();
var profileController = require("../controllers/profiles");

/* --- GET --- */
// router.get("/user/profile/profArea", checkAuth, profileController.getProfArea);
// router.get("/user/profile/contactDetails", checkAuth, profileController.getContactDetail);
// router.get("/user/profile/qualifications", checkAuth, profileController.getQualification);
// router.get("/user/profile/employment", checkAuth, profileController.getEmployment);

/* --- POST --- */
router.post(
  "/user/profile/profArea",
  checkAuth,
  profileController.createProfArea
);
// router.post("/user/profile/contactDetails", checkAuth, profileController.createContactDetail);
// router.post("/user/profile/qualifications", checkAuth, profileController.createQualification);
// router.post("/user/profile/employment", checkAuth, profileController.createEmployment);

/* --- PUT --- */
// router.put("/user/profile/qualifications/:id", checkAuth, profileController.updateQualification);
// router.put("/user/profile/employment/:id", checkAuth, profileController.updateEmployment);

/* --- DELETE --- */
// router.delete(
//   "/user/profile/profArea/:id",
//   checkAuth,
//   profileController.deleteProfArea
// );
// router.delete("/user/profile/contactDetails/:id", checkAuth, profileController.deleteContactDetail);
// router.delete("/user/profile/qualifications/:id", checkAuth, profileController.deleteQualification);
// router.delete("/user/profile/employment/:id", checkAuth, profileController.deleteEmployment);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}
module.exports = router;
