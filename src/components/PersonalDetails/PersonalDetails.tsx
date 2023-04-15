'use client';

import styles from './PersonalDetails.styles';
import Button from '@app/atoms/Button/Button';
import Essay from '@app/components/PersonalDetails/Essay/Essay';
import TimelineJobs from '@app/components/PersonalDetails/TimelineJobs/TimelineJobs';
import { PersonalDetailsProps, PersonalDetailsMap } from './PersonalDetails.interface';
import { useState } from 'react';

const personalDetailsMap: PersonalDetailsMap = {
  Essay,
  TimelineJobs
};

export default function PersonalDetails({ sectionsCollection }: PersonalDetailsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = sectionsCollection.items;

  return (
    <section className={styles.container}>
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
