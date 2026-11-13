import {
  BrowserRouter,Routes,Route,useNavigate,Navigate,}from "react-router-dom";
import { useState } from "react";
import UDashboard from "./User/UDashboard.jsx";
import UViewEvents from "./User/UViewEvents.jsx";
import UEventDetails from "./User/UEventDetails.jsx";
import UBookings from "./User/UBookings.jsx";
import USaved from "./User/USaved.jsx";
import UMyTickets from "./User/UMyTickets.jsx";
import AHome from "./Admin/AHome.jsx";
import AManageEvents from "./Admin/AManageEvents.jsx";
import AViewEvents from "./Admin/AViewEvents.jsx";
import AViewBookings from "./Admin/AViewBookings.jsx";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const handle = () => {
    // FIX: DON'T do localStorage.clear() — it deletes admin bookings!
    localStorage.removeItem("cityjam_user");
    localStorage.removeItem("cityjam_role");
    localStorage.removeItem("cityjam_pass");

    if (user === "admin" && pass === "admin123") {
      localStorage.setItem("cityjam_user", "admin");
      localStorage.setItem("cityjam_role", "admin");
      nav("/admin");
    } else if (user && pass) {
      localStorage.setItem("cityjam_user", user);
      localStorage.setItem("cityjam_role", "user");
      localStorage.setItem("cityjam_pass", pass);
      nav("/discover");
    } else alert("Enter username/password");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🎵 CityJam</h1>
        <p>Hyderabad's Jamming & Meetup Hub</p>
        <input
          className="form-control"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="form-control mt-2"
          placeholder="Password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="btn btn-dark w-100 mt-3" onClick={handle}>
          Login
        </button>
        <small className="d-block mt-2">
          Admin: admin / admin123 | User: any / any
        </small>
        <button
          className="btn btn-link w-100 mt-2"
          onClick={() => nav("/discover")}
        >
          Continue without login → Discover Jams
        </button>
      </div>
    </div>
  );
}

function RequireUser({ children }) {
  const user = localStorage.getItem("cityjam_user");
  if (!user) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/discover" element={<UDashboard />}>
          <Route index element={<UViewEvents />} />
          <Route path=":id" element={<UEventDetails />} />
          <Route
            path="bookings"
            element={
              <RequireUser>
                <UBookings />
              </RequireUser>
            }
          />
          <Route
            path="saved"
            element={
              <RequireUser>
                <USaved />
              </RequireUser>
            }
          />
          <Route
            path="tickets"
            element={
              <RequireUser>
                <UMyTickets />
              </RequireUser>
            }
          />
        </Route>
        <Route path="/admin" element={<AHome />}>
          <Route index element={<AManageEvents />} />
          <Route path="all" element={<AViewEvents />} />
          <Route path="bookings" element={<AViewBookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
