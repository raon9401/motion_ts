import ReactPlayer from "react-player";
import { useState } from "react";
import { Contents } from "../../../types/contentsType";

export const ContentsItem = ({ id, category, title, contents }: Contents) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  /*
    컨텐츠 아이템
    category: string;
    title: string;
    contenst: string;
  */

  return (
    <section className="w-11/12 max-w-3xl bg-slate-600 rounded-2xl p-4 flex">
      {/* 이미지 컨텐츠 */}
      {category === "Image" && (
        <article className="border-2 h-fit w-fit px-2 rounded-md mr-5">
          <img src={contents} alt="thumnail" className="w-[320px] h-[210px]" />
        </article>
      )}
      {/* 영상 컨텐츠 */}
      {category === "Video" && (
        <article className="border-2 h-fit w-fit px-2 rounded-md mr-5">
          <ReactPlayer width="320px" height="210px" url={contents} />
        </article>
      )}

      {/* 타이틀 */}
      <div className="flex flex-col">
        <p className="font-bold text-lg text-white w-fit">{title}</p>

        {category === "Note" && <p>{contents}</p>}
        {category === "TODO" && (
          <div className="flex justify-start items-center">
            <input
              type="checkbox"
              className="w-fit mr-2"
              onClick={() => {
                setIsCheck(!isCheck);
              }}
            />
            <p className={isCheck && `line-through`}>{contents}</p>
          </div>
        )}
      </div>
    </section>
  );
};
