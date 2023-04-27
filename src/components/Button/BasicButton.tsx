import { useDispatch } from "react-redux";
import { categoryState } from "../../store/categorySlice";
import { inputModalState } from "../../store/modalSlice";

type ButtonText = {
  children: string;
};

export const BasicButton = ({ children }: ButtonText) => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(categoryState(children));
    dispatch(inputModalState(true));
  };
  return (
    <button type="button" className="basic_button" onClick={handleModal}>
      {children}
    </button>
  );
};
