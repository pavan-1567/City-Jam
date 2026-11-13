import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./EventSlice.jsx";
import bookingReducer from "./BookingSlice.jsx";
import savedReducer from "./SavedSlice.jsx";
import ticketReducer from "./TicketSlice.jsx";
const store = configureStore({
  reducer: {
    events: eventReducer,
    bookings: bookingReducer,
    saved: savedReducer,
    tickets: ticketReducer,
  },
});
export default store;
