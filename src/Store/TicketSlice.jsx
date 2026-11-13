import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "tickets",
  initialState: [],
  reducers: {
    addTicket: (s, a) => {
      // Fix: handle both single ticket and array
      if (Array.isArray(a.payload)) {
        s.push(...a.payload);
      } else {
        if (!s.find((t) => t.id === a.payload.id)) s.push(a.payload);
      }
    },
    cancelTicket: (s, a) =>
      s.filter((t) => t.ticketId !== a.payload && t.id !== a.payload),
    clearTickets: () => [], // ADD THIS - This fixes your counting bug
  },
});
export const { addTicket, cancelTicket, clearTickets } = slice.actions;
export default slice.reducer;
