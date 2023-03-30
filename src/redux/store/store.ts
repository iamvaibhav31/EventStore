import { configureStore } from "@reduxjs/toolkit";

import Eventslice from "../features/CRUDEvents/Eventslice";
const store = configureStore({
  reducer: {
    events: Eventslice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
