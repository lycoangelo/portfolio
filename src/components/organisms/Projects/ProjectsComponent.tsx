'use client';

import styles from './Projects.styles';
import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import { ProjectsProps } from './Projects.interface';
import { getMonthShortName, getYear } from '@app/lib/helpers/date';
import { TIMELINE_PROJECTS } from '@app/lib/constants/selectors';
import { MouseEvent } from 'react';
import RichText from '@app/components/atoms/RichText/RichText';

export default function Projects({
  name,
  title,
  projectsCollection
}: ProjectsProps) {
  const handleProjectClick = (e: MouseEvent) => {
    e.currentTarget?.querySelector('div')?.classList.toggle('rotate-x-180');
    e.currentTarget?.querySelector('div')?.classList.toggle('rotate-z-180');
  };

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
          (
            { company, description, endDate, isPresent, name, role, startDate },
            index
          ) => {
            const startMonth = getMonthShortName(startDate);
            const endMonth = getMonthShortName(endDate);
            const startYear = getYear(startDate);
            const endYear = getYear(endDate);

            const isNotSameDate =
              startYear !== endYear || startMonth !== endMonth;

            return (
              <button
                className={styles.project}
                key={index}
                onClick={handleProjectClick}
              >
                <div className={styles.inner}>
                  <div className={styles.front}>
                    <div className={styles.dateRange}>
                      <time dateTime={startYear.toString()}>
                        {startMonth} {startYear}
                      </time>
                      {isNotSameDate && (
                        <span className={styles.dateSeparator}>-</span>
                      )}
                      {isNotSameDate &&
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

                  <div className={styles.back}>
                    <RichText contentBody={description} />
                  </div>
                </div>
              </button>
            );
          }
        )}
      </div>
    </section>
  );
}
