import styles from './TimelineJobs.styles';
import Button from '@app/components/atoms/Button/Button';
import { useState } from 'react';
import { TimelineJobsProps } from './TimelineJobs.interface';
import { getYear } from '@app/lib/helpers/date';

export default function TimelineJobs({
  timelinesCollection
}: TimelineJobsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const timelines = timelinesCollection.items;

  return (
    <div className={styles.timelines}>
      <ul className={styles.timelineTabList} role="tablist">
        {timelines.map((timeline, index) => {
          const isActive = index === activeTabIndex;
          const { title } = timeline;

          return (
            <li
              className={styles.timelineTabWrapper(index === 0, isActive)}
              key={index}
            >
              <Button
                aria-controls={title}
                aria-selected={isActive}
                className={styles.timelineTab(isActive)}
                color={index === activeTabIndex ? 'active' : 'primary'}
                onClick={() => setActiveTabIndex(index)}
                role="tab"
                size="sm"
              >
                <span className={styles.timelineTabText}>{title}</span>
              </Button>
            </li>
          );
        })}
      </ul>
      <div className={styles.timelinePanels}>
        {timelines.map((timeline, index) => (
          <div
            aria-hidden={index !== activeTabIndex}
            className={styles.timelinePanel(index === activeTabIndex)}
            id={timeline.title}
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
