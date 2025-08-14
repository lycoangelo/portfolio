import { Dispatch, Ref, SetStateAction } from "react";

export interface CarouselNavProps {
  activeIndex: number;
  className?: string;
  name: string;
  navNextRef?: Ref<HTMLButtonElement>;
  navPrevRef?: Ref<HTMLButtonElement>;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  totalIndexes: number;
}
