import { useEffect, useState } from 'react';
import { useWindowSize } from 'rooks';

export const useGetHighestHeight = (elements: (HTMLElement | null)[]) => {
  const [height, setHeight] = useState<number | string>('unset');

  const { innerWidth } = useWindowSize();

  useEffect(() => {
    let containerheight = 0;

    elements.forEach((element) => {
      const elementHeight = element?.offsetHeight || 0;
      if (elementHeight > containerheight) containerheight = elementHeight;
    });

    setHeight(containerheight);
  }, [elements, innerWidth]);

  return height;
};
