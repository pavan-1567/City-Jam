import { useSelector, useDispatch } from "react-redux";
import { removeFromSaved } from "../Store/SavedSlice.jsx";
export default function USaved() {
  const saved = useSelector((s) => s.saved);
  const d = useDispatch();
  if (saved.length === 0) return <h3>No saved jams</h3>;
  return (
    <>
      <h2>Saved Jams</h2>
      <div className="grid">
        {saved.map((ev) => (
          <div key={ev.id} className="card">
            <img src={ev.image} alt="" />
            <h3>{ev.name}</h3>
            <p>{ev.location}</p>
            <div className="card-btns">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => d(removeFromSaved(ev.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
