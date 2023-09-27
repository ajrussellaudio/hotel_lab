const bookingsServiceUrl = (route) => `/api/bookings${route}`;

export const BookingsService = {
  getAll(next) {
    fetch(bookingsServiceUrl("/"))
      .then((res) => res.json())
      .then((data) => next(data));
  },
};
