import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  checkedIn: false,
};

export function NewBookingForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData((previousFormData) => ({ ...previousFormData, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="checkedIn">Checked In?</label>
      <input type="checkbox" name="checkedIn" id="checkedIn" checked={formData.checkedIn} onChange={handleChange} />

      <button type="submit">Add New Booking</button>
    </form>
  );
}
