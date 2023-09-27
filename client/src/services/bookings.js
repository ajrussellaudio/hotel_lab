const bookingsServiceUrl = (route) => `/api/bookings${route}`;

export const BookingsService = {
  getAll(next) {
    fetch(bookingsServiceUrl("/"))
      .then((res) => res.json())
      .then((data) => next(data));
  },

  create(newBooking) {
    fetch(bookingsServiceUrl("/"), {
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: { "Content-Type": "application/json" },
    });
  },
};
