import Button from '@app/components/atoms/Button/Button';
import { getYear } from '@app/lib/helpers/date';
import { stringToKebabCase } from '@app/lib/helpers/string';
import va from '@vercel/analytics';
import { useState } from 'react';

import { TimelineJobsProps } from './TimelineJobs.interface';
import styles from './TimelineJobs.styles';

export default function TimelineJobs({ jobsCollection }: TimelineJobsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const timelines = jobsCollection.items;

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
    va.track(`Clicked "${timelines[index].title} timeline tab"`);
  };

  return (
    <div className={styles.timelines}>
      <div className={styles.timelineTabList} role="tablist">
        {timelines.map((timeline, index) => {
          const isActive = index === activeTabIndex;
          const { title } = timeline;

          return (
            <div
              className={styles.timelineTabWrapper(index === 0, isActive)}
              key={index}
            >
              <Button
                aria-controls={stringToKebabCase(title)}
                aria-selected={isActive}
                className={styles.timelineTab(isActive)}
                color={index === activeTabIndex ? 'active' : 'primary'}
                id={`tab-${index}`}
                onClick={() => handleTabChange(index)}
                size="sm"
                role="tab"
              >
                <span className={styles.timelineTabText}>{title}</span>
              </Button>
            </div>
          );
        })}
      </div>
      <div className={styles.timelinePanels}>
        {timelines.map((timeline, index) => (
          <div
            aria-hidden={index !== activeTabIndex}
            aria-labelledby={`tab-${index}`}
            className={styles.timelinePanel(index === activeTabIndex)}
            id={stringToKebabCase(timeline.title)}
            key={index}
            role="tabpanel"
          >
            {timeline.jobsCollection.items.map(
              ({ company, endDate, isPresent, role, startDate }, index) => {
                const startYear = getYear(startDate);
                const endYear = getYear(endDate);

                return (
                  <div className={styles.job} key={index}>
                    <div className={styles.date}>
                      <time dateTime={startYear.toString()}>{startYear}</time>
                      {isPresent ? (
                        <span>
                          -<span className={styles.present}>PRESENT</span>
                        </span>
                      ) : (
                        endYear !== startYear && (
                          <time dateTime={endYear.toString()}>-{endYear}</time>
                        )
                      )}
                    </div>
                    <div className={styles.details}>
                      <h3 className={styles.company}>{company}</h3>
                      <p className={styles.role}>{role}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
