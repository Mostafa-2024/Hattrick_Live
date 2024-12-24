import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./reducer"
import activeModeSlice from "./reducer2"

export const store = configureStore({
  reducer: {
    darkModeStatue: darkModeSlice,
    activeModeStatue: activeModeSlice,
  }
})