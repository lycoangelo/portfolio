import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface CarouselProps {
  activeIndex: number;
  className?: string;
  children: ReactNode;
  navNext: HTMLButtonElement | null;
  navPrev: HTMLButtonElement | null;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  title: string;
}
