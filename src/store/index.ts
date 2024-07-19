import { configureStore } from "@reduxjs/toolkit";
// --- reducer. ---
import modal from "@/store/slices/modal";


const store = configureStore({
  reducer: {
    modalReducer: modal.reducer
  }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
