export function Booking({ name, email, checkedIn }) {
  return (
    <div>
      <span>{name}</span>
      <span>{email}</span>
      <span>Status: {checkedIn ? "Checked in ✅" : "Not checked in ❌"}</span>
    </div>
  );
}
