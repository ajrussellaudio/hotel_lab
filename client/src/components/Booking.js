import { Button, Card, Email, Name, Status } from "./Booking.style";

export function Booking({ name, email, checkedIn, _id, onDelete }) {
  return (
    <Card>
      <Name>{name}</Name>
      <Email>{email}</Email>
      <Status checkedIn={checkedIn}>{checkedIn ? "Checked in ✅" : "Not checked in ❌"}</Status>
      <Button onClick={() => onDelete(_id)}>Delete</Button>
    </Card>
  );
}
