// models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  track: String,
  timeSlot: String,
  carQty: Number,
  email: String,
  phone: String,
  totalAmount: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);
