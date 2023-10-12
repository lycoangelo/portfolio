import { useEffect } from 'react';

import { getAncestors } from '../helpers/dom';

const updateAriaHidden = (el: Element, isActive: boolean) => {
  el.setAttribute('aria-hidden', isActive.toString());
};

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
    const parentElements = [
      ...document.querySelectorAll('main > *, body > *:not(script):not(link)')
    ];

    parentElements.forEach((parentElement: Element) => {
      if (!elAncestors.includes(parentElement)) {
        updateAriaHidden(parentElement, isActive);
      } else if (parentElement.tagName !== 'MAIN') {
        parentElement.childNodes.forEach((node) => {
          if (node !== element.parentElement) {
            updateAriaHidden(node as Element, !isActive);
          }
        });
      }
    });

    // Cleanup function to reset aria-hidden
    return () => {
      parentElements.forEach((parentElement: Element) => {
        if (!elAncestors.includes(parentElement)) {
          parentElement.removeAttribute('aria-hidden');
        } else if (parentElement.tagName !== 'MAIN') {
          parentElement.childNodes.forEach((node) => {
            if (node !== element.parentElement) {
              (node as Element).removeAttribute('aria-hidden');
            }
          });
        }
      });
    };
  }, [element, isActive]);
};
