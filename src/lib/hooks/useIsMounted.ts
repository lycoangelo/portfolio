import { useEffect, useState } from 'react';

/**
 * Custom hook to determine if a component is mounted.
 *
 * @returns {boolean} - true if the component is mounted, false otherwise.
 */
export const useIsMounted = () => {
  // Initializing a state variable to track whether the component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Effect hook to set 'isMounted' to 'true' when the component mounts
  useEffect(() => {
    setIsMounted(true); // Setting 'isMounted' state to 'true' upon component mount
  }, []); // Empty dependency array ensures the effect runs only once during mounting

  // Returning the value of 'isMounted' which indicates whether the component is mounted
  return isMounted;
};
