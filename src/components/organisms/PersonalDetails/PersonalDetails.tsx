'use client';

import Button from '@app/components/atoms/Button/Button';
import ScrambleText from '@app/components/molecules/ScrambleText/ScrambleText';
import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import Essay from '@app/components/organisms/Essay/Essay';
import IconShowcase from '@app/components/organisms/IconShowcase/IconShowcase';
import SkillSetList from '@app/components/organisms/SkillSetList/SkillSetList';
import TimelineJobs from '@app/components/organisms/TimelineJobs/TimelineJobs';
import { PERSONAL_DETAILS_ID } from '@app/lib/constants/selectors';
import { useGetHighestHeight } from '@app/lib/hooks/useGetHighestHeight';
import useToggleClassInView from '@app/lib/hooks/useToggleAnchorClass';
import va from '@vercel/analytics';
import {
  Fragment,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import {
  PersonalDetailsAnimationProps,
  PersonalDetailsProps,
  PersonalDetailsMap
} from './PersonalDetails.interface';
import styles from './PersonalDetails.styles';

const personalDetailsMap: PersonalDetailsMap = {
  Essay,
  IconShowcase,
  SkillSetList,
  TimelineJobs
};

const Animation = ({
  animationRef,
  isMobile = false,
  scrambleTexts
}: PersonalDetailsAnimationProps) => (
  <p
    aria-hidden
    className={styles.animation(isMobile)}
    ref={animationRef}
    role="presentation"
  >
    <span className={styles.animationText}>I am</span>
    <strong className={styles.strong}>
      <ScrambleText
        className={styles.scramble}
        letterSpeed={100}
        nextLetterSpeed={200}
        pauseTime={3000}
        texts={scrambleTexts ?? []}
      />
    </strong>
  </p>
);

export default function PersonalDetailsComponent({
  name,
  sectionsCollection,
  scrambleTexts
}: PersonalDetailsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const animationRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);

  const sectionRef = useToggleClassInView(PERSONAL_DETAILS_ID, 'text-white');

  const buttonsLength = buttonsRef.current.length;
  const tabs = sectionsCollection.items;

  const height = useGetHighestHeight(panelsRef.current);

  const handleArrowKeys: KeyboardEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    const { key, currentTarget } = e;
    const currentTargetParent = currentTarget.parentElement;
    const previousTabPanel = currentTargetParent?.previousElementSibling;
    const currentTabPanel = currentTargetParent?.nextElementSibling;

    const previousTabButton = previousTabPanel?.previousElementSibling
      ?.childNodes[0] as HTMLButtonElement;
    const nextTabButton = currentTabPanel?.nextElementSibling
      ?.childNodes[0] as HTMLButtonElement;

    if (['ArrowLeft', 'ArrowUp'].includes(key)) {
      e.preventDefault();

      if (previousTabButton) {
        previousTabButton.focus();
      } else {
        buttonsRef.current[buttonsLength - 1]?.focus();
      }
    }

    if (['ArrowRight', 'ArrowDown'].includes(key)) {
      e.preventDefault();

      if (nextTabButton) {
        nextTabButton.focus();
      } else {
        buttonsRef.current[0]?.focus();
      }
    }
  };

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
    va.track(`Clicked "${tabs[index].name}"`);
  };

  const handleFocusableElementsClick = useCallback<EventListener>((e) => {
    va.track(`Clicked "${(e.currentTarget as HTMLElement)?.textContent}"`);
  }, []);

  useEffect(() => {
    panelsRef.current.forEach((panel) => {
      if (!panel) return;
      const allFocusableElements = panel.querySelectorAll('a[href]');
      allFocusableElements.forEach((element) => {
        element.addEventListener('click', handleFocusableElementsClick);
      });
    });
  }, [handleFocusableElementsClick]);

  return (
    <section
      className={styles.container}
      id={PERSONAL_DETAILS_ID}
      ref={sectionRef}
      style={{ height }}
    >
      <div aria-label={name} className={styles.tabList}>
        <Animation animationRef={animationRef} scrambleTexts={scrambleTexts} />
        {tabs.map((tab, index) => {
          const Component = personalDetailsMap[tab.__typename];

          const id = tab.name.replaceAll(' ', '-');
          const isSelected = index === activeTabIndex;

          return (
            <Fragment key={id}>
              <div className={styles.tabWrapper}>
                <Button
                  aria-label={`See ${tab.name}`}
                  aria-expanded={isSelected}
                  className={styles.tab(isSelected)}
                  color="transparent"
                  onClick={() => handleTabChange(index)}
                  onKeyDown={handleArrowKeys}
                  ref={(el) =>
                    (buttonsRef.current[index] = el as HTMLButtonElement)
                  }
                  size="fit"
                >
                  {tab.name}
                </Button>
                {index === tabs.length - 1 && (
                  <Animation
                    animationRef={animationRef}
                    isMobile
                    scrambleTexts={scrambleTexts}
                  />
                )}
              </div>
              <div
                aria-hidden={index !== activeTabIndex}
                className={styles.panel(index === activeTabIndex)}
                ref={(el) => {
                  panelsRef.current[index] = el;
                }}
              >
                <SectionHeader
                  layout="right"
                  name={tab.name}
                  title={tab.title}
                />
                <Component {...tab} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
