const express = require("express");
const router = express.Router();
const bookingController = require("../../controller/bookingController");

const bookingcontroller = new bookingController();

router.post("/createbooking" , bookingcontroller.create);



module.exports = router;
