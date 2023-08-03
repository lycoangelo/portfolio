'use client';

import styles from './Projects.styles';
import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import { ProjectsProps } from './Projects.interface';
import { TIMELINE_PROJECTS } from '@app/lib/constants/selectors';
import { useEffect, useRef, useState } from 'react';
import Carousel from '@app/components/molecules/Carousel/Carousel';
import CarouselNav from '@app/components/molecules/CarouselNav/CarouselNav';
import ProjectCard from '@app/components/molecules/ProjectCard/ProjectCard';
import Button from '@app/components/atoms/Button/Button';
import Marquee from '@app/components/molecules/Marquee/Marquee';

export default function Projects({
  name,
  title,
  projectsCollection
}: ProjectsProps) {
  const { items: projects } = projectsCollection;

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselNavNext, setCarouselNavNext] =
    useState<HTMLButtonElement | null>(null);
  const [carouselPrevNext, setCarouselPrevNext] =
    useState<HTMLButtonElement | null>(null);
  const [cardsFlipState, setCardsFlipState] = useState(
    projects.map(() => false)
  );

  const carouselNavNextRef = useRef<HTMLButtonElement>(null);
  const carouselNavPrevRef = useRef<HTMLButtonElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateCardsFlipState = (index: number) => {
    const newState = [...cardsFlipState];
    newState[index] = projects[index].description && !newState[index];
    setCardsFlipState(newState);
  };

  const handleBulletClick = (index: number) => {
    activeIndex === index ? updateCardsFlipState(index) : setActiveIndex(index);
  };

  useEffect(() => {
    setCarouselNavNext(carouselNavNextRef.current);
    setCarouselPrevNext(carouselNavPrevRef.current);
  }, []);

  return (
    <section className={styles.container} id={TIMELINE_PROJECTS}>
      <SectionHeader
        className={styles.header}
        layout="left"
        name={name}
        title={title}
      />
      <Marquee className={styles.marquee} duration={20000}>
        {projects.map(({ name }, index) => (
          <Button
            aria-hidden
            className={styles.bullet(cardsFlipState[index])}
            color={activeIndex === index ? 'primary' : 'inactive'}
            key={index}
            onClick={() => handleBulletClick(index)}
            size="auto"
            tabIndex={-1}
          >
            {name.charAt(0)}
          </Button>
        ))}
      </Marquee>

      <Carousel
        activeIndex={activeIndex}
        className={styles.projects}
        childrenRef={projectsRef}
        navNext={carouselNavNext}
        navPrev={carouselPrevNext}
        setActiveIndex={setActiveIndex}
      >
        {projects.map((card, index) => (
          <ProjectCard
            {...card}
            key={index}
            index={index}
            projectsRef={projectsRef}
            isFlipped={cardsFlipState[index]}
            setIsFlipped={() => updateCardsFlipState(index)}
          />
        ))}
      </Carousel>
      <div className={styles.nav}>
        {/*<div className={styles.bullets}>
          {projects.map(({ name }, index) => (
            <Button
              className={styles.bullet(cardsFlipState[index])}
              color={activeIndex === index ? 'primary' : 'inactive'}
              key={index}
              onClick={() => handleBulletClick(index)}
              size="fit"
              style={{ width: `calc(${100 / projects.length}%)` }}
            >
              {name.charAt(0)}
            </Button>
          ))}
        </div>*/}
        <CarouselNav
          activeIndex={activeIndex}
          className={styles.carouselNav}
          navNextRef={carouselNavNextRef}
          navPrevRef={carouselNavPrevRef}
          setActiveIndex={setActiveIndex}
          totalIndexes={projects.length - 1}
        />
      </div>
    </section>
  );
}
