import { useSelector, useDispatch } from "react-redux";
import { removeFromBookings, clearBookings } from "../Store/BookingSlice.jsx";
import { addTicket } from "../Store/TicketSlice.jsx";
import { useState } from "react";

export default function UBookings() {
  const bookings = useSelector((s) => s.bookings);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");

  const confirm = () => {
    if (!phone || !addr) {
      window.Swal.fire({
        icon: "warning",
        title: "Enter Details!",
        text: "Phone and Address required",
      });
      return;
    }
    const user = localStorage.getItem("cityjam_user") || "guest";
    const tickets = bookings.map((b) => ({
      ...b,
      ticketId: "CJ-" + Date.now() + Math.random().toString(36).substr(2, 3),
      bookedBy: user,
      phone,
      address: addr,
      bookedAt: new Date().toLocaleString(),
    }));
    dispatch(addTicket(tickets));
    dispatch(clearBookings());
    setShow(false);

    // SWEET FINAL BOOKING ALERT
    window.Swal.fire({
      icon: "success",
      title: "Booking Confirmed! 🎵",
      html: `<b>${tickets.length} Jam(s)</b> booked successfully!<br/>Ticket ID: <b>${tickets[0].ticketId}</b><br/>Admin can now see your booking`,
      confirmButtonText: "View My Tickets",
      confirmButtonColor: "#0f0f0f",
      background: "#fff",
    }).then(() => {
      window.location.href = "#/discover/tickets";
    });
  };

  if (bookings.length === 0)
    return <h3 className="mt-4">No bookings. Go to Discover and Book!</h3>;

  return (
    <>
      <h2 className="mt-2">My Bookings (Cart)</h2>
      <div className="grid mt-3">
        {bookings.map((b) => (
          <div key={b.id} className="card p-3">
            <h5>{b.name}</h5>
            <p>
              ₹{b.price} - {b.location}
            </p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(removeFromBookings(b.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn btn-dark mt-4"
        style={{ borderRadius: "12px", padding: "12px 24px" }}
        onClick={() => setShow(true)}
      >
        Confirm All
      </button>

      {show && (
        <div
          className="modal d-block"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content p-4"
              style={{ borderRadius: "20px", border: "none" }}
            >
              <h4 style={{ fontWeight: 800 }}>Enter Details</h4>
              <p className="text-muted">For ticket confirmation</p>
              <input
                className="form-control mb-3"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ borderRadius: "12px", padding: "12px" }}
              />
              <input
                className="form-control mb-3"
                placeholder="Full Address"
                value={addr}
                onChange={(e) => setAddr(e.target.value)}
                style={{ borderRadius: "12px", padding: "12px" }}
              />
              <div className="d-flex gap-2">
                <button
                  className="btn btn-dark w-100"
                  style={{ borderRadius: "12px" }}
                  onClick={confirm}
                >
                  Pay & Confirm
                </button>
                <button
                  className="btn btn-light w-100"
                  style={{ borderRadius: "12px" }}
                  onClick={() => setShow(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
