'use client';

import styles from './TimelineProjects.styles';
import SectionHeader from '@app/atoms/SectionHeader/SectionHeader';
import { TimelineProjectsProps } from './TimelineProjects.interface';
import { getMonthShortName, getYear } from '@app/lib/helpers/date';
import { TIMELINE_PROJECTS } from '@app/lib/constants/selectors';

export default function TimelineProjects({
  name,
  title,
  projectsCollection
}: TimelineProjectsProps) {
  return (
    <section className={styles.container} id={TIMELINE_PROJECTS}>
      <SectionHeader
        className={styles.header}
        layout="left"
        name={name}
        title={title}
      />
      <div className={styles.projects}>
        {projectsCollection.items.map(
          ({ company, endDate, isPresent, name, role, startDate }, index) => {
            const startMonth = getMonthShortName(startDate);
            const endMonth = getMonthShortName(endDate);
            const startYear = getYear(startDate);
            const endYear = getYear(endDate);
            const isNotSameYear = startYear !== endYear;

            return (
              <div className={styles.project} key={index}>
                <div className={styles.dateRange}>
                  <time dateTime={startYear.toString()}>
                    {startMonth} {startYear}
                  </time>
                  {isNotSameYear && (
                    <span className={styles.dateSeparator}>-</span>
                  )}
                  {isNotSameYear &&
                    (isPresent ? (
                      <span className={styles.present}>Present</span>
                    ) : (
                      <time dateTime={endYear.toString()}>
                        {endMonth} {endYear}
                      </time>
                    ))}
                </div>
                <div className={styles.details}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.detail}>
                    <span className={styles.label}>Company: </span>
                    <span className={styles.value}>{company}</span>
                  </p>
                  <p className={styles.detail}>
                    <span className={styles.label}>Role: </span>
                    <span className={styles.value}>{role}</span>
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
