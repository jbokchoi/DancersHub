var express = require("express");
var router = express.Router();
var profileController = require("../controllers/profiles");

/* --- GET /api/profile --- */

router.post("/profile", profileController.createProfile);
