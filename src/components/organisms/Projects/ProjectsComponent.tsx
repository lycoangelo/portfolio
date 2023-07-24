'use client';

import styles from './Projects.styles';
import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import { ProjectsProps } from './Projects.interface';
import { getMonthShortName, getYear } from '@app/lib/helpers/date';
import { TIMELINE_PROJECTS } from '@app/lib/constants/selectors';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import RichText from '@app/components/atoms/RichText/RichText';
import Carousel from '@app/components/molecules/Carousel/Carousel';
import Button from '@app/components/atoms/Button/Button';
import CarouselNav from '@app/components/molecules/CarouselNav/CarouselNav';

export default function Projects({
  name,
  title,
  projectsCollection
}: ProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalIndexes, setTotalIndexes] = useState(0);

  const carouselNavNextRef = useRef<HTMLButtonElement>(null);
  const carouselNavPrevRef = useRef<HTMLButtonElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleProjectClick = (e: MouseEvent) => {
    e.currentTarget?.parentElement?.parentElement?.classList.toggle(
      'rotate-x-180'
    );

    e.currentTarget?.parentElement?.parentElement?.classList.toggle(
      'rotate-z-180'
    );
  };

  useEffect(() => {
    setTotalIndexes(projectsRef.current.length - 1);
  }, []);

  return (
    <section className={styles.container} id={TIMELINE_PROJECTS}>
      <SectionHeader
        className={styles.header}
        layout="left"
        name={name}
        title={title}
      />
      <CarouselNav
        activeIndex={activeIndex}
        className={styles.nav}
        navNextRef={carouselNavNextRef}
        navPrevRef={carouselNavPrevRef}
        setActiveIndex={setActiveIndex}
        totalIndexes={totalIndexes}
      />
      <Carousel
        activeIndex={activeIndex}
        className={styles.projects}
        childrenRef={projectsRef}
        navNext={carouselNavNextRef.current}
        navPrev={carouselNavPrevRef.current}
        setActiveIndex={setActiveIndex}
      >
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
              <div
                className={styles.project}
                key={index}
                ref={(el) => (projectsRef.current[index] = el)}
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

                    {description && (
                      <Button
                        className={styles.readMore}
                        onClick={handleProjectClick}
                      >
                        Read More
                      </Button>
                    )}
                  </div>

                  <div className={styles.back}>
                    <RichText contentBody={description} />
                    <Button
                      className={styles.backButton}
                      onClick={handleProjectClick}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </Carousel>
    </section>
  );
}
