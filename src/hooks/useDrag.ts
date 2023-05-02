import { useDispatch } from "react-redux";
import { contentsSwap } from "../store/contentsSlice";
import { DragPropsType } from "../types/contentsType";

export const useDrag = ({
  index,
  dragIndex,
  setDragIndex,
  targetIndex,
  setTargetIndex,
}: DragPropsType) => {
  const dispach = useDispatch();

  // 드래그 시작 이벤트
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.currentTarget.classList.add("opacity-10");
    setDragIndex(index);
  };

  // 드래그 종료 이벤트.
  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    e.currentTarget.classList.remove("opacity-10");
    setDragIndex(null);
    setTargetIndex(null);
  };

  // 드래그오버가 됐을 경우 이벤트를 종료시켜서 Drop이 동작할 수 있게 해준다.
  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // 드래그한 컨텐츠를 놓는 곳의 인덱스를 받아옴.
  // 1. 드랍한 곳에서 변경하는 이벤트 발생.
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const changeIndex = index;
    dispach(contentsSwap({ dragIndex, changeIndex }));
    setDragIndex(null);
    setTargetIndex(null);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLElement>) => {
    // 드래그된 컨텐츠 인덱스와 인덱스가 같은경우 Enter해도 동작 X
    // 타겟이 된 컨텐츠의 인덱스와 인덱스가 같은 경우 Enter해도 동작 X
    if (dragIndex !== index && targetIndex !== index) {
      setTargetIndex(index);
    }
  };

  return {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop,
    handleDragEnter,
  };
};
