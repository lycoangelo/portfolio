'use client';

import styles from './PersonalDetails.styles';
import Button from '@app/atoms/Button/Button';
import Essay from '@app/components/Essay/Essay';
import IconShowcase from '@app/components/IconShowcase/IconShowcase';
import SkillSetList from '@app/components/SkillSetList/SkillSetList';
import TimelineJobs from '@app/components/TimelineJobs/TimelineJobs';
import { PersonalDetailsProps, PersonalDetailsMap } from './PersonalDetails.interface';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'rooks';

const personalDetailsMap: PersonalDetailsMap = {
  Essay,
  IconShowcase,
  SkillSetList,
  TimelineJobs
};

export default function PersonalDetails({ sectionsCollection }: PersonalDetailsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [minHeight, setMinHeight] = useState<number | string>('unset');
  const panelsRef = useRef<(HTMLElement | null)[]>([]);
  const tabs = sectionsCollection.items;

  const { innerWidth } = useWindowSize();

  useEffect(() => {
    let containerMinHeight = 0;
    panelsRef.current.forEach((panel) => {
      const panelHeight = panel?.offsetHeight || 0;
      if (panelHeight > containerMinHeight) containerMinHeight = panelHeight;
    });
    setMinHeight(containerMinHeight);
  }, [innerWidth]);

  return (
    <section className={styles.container} style={{ minHeight }}>
      <div className={styles.tabList} role="tablist">
        <div className={styles.animation} role="presentation" />
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
              <p className={styles.eyebrow}>{tab.name}</p>
              <h2 className={styles.title}>{tab.title}</h2>
              <Component {...tab} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
