'use client';

import styles from './PersonalDetails.styles';
import Button from '@app/components/atoms/Button/Button';
import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import Essay from '@app/components/organisms/Essay/Essay';
import IconShowcase from '@app/components/organisms/IconShowcase/IconShowcase';
import SkillSetList from '@app/components/organisms/SkillSetList/SkillSetList';
import TimelineJobs from '@app/components/organisms/TimelineJobs/TimelineJobs';
import { PERSONAL_DETAILS } from '@app/lib/constants/selectors';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'rooks';

import ScrambleText from '@app/components/molecules/ScrambleText/ScrambleText';

const scrambleTexts = [
  ['A Filipino', 'A Husband', 'A Daddy', 'A Dog Dad'],
  ['Batman', 'Superman'],
  ['A Poop Enthusiast', 'A Poop Collector'],
  ['A Gamer', 'A Photographer']
];

import {
  PersonalDetailsProps,
  PersonalDetailsMap
} from './PersonalDetails.interface';
import useToggleClassInView from '@app/lib/hooks/useToggleAnchorClass';

const personalDetailsMap: PersonalDetailsMap = {
  Essay,
  IconShowcase,
  SkillSetList,
  TimelineJobs
};

export default function PersonalDetailsComponent({
  sectionsCollection
}: PersonalDetailsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [minHeight, setMinHeight] = useState<number | string>('unset');

  const animationRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);

  const { innerWidth } = useWindowSize();

  const sectionRef = useToggleClassInView(PERSONAL_DETAILS);

  const tabs = sectionsCollection.items;

  useEffect(() => {
    let containerMinHeight = 0;

    panelsRef.current.forEach((panel) => {
      const panelHeight = panel?.offsetHeight || 0;
      if (panelHeight > containerMinHeight) containerMinHeight = panelHeight;
    });

    setMinHeight(containerMinHeight);
  }, [innerWidth]);

  return (
    <section
      className={styles.container}
      id={PERSONAL_DETAILS}
      ref={sectionRef}
      style={{ minHeight }}
    >
      <div className={styles.tabList} role="tablist">
        <p className={styles.animation} ref={animationRef} role="presentation">
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
        {tabs.map((tab, index) => (
          <Button
            className={styles.tab(index === activeTabIndex)}
            color="transparent"
            key={index}
            onClick={() => setActiveTabIndex(index)}
            role="tab"
            size="fit"
          >
            {tab.name}
          </Button>
        ))}
      </div>
      <div className={styles.panels}>
        {tabs.map((tab, index) => {
          const Component = personalDetailsMap[tab.__typename];

          return (
            <div
              aria-hidden={index !== activeTabIndex}
              className={styles.panel(index === activeTabIndex)}
              key={index}
              ref={(el) => {
                panelsRef.current[index] = el;
              }}
              role="tabpanel"
            >
              <SectionHeader layout="right" name={tab.name} title={tab.title} />
              <Component {...tab} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
