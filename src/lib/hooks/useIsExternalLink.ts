import { useEffect, useState } from "react";

/**
 * Determines whether a URL is an external or internal link.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} - true if the URL is an external link, false if it is an internal link.
 */
export const useIsExternalLink = (url = "") => {
  const [isExternal, setIsExternal] = useState(false);

  useEffect(() => {
    try {
      // Compare the host of the URL with the current domain
      setIsExternal(new URL(url).hostname !== window.location.hostname);
    } catch (error) {
      // If the URL is not valid, it is considered an internal link
      setIsExternal(false);
    }
  }, [url]);

  // Return whether the URL is an external link
  return isExternal;
};
