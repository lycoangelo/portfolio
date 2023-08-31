import { Dispatch, Ref, SetStateAction } from 'react';

export interface CarouselNavProps {
  activeIndex: number;
  className?: string;
  name: string;
  navNextRef?: Ref<unknown>;
  navPrevRef?: Ref<unknown>;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  totalIndexes: number;
}
