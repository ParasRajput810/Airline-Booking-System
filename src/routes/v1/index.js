const express = require("express");
const router = express.Router();
const bookingController = require("../../controller/bookingController");

const bookingcontroller = new bookingController();

router.post("/createbooking" , bookingcontroller.create);

router.get("/publish" , bookingcontroller.sendmessage);

module.exports = router;
