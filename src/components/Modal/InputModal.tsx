import { useSelector } from "react-redux";
import { useHandleModal } from "../../hooks/useHandleModal";
import { RootState } from "../../store/_index";
import { useSubmitContents } from "../../hooks/useSubmitContents";

export const InputModal = () => {
  const { modalClose } = useHandleModal();

  const categoryState = useSelector((state: RootState) => state.category.value);
  const { handleSubmitContents, handleInputChange } = useSubmitContents();

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
