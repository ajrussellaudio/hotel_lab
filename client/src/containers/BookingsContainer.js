import { useState, useEffect } from "react";
import { BookingsService } from "../services/bookings";
import { Booking } from "../components/Booking";
import { NewBookingForm } from "../components/NewBookingForm";

export function BookingsContainer() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    BookingsService.getAll(setBookings);
  }, []);

  const createNewBooking = (newBooking) => {
    BookingsService.create(newBooking);
    BookingsService.getAll(setBookings);
  };

  const deleteBooking = (id) => {
    BookingsService.destroy(id);
    BookingsService.getAll(setBookings);
  };

  return (
    <>
      <NewBookingForm onSubmit={createNewBooking} />
      {bookings.map((booking) => (
        <Booking {...booking} onDelete={deleteBooking} />
      ))}
    </>
  );
}
