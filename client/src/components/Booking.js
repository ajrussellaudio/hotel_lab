export function Booking({ name, email, checkedIn, _id, onDelete }) {
  return (
    <div>
      <span>{name}</span>
      <span>{email}</span>
      <span>Status: {checkedIn ? "Checked in ✅" : "Not checked in ❌"}</span>
      <button onClick={() => onDelete(_id)}>Delete</button>
    </div>
  );
}
