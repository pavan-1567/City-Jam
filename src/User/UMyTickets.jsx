import { useSelector, useDispatch } from "react-redux";
import { cancelTicket } from "../Store/TicketSlice.jsx";
export default function UMyTickets() {
  const tickets = useSelector((s) => s.tickets);
  const user = localStorage.getItem("cityjam_user");
  const myTickets = tickets.filter((t) => t.bookedBy === user);
  const d = useDispatch();
  if (myTickets.length === 0) return <h3>No tickets yet. Book a jam!</h3>;
  return (
    <>
      <h2>My Tickets - {user}</h2>
      {myTickets.map((t) => (
        <div key={t.ticketId} className="card p-3 mb-3 d-flex flex-row gap-3">
          <div>
            <h5>{t.name}</h5>
            <p>Ticket: {t.ticketId}</p>
            <p>
              📍 {t.location} - {t.date} {t.time}
            </p>
            <p>
              Phone: {t.phone} | ₹{t.price}
            </p>
          </div>
          <button
            className="btn btn-danger btn-sm ms-auto"
            onClick={() => d(cancelTicket(t.ticketId))}
          >
            Cancel
          </button>
        </div>
      ))}
    </>
  );
}
