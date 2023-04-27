import ReactPlayer from "react-player";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ContentsType, DragPropsType } from "../../../types/contentsType";
import { contentsSwap, deleteContents } from "../../../store/contentsSlice";
import { handleDrag } from "../../../hooks/handleDrag";

interface ContentsList extends ContentsType, DragPropsType {}

export const ContentsItem = ({
  id,
  category,
  title,
  contents,
  index,
  dragIndex,
  setDragIndex,
  targetIndex,
  setTargetIndex,
}: ContentsList) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const dispach = useDispatch();
  const handleDelete = () => {
    dispach(deleteContents(index));
  };
  /*
    컨텐츠 아이템
    id : number;
    category: string;
    title: string;
    contenst: string;
  */

  const {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop,
    handleDragEnter,
  } = handleDrag({
    index,
    dragIndex,
    setDragIndex,
    targetIndex,
    setTargetIndex,
  });

  // const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
  //   // 에러... 수ㅡ정필요
  //   if (targetIndex === index) {
  //     console.log("드래그 이벤트 떠남 : ", e.currentTarget.tagName);
  //   } else {
  //     setTargetIndex(null);
  //   }
  // };

  return (
    <section
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      // onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`w-11/12 max-w-3xl rounded-2xl p-4 flex ${
        category === "Note" || category === "TODO"
          ? "bg-amber-400"
          : "bg-slate-600"
      }
  ${index === targetIndex ? "bg-orange-400" : ""}
      `}
    >
      {/* 이미지 컨텐츠 */}
      {category === "Image" && (
        <article className="thumnail_layout">
          <img src={contents} alt="thumnail" className="w-[320px] h-[210px]" />
        </article>
      )}
      {/* 영상 컨텐츠 */}
      {category === "Video" && (
        <article className="thumnail_layout">
          <ReactPlayer width="320px" height="210px" url={contents} />
        </article>
      )}
      {/* 타이틀 */}
      <article className="flex flex-col">
        <div className="flex">
          <p className="font-bold text-lg text-white">{title}</p>
          {/* 컨텐츠 삭제 */}
          <AiOutlineClose
            className="w-7 fill-white cursor-pointer active:scale-90"
            onClick={handleDelete}
          />
        </div>
        {/* 텍스트 컨텐츠 */}
        {category === "Note" && <p className="pt-2 underline">{contents}</p>}
        {category === "TODO" && (
          <div className="flex justify-start items-center">
            <input
              type="checkbox"
              className="w-fit mr-2 accent-pink-500"
              onClick={() => {
                setIsCheck(!isCheck);
              }}
            />
            <p className={`pt-2 ${isCheck && `line-through`}`}>{contents}</p>
          </div>
        )}
      </article>
    </section>
  );
};
