import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../Store/EventSlice.jsx";
export default function AViewEvents() {
  const events = useSelector((s) => s.events);
  const d = useDispatch();
  return (
    <>
      <h2>All Jams ({events.length})</h2>
      <div className="grid">
        {events.map((ev) => (
          <div key={ev.id} className="card p-3">
            <img src={ev.image} alt="" />
            <h5 className="mt-2">{ev.name}</h5>
            <p>{ev.location}</p>
            <p>₹{ev.price}</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => d(deleteEvent(ev.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
