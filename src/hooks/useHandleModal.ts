import { useDispatch } from "react-redux";
import { inputModalState } from "../store/modalSlice";

export const useHandleModal = () => {
  const dispach = useDispatch();

  const modalOpen = () => {
    dispach(inputModalState(true));
  };
  const modalClose = () => {
    dispach(inputModalState(false));
  };

  return { modalOpen, modalClose };
};
