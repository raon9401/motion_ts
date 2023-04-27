import { createSlice } from "@reduxjs/toolkit";
import { ContentsType } from "../types/contentsType";

type InitialState = {
  id: number;
  value: ContentsType[];
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
    createContents: (state, action) => {
      state.value.push(action.payload);
    },
    contentsLength: (state) => {
      state.length = state.value.length;
    },
    contentsSwap: (state, action) => {
      const { dragIndex, changeIndex } = action.payload;
      const temp = state.value[dragIndex];
      state.value[dragIndex] = state.value[changeIndex];
      state.value[changeIndex] = temp;
    },
    deleteContents: (state, action) => {
      /* 
        삭제 시 로직
        인덱스를 받아옴
        해당 인덱스를 제외하고 value를 업데이트
       */
      state.value = state.value.filter((_, index) => action.payload !== index);
    },
  },
});

export default contents;
export const { createContents, contentsLength, deleteContents, contentsSwap } =
  contents.actions;
