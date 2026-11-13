import { useSelector, useDispatch } from "react-redux";
import { addToBookings } from "../Store/BookingSlice.jsx";
import { addToSaved } from "../Store/SavedSlice.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UViewEvents() {
  const events = useSelector((s) => s.events);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [cat, setCat] = useState("All");
  const f = cat === "All" ? events : events.filter((e) => e.category === cat);

  const handleBook = (ev, e) => {
    e.stopPropagation();
    const user = localStorage.getItem("cityjam_user");
    if (!user) {
      alert("Please login to book! Redirecting to Login...");
      nav("/"); // FIXED - your login is "/"
      return;
    }
    dispatch(addToBookings(ev));
    nav("/discover/bookings");
  };

  return (
    <>
      <h1>Discover Jams in Hyderabad</h1>
      <p style={{ color: "#666" }}>
        {f.length} events found — Click any card for details
      </p>

      <div
        className="filters"
        style={{ display: "flex", gap: "10px", margin: "16px 0" }}
      >
        {["All", "Jamming", "Open Mic", "Meetup"].map((c) => (
          <button
            key={c}
            className={cat === c ? "active" : ""}
            onClick={() => setCat(c)}
            style={{
              padding: "8px 18px",
              borderRadius: "20px",
              border: "1px solid #ddd",
              background: cat === c ? "black" : "white",
              color: cat === c ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {f.map((ev) => (
          <div
            key={ev.id}
            className="card"
            onClick={() => nav(`/discover/${ev.id}`)}
            style={{
              cursor: "pointer",
              background: "white",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #eee",
            }}
          >
            <div className="img-wrap" style={{ position: "relative" }}>
              <img
                src={ev.image}
                alt={ev.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <span
                className="badge"
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "white",
                  color: "black",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "800",
                }}
              >
                {ev.category}
              </span>
            </div>
            <div style={{ padding: "12px" }}>
              <h3 style={{ margin: "0" }}>{ev.name}</h3>
              <p style={{ margin: "4px 0", fontSize: "13px" }}>
                📍 {ev.location}
              </p>
              <p style={{ margin: "4px 0", fontSize: "13px" }}>
                🕒 {ev.date} • {ev.time}
              </p>
              <div style={{ fontWeight: "700", color: "#2563eb" }}>
                ₹{ev.price}
              </div>
              <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                <button
                  onClick={(e) => handleBook(ev, e)}
                  style={{
                    flex: 1,
                    padding: "8px",
                    background: "black",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                  }}
                >
                  Book
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToSaved(ev));
                  }}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "20px",
                    border: "1px solid #ddd",
                    background: "white",
                  }}
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
