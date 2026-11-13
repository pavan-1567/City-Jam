import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToBookings } from "../Store/BookingSlice.jsx";
import { addToSaved } from "../Store/SavedSlice.jsx";

export default function UEventDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const events = useSelector((s) => s.events);
  const ev = events.find((e) => e.id == id);

  if (!ev)
    return (
      <div style={{ padding: "30px" }}>
        <h2>Event not found</h2>
        <button onClick={() => nav("/discover")}>Go Back</button>
      </div>
    );

  const handleBook = () => {
    const user = localStorage.getItem("cityjam_user");
    if (!user) {
      alert("Please login to book jams!");
      nav("/");
      return;
    }
    dispatch(addToBookings(ev));
    nav("/discover/bookings");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <button
        onClick={() => nav("/discover")}
        style={{
          marginBottom: "15px",
          padding: "6px 14px",
          borderRadius: "20px",
          border: "1px solid #ddd",
          background: "white",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <img
          src={ev.image}
          alt={ev.name}
          style={{
            width: "100%",
            height: "380px",
            objectFit: "cover",
            borderRadius: "16px",
            background: "#f5f5f5",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80";
          }}
        />
        <div>
          <span
            style={{
              background: "black",
              color: "white",
              padding: "5px 12px",
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: "700",
            }}
          >
            {ev.category}
          </span>
          <h2 style={{ marginTop: "12px" }}>{ev.name}</h2>
          <p>📍 {ev.location}</p>
          <p>
            🕒 {ev.date} • {ev.time}
          </p>
          <h2 style={{ color: "#2563eb" }}>₹{ev.price}</h2>
          <p style={{ color: "#666", fontSize: "14px" }}>{ev.desc}</p>
          <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
            <button
              onClick={handleBook}
              style={{
                padding: "12px 26px",
                background: "black",
                color: "white",
                borderRadius: "30px",
                border: "none",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
            <button
              onClick={() => dispatch(addToSaved(ev))}
              style={{
                padding: "12px 22px",
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "30px",
                cursor: "pointer",
              }}
            >
              ♥ Save
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "24px",
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          border: "1px solid #eee",
        }}
      >
        <h3>📋 Rules and Regulations</h3>
        <ul style={{ lineHeight: "2" }}>
          <li>Entry 30 mins before at {ev.location}</li>
          <li>Age 16+ with valid ID</li>
          <li>Respect artists, no abuse</li>
          <li>Open Mic: 5-7 mins per performer</li>
          <li>Ticket ₹{ev.price} — No refund</li>
        </ul>
      </div>
    </div>
  );
}
