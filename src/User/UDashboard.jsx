import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { clearBookings } from "../Store/BookingSlice.jsx";
import { clearSaved } from "../Store/SavedSlice.jsx";
import { clearTickets } from "../Store/TicketSlice.jsx";

export default function UDashboard() {
  const b = useSelector((s) => s.bookings);
  const s = useSelector((s) => s.saved);
  const t = useSelector((s) => s.tickets);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearBookings());
    dispatch(clearSaved());
    dispatch(clearTickets());
    // FIX: Don't clear everything! Only user login info
    localStorage.removeItem("cityjam_user");
    localStorage.removeItem("cityjam_role");
    localStorage.removeItem("cityjam_pass");
    // KEEP cityjam_all_bookings for admin
    nav("/");
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 20px",
          background: "#111",
          color: "white",
        }}
      >
        <h2 onClick={() => nav("/discover")} style={{ cursor: "pointer" }}>
          🎵 CityJam
        </h2>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link className="btn btn-warning btn-sm" to="/discover">
            Discover
          </Link>
          <Link className="btn btn-light btn-sm" to="/discover/bookings">
            Bookings ({b.length})
          </Link>
          <Link className="btn btn-light btn-sm" to="/discover/saved">
            Saved ({s.length})
          </Link>
          <Link className="btn btn-light btn-sm" to="/discover/tickets">
            Tickets({t.length})
          </Link>
          <button className="btn btn-danger btn-sm" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}
