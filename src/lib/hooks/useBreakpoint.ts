import { useEffect, useState } from 'react';
import { useDebounce, useWindowSize } from 'rooks';

const getBreakpoints = (width: number) => ({
  isXs: width >= 0,
  isSm: width >= 512,
  isMd: width >= 768,
  isLg: width >= 1088,
  isXl: width >= 1344,
  isXXl: width >= 1600,
  isBelowSm: width < 512,
  isBelowMd: width < 768,
  isBelowLg: width < 1088
});

export const useBreakpoint = () => {
  const [width, setWidth] = useState(0);

  const handleResize = useDebounce(() => {
    setWidth(window.innerWidth);
  }, 100);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return getBreakpoints(width);
};

/**
 * This custom React Hook returns the current client-side breakpoint based on window dimensions.
 * DO NOT USE for layouts due to hydration issues.
 * @returns {Object} - Returns an object containing boolean values indicating the satisfied breakpoints
 */
export const useClientSideBreakpoint = (): {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  isXXl: boolean;
  isBelowSm: boolean;
  isBelowLg: boolean;
} => {
  const { innerWidth } = useWindowSize();

  return getBreakpoints(innerWidth || 0);
};
