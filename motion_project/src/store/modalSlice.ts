import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  id: number;
  value: boolean;
};

const initialState: InitialState = {
  id: 1,
  value: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    inputModalState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default modalSlice;
export const { inputModalState } = modalSlice.actions;
