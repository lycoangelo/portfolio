import { HEADER_ID } from "../constants/selectors";

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
const customTabIndexAttr = "data-custom-tabindex";

export const updateElementChildrenTabIndex = (
  element: Element,
  isFocusable: boolean
) => {
  // Get all focusable elements
  const focusableElements = element.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  // Loop through each focusable element
  focusableElements.forEach((focusableElement) => {
    // Check if the focusableElement has the 'data-custom-tabindex' attribute
    if (
      !focusableElement.hasAttribute(customTabIndexAttr) ||
      focusableElement.getAttribute(customTabIndexAttr) === "false"
    ) {
      // Update tabindex only if it doesn't have the 'data-custom-tabindex' attribute
      focusableElement.setAttribute("tabindex", isFocusable ? "0" : "-1");
    }
  });
};

/**
 * Scrolls to a specified element on the page with a smooth animation.
 *
 * @param {HTMLElement} element - The element to scroll to.
 * @param {string} href - The ID or anchor reference of the target section.
 */
export const scrollToElement = (href: string) => {
  // Calculate the scroll position based on the target section's offset and header's height
  const targetOffset = document.getElementById(href)?.offsetTop ?? 0;
  const headerHeight = document.getElementById(HEADER_ID)?.offsetHeight ?? 0;
  const scrollPosition = targetOffset - headerHeight - 20;

  // Scroll to the element with a smooth animation
  window.scrollTo({
    behavior: "smooth",
    top: scrollPosition
  });
};
