export interface ContentsType {
  id: number;
  category: string;
  title: string;
  contents: string;
}

export interface InputContentsType {
  [key: string]: string;
}

export interface DragPropsType {
  index: number;
  dragIndex: number;
  targetIndex: number;
  setDragIndex: React.Dispatch<React.SetStateAction<number>>;
  setTargetIndex: React.Dispatch<React.SetStateAction<number>>;
}
