import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_REG } from "../../constants/Reg";
import { handleModal } from "../../hooks/handleModal";
import { craeteContents } from "../../store/contentsSlice";
import { RootState } from "../../store/_index";
import { Contents, InputContentsType } from "../../types/contentsType";

export const InputModal = () => {
  const [formData, setFormData] = useState<InputContentsType>({});
  const dispach = useDispatch();

  const { modalClose } = handleModal();

  const categoryState = useSelector((state: RootState) => state.category.value);

  const contentsPush = ({ id, category, contents, title }: Contents) => {
    const contentsData = { id, category, contents, title };
    dispach(craeteContents(contentsData));
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
          const data: Contents = {
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
          const data: Contents = {
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

  return (
    <section className="absolute flex justify-center ">
      {/* input modal */}
      <article className="mt-40 w-96 h-fit absolute z-10 p-2 rounded-xl bg-orange-300 shadow-xl flex flex-col items-center">
        <form onSubmit={handleSubmitContents}>
          <p className="text-white text-center h-fit py-3 font-semibold text-xl">
            {categoryState}
          </p>
          <div className="h-fit flex flex-col px-5 items-center space-y-2">
            <div>
              <p>{categoryState} Title</p>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleInputChange}
                className="input"
              />
            </div>
            {/* Image, Video */}
            {(categoryState === "Image" || categoryState === "Video") && (
              <div>
                <p>URL</p>
                <input
                  type="url"
                  name="url"
                  placeholder="URL"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            )}
            {/* Note */}
            {categoryState === "Note" && (
              <div>
                <p>NOTE</p>
                <input
                  type="text"
                  name="text"
                  placeholder="text"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            )}
            {/* TODO */}
            {categoryState === "TODO" && (
              <div>
                <p>TODO</p>
                <input
                  type="text"
                  name="text"
                  placeholder="text"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            )}
            <div className="w-fit pt-5 pb-2 flex space-x-4">
              <button
                type="submit"
                className="basic_button px-5 bg-slate-200 active:bg-orange-300"
              >
                등록
              </button>
              <button
                type="button"
                className="basic_button px-5 bg-slate-200 active:bg-orange-300"
                onClick={modalClose}
              >
                닫기
              </button>
            </div>
          </div>
        </form>
      </article>
      {/* modal 뒷 배경 */}
      <div className=" bg-black opacity-10" onClick={modalClose} />
    </section>
  );
};
