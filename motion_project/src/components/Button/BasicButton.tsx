import { useDispatch } from "react-redux";
import { inputModalState } from "../../store/modalSlice";

type ButtonText = {
  children: string;
};

export const BasicButton = ({ children }: ButtonText) => {
  const dispach = useDispatch();

  const handleModal = () => {
    console.log(children);
    dispach(inputModalState(true));
  };
  return (
    <button type="button" className="basic_button" onClick={handleModal}>
      {children}
    </button>
  );
};
