import { useState, useEffect } from "react";
import { BookingsService } from "../services/bookings";
import { Booking } from "../components/Booking";
import { NewBookingForm } from "../components/NewBookingForm";
import { Container } from "./BookingsContainer.style";

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

  const updateBooking = (id, data) => {
    BookingsService.update(id, data);
    BookingsService.getAll(setBookings);
  };

  return (
    <>
      <NewBookingForm onSubmit={createNewBooking} />
      <Container>
        {bookings.map((booking) => (
          <Booking {...booking} onUpdate={updateBooking} onDelete={deleteBooking} />
        ))}
      </Container>
    </>
  );
}
