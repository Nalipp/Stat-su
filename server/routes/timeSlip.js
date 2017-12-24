var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/timeSlips");

router.route('/')
 .get(helpers.getTimeSlips)
  
module.exports = router;
