const express = require("express");
const router = express.Router();
const bookingController = require("../../controller/bookingController");

router.post("/createbooking" , bookingController.create);

module.exports = router;
