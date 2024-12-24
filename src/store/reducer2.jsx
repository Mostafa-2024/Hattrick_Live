import { createSlice } from "@reduxjs/toolkit";

const activeModeSlice = createSlice({
  name: "activeMode",
  initialState: true,
  reducers: {
    toggleActiveMode: (state, action) =>{
      return !state
    },
  }
});

export const {toggleActiveMode } = activeModeSlice.actions;
export default activeModeSlice.reducer;