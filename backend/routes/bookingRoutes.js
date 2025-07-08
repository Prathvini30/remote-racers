// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/book", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save booking." });
  }
});

router.get("/availability", async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.json(allBookings);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch availability." });
  }
});

module.exports = router;
