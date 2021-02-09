export const searchNewBookings = (bookings) =>
  bookings.reduce(
    (total, booking) => (booking.newBooking ? total + 1 : total),
    0,
  );

export const bookingByUnique = (bookings, unique) => {
  const index = bookings.findIndex(
    (booking) => booking.bookingUnique === unique,
  );
  return bookings[index] || {};
};
