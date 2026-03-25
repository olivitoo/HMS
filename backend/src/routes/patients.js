const express = require("express");
const router = express.Router();
const { getAllpatients, registerPatient } = require("../controller/patientController.js");

router.route("/").get(getAllpatients);
router.route("/").post(registerPatient);

module.exports = router;