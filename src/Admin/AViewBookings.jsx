import { useState, useEffect } from "react";

export default function AViewBookings() {
  const [bookings, setBookings] = useState([]);

  const load = () => {
    const all = JSON.parse(
      localStorage.getItem("cityjam_all_bookings") || "[]",
    );
    console.log("Admin Bookings from localStorage:", all);
    setBookings(all);
  };

  useEffect(() => {
    load();
  }, []);

  const addDummyForPresentation = () => {
    const dummy = [
      {
        bookingId: 1,
        user: "raju",
        eventName: "Rock Jam at Banjara",
        category: "Jamming",
        location: "Banjara Hills",
        price: 299,
        date: new Date().toLocaleString(),
      },
      {
        bookingId: 2,
        user: "sita",
        eventName: "Open Mic Night",
        category: "Open Mic",
        location: "Jubilee Hills",
        price: 199,
        date: new Date().toLocaleString(),
      },
    ];
    localStorage.setItem("cityjam_all_bookings", JSON.stringify(dummy));
    load();
  };

  if (bookings.length === 0)
    return (
      <div style={{ padding: "20px" }}>
        <h3>User Bookings — No bookings yet</h3>
        <p>Debug: Check console (F12) for localStorage data.</p>
        <p>
          Steps: 1) Login as user → Book → Logout → Login as admin/admin123 →
          Come here
        </p>
        <button
          onClick={addDummyForPresentation}
          className="btn btn-primary mt-3"
        >
          Click to Add Dummy Data for Presentation (Emergency)
        </button>
        <button onClick={load} className="btn btn-secondary mt-3 ms-2">
          Refresh
        </button>
      </div>
    );

  return (
    <div style={{ padding: "10px" }}>
      <h3>All User Bookings — {bookings.length}</h3>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Event</th>
            <th>Category</th>
            <th>Location</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={b.bookingId}>
              <td>{i + 1}</td>
              <td>
                <b>{b.user}</b>
              </td>
              <td>{b.eventName}</td>
              <td>{b.category}</td>
              <td>{b.location}</td>
              <td>₹{b.price}</td>
              <td>{b.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={load} className="btn btn-sm btn-secondary">
        Refresh
      </button>
    </div>
  );
}
