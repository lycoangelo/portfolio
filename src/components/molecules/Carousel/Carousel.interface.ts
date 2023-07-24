import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react';

export interface CarouselProps {
  activeIndex: number;
  className?: string;
  children: ReactNode;
  childrenRef: MutableRefObject<(HTMLElement | null)[]>;
  navNext: HTMLButtonElement | null;
  navPrev: HTMLButtonElement | null;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
