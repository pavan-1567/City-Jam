import { createSlice } from "@reduxjs/toolkit";

const loadAll = () => {
  try {
    return JSON.parse(localStorage.getItem("cityjam_all_bookings") || "[]");
  } catch {
    return [];
  }
};

const slice = createSlice({
  name: "bookings",
  initialState: [],
  reducers: {
    addToBookings: (s, a) => {
      if (!s.find((i) => i.id === a.payload.id)) {
        s.push(a.payload);
        // ALSO save for Admin with user details
        const user = localStorage.getItem("cityjam_user") || "Guest";
        const all = loadAll();
        all.push({
          bookingId: Date.now(),
          user: user,
          eventName: a.payload.name,
          event: a.payload,
          location: a.payload.location,
          price: a.payload.price,
          date: new Date().toLocaleString(),
          category: a.payload.category,
        });
        localStorage.setItem("cityjam_all_bookings", JSON.stringify(all));
      }
    },
    removeFromBookings: (s, a) => s.filter((i) => i.id !== a.payload),
    clearBookings: () => [], // Only clears current user, NOT admin's all_bookings
  },
});

export const { addToBookings, removeFromBookings, clearBookings } =
  slice.actions;
export default slice.reducer;
