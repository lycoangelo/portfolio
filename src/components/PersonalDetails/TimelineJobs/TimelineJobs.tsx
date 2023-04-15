import styles from './TimelineJobs.styles';
import Button from '@app/atoms/Button/Button';
import { useState } from 'react';
import { TimelineJobsProps } from '../PersonalDetails.interface';
import { getYear } from '@app/lib/helpers/date';

export default function TimelineJobs({ timelinesCollection }: TimelineJobsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const timelines = timelinesCollection.items;

  return (
    <div className={styles.timelines}>
      <div className={styles.timelineTabList} role="tablist">
        {timelines.map((timeline, index) => {
          const isActive = index === activeTabIndex;
          const isFirstChild = index === 0;

          return (
            <div className={styles.timelineTabWrapper(isFirstChild, isActive)} key={index}>
              <Button
                className={styles.timelineTab(isFirstChild, isActive)}
                color={index === activeTabIndex ? 'active' : 'inactive'}
                onClick={() => setActiveTabIndex(index)}
                role="tab"
                size="md"
              >
                <span className={styles.timelineTabText}>{timeline.title}</span>
              </Button>
            </div>
          );
        })}
      </div>
      <div className={styles.timelinePanels}>
        {timelines.map((timeline, index) => (
          <div
            aria-hidden={index !== activeTabIndex}
            className={styles.timelinePanel(index === activeTabIndex)}
            key={index}
            role="tabpanel"
          >
            {timeline.jobsCollection.items.map((job, index) => {
              const startYear = getYear(job.startDate);
              const endYear = getYear(job.endDate);

              return (
                <div className={styles.job} key={index}>
                  <div className={styles.date}>
                    <time dateTime={startYear.toString()}>{startYear}</time>-
                    <time dateTime={endYear.toString()}>{endYear}</time>
                  </div>
                  <div className={styles.details}>
                    <h3 className={styles.company}>{job.company}</h3>
                    <p className={styles.role}>{job.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
