/**
 * Retrieves and returns a list of ancestor elements for a given HTML element.
 *
 * @param el The HTML element for which to retrieve ancestors.
 * @returns A NodeList containing all ancestor elements in the order from closest to furthest.
 */
export const getAncestors = (el: Element | ParentNode | null) => {
  const ancestors = [];
  while (el) {
    ancestors.unshift(el);
    el = el.parentNode;
  }
  return ancestors;
};

/**
 * Calculates and returns the position of an element relative to its parent element.
 *
 * @param element The element for which to calculate the position.
 * @returns An object containing the left, top, right, and bottom positions relative to its parent.
 */
export const getElementPosition = (element: HTMLElement | null) => {
  if (element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft;

    return {
      top: rect.top + scrollTop,
      bottom: rect.bottom + scrollTop,
      left: rect.left + scrollLeft,
      right: rect.right + scrollLeft
    };
  }

  return {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }; // Default values if element or parent is null
};

/**
 * Retrieves the page coordinates (X and Y) from a MouseEvent or TouchEvent.
 *
 * @param e The MouseEvent or TouchEvent from which to extract the coordinates.
 * @returns An object containing the horizontal (X) and vertical (Y) page coordinates of the event.
 */
export const getEventPosition = (e: MouseEvent | TouchEvent) => ({
  x: (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX) || 0,
  y: (e instanceof MouseEvent ? e.pageY : e.touches[0].pageY) || 0
});

/**
 * Updates the tabindex attribute of focusable elements within a given element.
 *
 * @param {Element} element The parent element within which to update tabindex attributes.
 * @param {boolean} isFocusable A boolean indicating whether the elements should be made focusable or not.
 *                              If true, elements' tabindex will be set. If false, tabindex will be removed.
 */
export const updateTabIndex = (element: Element, isFocusable: boolean) => {
  // Get all focusable elements
  const focusableElements = element.querySelectorAll(
    'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  // Loop through each focusable element
  focusableElements.forEach((focusableElement) => {
    // Check if the focusableElement has the 'data-custom-tabindex' attribute
    if (focusableElement.getAttribute('data-custom-tabindex') === 'false') {
      // Update tabindex only if it doesn't have the 'data-custom-tabindex' attribute
      focusableElement.setAttribute('tabindex', isFocusable ? '0' : '-1');
    }
  });
};
