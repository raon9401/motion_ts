import { configureStore } from "@reduxjs/toolkit";
import categorys from "./categorySlice";
import contents from "./contentsSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    contents: contents.reducer,
    category: categorys.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
