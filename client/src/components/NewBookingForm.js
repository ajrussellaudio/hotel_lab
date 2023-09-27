import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "./NewBookingForm.style";

const initialState = {
  name: "",
  email: "",
  checkedIn: false,
};

export function NewBookingForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    console.log({ formData });
  }, [formData]);

  const handleChange = (e) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [e.target.id]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="checkedIn">Checked In?</label>
      <Checkbox name="checkedIn" id="checkedIn" checked={formData.checkedIn} onChange={handleChange} />

      <Button type="submit">Add New Booking</Button>
    </Form>
  );
}
