const express = require('express');
const router = express.Router();
const db = require("../models");
const helpers = require("../helpers/timeSlips");

router.route('/')
 .get(helpers.getTimeSlips)
 .post(helpers.createTimeSlip)


module.exports = router;
