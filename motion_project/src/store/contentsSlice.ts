import { createSlice } from "@reduxjs/toolkit";
import { Contents } from "../types/contentsType";

type InitialState = {
  id: number;
  value: Contents[];
  length: number;
};

const initialState: InitialState = {
  id: 1,
  value: [],
  length: 0,
};

const contents = createSlice({
  name: "contents",
  initialState,
  reducers: {
    craeteContents: (state, action) => {
      state.value.push(action.payload);
    },
    contentsLength: (state) => {
      state.length = state.value.length;
    },
  },
});

export default contents;
export const { craeteContents, contentsLength } = contents.actions;
