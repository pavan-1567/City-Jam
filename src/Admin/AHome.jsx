import { Link, Outlet, useNavigate } from "react-router-dom";
export default function AHome() {
  const nav = useNavigate();
  const logout = () => {
    localStorage.clear();
    nav("/");
  };
  return (
    <>
      <nav className="navbar dark">
        <h2>CityJam Admin</h2>
        <div className="d-flex flex-wrap gap-2">
          <Link className="btn btn-warning btn-sm" to="/admin">
            Create
          </Link>
          <Link className="btn btn-light btn-sm" to="/admin/all">
            All Jams
          </Link>
          <Link className="btn btn-info btn-sm" to="/admin/bookings">
            User Bookings
          </Link>
          <button className="btn btn-danger btn-sm" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
