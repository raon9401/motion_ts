import ReactPlayer from "react-player";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ContentsType } from "../../../types/contentsType";
import { contentsSwap, deleteContents } from "../../../store/contentsSlice";

interface ContentsList extends ContentsType {
  index: number;
  dragIndex: number;
  setDragIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ContentsItem = ({
  id,
  category,
  title,
  contents,
  index,
  dragIndex,
  setDragIndex,
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

  // 드래그 시작 이벤트
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    setDragIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  // 드래그 종료 이벤트.
  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    e.dataTransfer.dropEffect = "move";
    setDragIndex(null);
  };
  // 드래그오버가 됐을 경우 이벤트를 종료시켜서 Drop이 동작할 수 있게 해준다.
  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  // 드래그한 컨텐츠를 놓는 곳의 인덱스를 받아옴.
  // 1. 드랍한 곳에서 변경하는 이벤트 발생.
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const targetIndex = index;
    dispach(contentsSwap({ dragIndex, targetIndex }));
  };

  const handleDragColor = () => {
    console.log(index);
  };

  return (
    <section
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragColor}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`w-11/12 max-w-3xl rounded-2xl p-4 flex  ${
        category === "Note" || category === "TODO"
          ? "bg-amber-400 border-2"
          : "bg-slate-600"
      }
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
      <div className="flex flex-col">
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
            <p className={`pt-2 ${isCheck && `line-through`} `}>{contents}</p>
          </div>
        )}
      </div>
    </section>
  );
};
