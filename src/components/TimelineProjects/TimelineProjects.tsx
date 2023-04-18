'use client';

import styles from './TimelineProjects.styles';
import SectionHeader from '@app/atoms/SectionHeader/SectionHeader';
import { TimelineProjectsProps } from './TimelineProjects.interface';
import { getYear } from '@app/lib/helpers/date';

export default function TimelineProjects({
  name,
  title,
  projectsCollection
}: TimelineProjectsProps) {
  return (
    <section className={styles.container}>
      <SectionHeader
        className={styles.header}
        layout="left"
        name={name}
        title={title}
      />
      <div className={styles.projects}>
        {projectsCollection.items.map(
          ({ company, endDate, isPresent, name, role, startDate }, index) => {
            const startYear = getYear(startDate);
            const endYear = getYear(endDate);

            return (
              <div className={styles.project} key={index}>
                <div className={styles.dateRange}>
                  <time dateTime={startYear.toString()}>{startYear}</time>
                  <span className={styles.dateSeparator}>-</span>
                  {isPresent ? (
                    <span className={styles.present}>Present</span>
                  ) : (
                    <time dateTime={endYear.toString()}>{endYear}</time>
                  )}
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
