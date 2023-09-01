'use client';

import styles from './PersonalDetails.styles';
import Button from '@app/components/atoms/Button/Button';
import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import ScrambleText from '@app/components/molecules/ScrambleText/ScrambleText';
import Essay from '@app/components/organisms/Essay/Essay';
import IconShowcase from '@app/components/organisms/IconShowcase/IconShowcase';
import SkillSetList from '@app/components/organisms/SkillSetList/SkillSetList';
import TimelineJobs from '@app/components/organisms/TimelineJobs/TimelineJobs';
import useToggleClassInView from '@app/lib/hooks/useToggleAnchorClass';
import { useWindowSize } from 'rooks';
import { PERSONAL_DETAILS } from '@app/lib/constants/selectors';
import {
  Fragment,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState
} from 'react';

const scrambleTexts = [
  ['A Filipino', 'A Husband', 'A Daddy', 'A Dog Dad'],
  ['Batman', 'Superman'],
  ['A Poop Enthusiast', 'A Poop Collector'],
  ['A Gamer', 'A Photographer']
];

import {
  PersonalDetailsAnimationProps,
  PersonalDetailsProps,
  PersonalDetailsMap
} from './PersonalDetails.interface';

const personalDetailsMap: PersonalDetailsMap = {
  Essay,
  IconShowcase,
  SkillSetList,
  TimelineJobs
};

const Animation = ({
  activeTabIndex,
  animationRef,
  isMobile = false
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
        texts={scrambleTexts[activeTabIndex]}
      />
    </strong>
  </p>
);

export default function PersonalDetailsComponent({
  sectionsCollection
}: PersonalDetailsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [height, setHeight] = useState<number | string>('unset');

  const animationRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);

  const { innerWidth } = useWindowSize();

  const sectionRef = useToggleClassInView(PERSONAL_DETAILS);

  const buttonsLength = buttonsRef.current.length;
  const tabs = sectionsCollection.items;

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

  useEffect(() => {
    let containerheight = 0;

    panelsRef.current.forEach((panel) => {
      const panelHeight = panel?.offsetHeight || 0;
      if (panelHeight > containerheight) containerheight = panelHeight;
    });

    setHeight(containerheight);
  }, [innerWidth]);

  return (
    <section
      className={styles.container}
      id={PERSONAL_DETAILS}
      ref={sectionRef}
      style={{ height }}
    >
      <div className={styles.tabList}>
        <Animation
          activeTabIndex={activeTabIndex}
          animationRef={animationRef}
        />
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
                  onClick={() => setActiveTabIndex(index)}
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
                    activeTabIndex={activeTabIndex}
                    animationRef={animationRef}
                    isMobile
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
