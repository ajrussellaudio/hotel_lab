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

  update(bookingId, data) {
    fetch(bookingsServiceUrl(`/${bookingId}`), {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  },

  destroy(bookingId) {
    fetch(bookingsServiceUrl(`/${bookingId}`), { method: "DELETE" });
  },
};
