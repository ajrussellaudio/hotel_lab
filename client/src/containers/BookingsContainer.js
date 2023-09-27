import { useState, useEffect } from "react";
import { BookingsService } from "../services/bookings";
import { Booking } from "../components/Booking";

export function BookingsContainer() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    BookingsService.getAll(setBookings);
  }, []);

  return (
    <>
      {bookings.map((booking) => (
        <Booking {...booking} />
      ))}
    </>
  );
}
