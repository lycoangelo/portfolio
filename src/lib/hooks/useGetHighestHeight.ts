import { useEffect, useState } from 'react';
import { useWindowSize } from 'rooks';

export const useGetHighestHeight = (elements: (HTMLElement | null)[]) => {
  const [height, setHeight] = useState<number | string>('unset');

  const { innerWidth } = useWindowSize();

  useEffect(() => {
    let containerheight = 0;

    elements.forEach((element) => {
      const elementHeight = element?.offsetHeight || 0;
      const elementStyles = element && getComputedStyle(element);

      const elementVerticalMargin =
        parseInt(elementStyles?.marginTop || '0') +
        parseInt(elementStyles?.marginBottom || '0');

      const computedHeight = elementHeight + elementVerticalMargin;

      if (computedHeight > containerheight) {
        containerheight = computedHeight;
      }
    });

    setHeight(containerheight);
  }, [elements, innerWidth]);

  return height;
};
