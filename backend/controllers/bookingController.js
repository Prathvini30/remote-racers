const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { track, timeSlot, carQty, email, phone, amount } = req.body;

  const existingBookings = await Booking.find({ track, timeSlot });
  const totalCars = existingBookings.reduce((sum, b) => sum + b.carQty, 0);

  if (totalCars + carQty > 4) {
    return res.status(400).json({ message: "Slot already fully booked" });
  }

  const booking = new Booking({ track, timeSlot, carQty, email, phone, amount });
  await booking.save();

  res.status(201).json({ success: true, booking });
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};
