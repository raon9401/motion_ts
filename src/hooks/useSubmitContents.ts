import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentsType, InputContentsType } from "../types/contentsType";
import { createContents } from "../store/contentsSlice";
import { useHandleModal } from "./useHandleModal";
import { URL_REG } from "../constants/Reg";
import { RootState } from "../store/_index";

export const useSubmitContents = () => {
  const [formData, setFormData] = useState<InputContentsType>({});
  const categoryState = useSelector((state: RootState) => state.category.value);

  const dispach = useDispatch();
  const { modalClose } = useHandleModal();

  const contentsPush = ({ id, category, contents, title }: ContentsType) => {
    const contentsData = { id, category, contents, title };
    dispach(createContents(contentsData));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitContents = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = Date.now();
    if (formData.title) {
      if (categoryState === "Image" || categoryState === "Video") {
        if (!formData.url) {
          alert("URL을 입력해주세요!");
        } else if (!URL_REG.test(formData.url)) {
          alert("올바른 URL을 입력해주세요!");
        } else {
          // input 모두 적을 경우
          console.log(formData, categoryState);
          const data: ContentsType = {
            id: date,
            category: categoryState,
            title: formData.title,
            contents: formData.url,
          };
          contentsPush(data);
          modalClose();
        }
      }
      if (categoryState === "Note" || categoryState === "TODO") {
        if (!formData.text) {
          alert("내용을 입력해주세요!");
        } else {
          // input 모두 적을 경우
          console.log(formData, categoryState);
          const data: ContentsType = {
            id: date,
            category: categoryState,
            title: formData.title,
            contents: formData.text,
          };
          contentsPush(data);
          modalClose();
        }
      }
    }
    if (!formData.title) {
      alert("타이틀을 입력해주세요!");
    }
  };

  return { handleSubmitContents, handleInputChange };
};
