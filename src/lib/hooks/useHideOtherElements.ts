import { useEffect } from 'react';

import { getAncestors } from '../helpers/dom';

/**
 * Custom React hook to hide elements except for the provided element and its ancestors/children
 * @param {HTMLElement} element
 * @param {boolean} isActive
 */
export const useHideOtherElements = (
  isActive: boolean,
  element: Element | null
) => {
  useEffect(() => {
    if (!element) return;

    const elAncestors = [...getAncestors(element)];
    const elChildren = [...element.querySelectorAll('*')];
    const mainContentsEl = [...document.querySelectorAll('body > *')];

    mainContentsEl.forEach((el: Element) => {
      if (!elAncestors.includes(el) && !elChildren.includes(el)) {
        el.setAttribute('aria-hidden', isActive.toString());
      }
    });

    // Cleanup function to reset aria-hidden
    return () => {
      mainContentsEl.forEach((el) => {
        el.removeAttribute('aria-hidden');
      });
    };
  }, [element, isActive]);
};
