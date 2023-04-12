import { useSelector } from "react-redux";
import { RootState } from "../../store/_index";
import { CreateBtnNav } from "./CreateNav/CreateBtnNav";
import { ContentsItem } from "./ContentsItem/ContentsItem";

export const MainContents = () => {
  const ContentsValue = useSelector((state: RootState) => state.contents.value);

  return (
    <section className="main_layout ">
      <CreateBtnNav />
      <article className="overflow-y-scroll">
        <div className="flex flex-col max-h-[80vh] items-center space-y-8 pt-5 py-4 ">
          {ContentsValue.map((item, index) => (
            <ContentsItem
              key={item.id}
              id={item.id}
              index={index}
              category={item.category}
              title={item.title}
              contents={item.contents}
            />
          ))}
        </div>
      </article>
    </section>
  );
};
