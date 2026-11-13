import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../Store/EventSlice.jsx";
export default function AManageEvents() {
  const [form, setForm] = useState({
    name: "",
    category: "Jamming",
    price: 299,
    location: "",
    date: "",
    time: "",
    image: "",
    desc: "",
  });
  const d = useDispatch();
  return (
    <div className="form-card">
      <h2>Create Jam</h2>
      <input
        className="form-control mb-2"
        placeholder="Event Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <select
        className="form-control mb-2"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option>Jamming</option>
        <option>Open Mic</option>
        <option>Meetup</option>
      </select>
      <input
        className="form-control mb-2"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: +e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Time"
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Desc"
        value={form.desc}
        onChange={(e) => setForm({ ...form, desc: e.target.value })}
      ></textarea>
      <button
        className="btn btn-dark"
        onClick={() => {
          d(addEvent(form));
          alert("Created");
        }}
      >
        Create
      </button>
    </div>
  );
}
