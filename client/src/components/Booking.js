import { Button, Card, Email, Name, Status } from "./Booking.style";

export function Booking({ name, email, checkedIn, _id, onUpdate, onDelete }) {
  const handleToggleCheckedIn = () => {
    onUpdate(_id, { checkedIn: !checkedIn });
  };

  return (
    <Card>
      <Name>{name}</Name>
      <Email>{email}</Email>
      <Status checkedIn={checkedIn} onClick={handleToggleCheckedIn}>
        {checkedIn ? "✅ Checked in" : "❌ Not checked in"}
      </Status>
      <Button onClick={() => onDelete(_id)}>Delete</Button>
    </Card>
  );
}
