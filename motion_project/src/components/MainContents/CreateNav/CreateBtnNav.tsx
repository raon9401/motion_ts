import { CREATE_BTN_LIST } from "../../../constants/CreateBtnList";
import { BasicButton } from "../../Button/BasicButton";

export const CreateBtnNav = () => {
  return (
    <nav className="p-4">
      <section className="h-14 flex space-x-2 justify-center">
        {CREATE_BTN_LIST.map((item) => (
          <BasicButton key={item}>{item}</BasicButton>
        ))}
      </section>
    </nav>
  );
};
