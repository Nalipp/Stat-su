var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/timeSlips");

router.route('/')
 .get(helpers.getTimeSlips)
 .post(helpers.createTimeSlip)


module.exports = router;
