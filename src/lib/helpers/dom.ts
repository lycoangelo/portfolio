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
