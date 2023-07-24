/**
 * Calculates and returns the left position of a button relative to its parent element.
 *
 * @param button The button element for which to calculate the left position.
 * @returns The left position relative to its parent.
 */
export const getLeftPosition = (button: HTMLElement | null): number => {
  if (button) {
    const buttonRect = button.getBoundingClientRect();
    const parentRect = button.parentElement?.getBoundingClientRect();

    if (parentRect) {
      return buttonRect.left - parentRect.left;
    }
  }

  return 0; // Default value if button or parent is null
};
