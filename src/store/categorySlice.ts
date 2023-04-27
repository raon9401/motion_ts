import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  id: number;
  value: string;
};

const initialState: InitialState = {
  id: 3,
  value: "",
};

const categorys = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default categorys;
export const { categoryState } = categorys.actions;
