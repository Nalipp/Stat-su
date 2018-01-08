const express = require('express');
const router = express.Router();
const helpers = require("../helpers/timeSlips");

router.route('/')
 .get(helpers.getTimeSlips)
 .post(helpers.createTimeSlip)

router.route('/:timeSlipId')
  .get(helpers.getTimeSlip)
  .put(helpers.updateTimeSlip)
  .delete(helpers.deleteTimeSlip)


module.exports = router;
