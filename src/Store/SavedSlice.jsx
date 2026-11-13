import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "saved",
  initialState: [],
  reducers: {
    addToSaved: (s, a) => {
      if (!s.find((i) => i.id === a.payload.id)) s.push(a.payload);
    },
    removeFromSaved: (s, a) => s.filter((i) => i.id !== a.payload),
    clearSaved: () => [],
  },
});
export const { addToSaved, removeFromSaved, clearSaved } = slice.actions;
export default slice.reducer;
