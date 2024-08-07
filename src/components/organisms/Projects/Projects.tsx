'use client';

import Image from 'next/image';

import Button from '@app/components/atoms/Button/Button';
import { FlipIcon } from '@app/components/atoms/Icon/Icon';
import Carousel from '@app/components/molecules/Carousel/Carousel';
import CarouselNav from '@app/components/molecules/CarouselNav/CarouselNav';
import ProjectCard from '@app/components/molecules/ProjectCard/ProjectCard';
import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import { PROJECTS_ID } from '@app/lib/constants/selectors';
import useToggleClassInView from '@app/lib/hooks/useToggleAnchorClass';
import va from '@vercel/analytics';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

import { ProjectsProps } from './Projects.interface';
import styles from './Projects.styles';

export default function Projects({
  name,
  title,
  projectsCollection
}: ProjectsProps) {
  const { items: projects } = projectsCollection;

  const [activeIndex, setActiveIndex] = useState(0);

  const [cardsFlipState, setCardsFlipState] = useState(
    projects.map(() => false)
  );

  const [carouselNavNext, setCarouselNavNext] =
    useState<HTMLButtonElement | null>(null);

  const [carouselPrevNext, setCarouselPrevNext] =
    useState<HTMLButtonElement | null>(null);

  const carouselNavNextRef = useRef<HTMLButtonElement>(null);
  const carouselNavPrevRef = useRef<HTMLButtonElement>(null);

  const sectionRef = useToggleClassInView(PROJECTS_ID, 'text-white');

  const updateCardsFlipState = (index: number) => {
    const newState = [...cardsFlipState];
    const { description, name } = projects[index];
    newState[index] = description && !newState[index];
    setCardsFlipState(newState);

    const state = newState[index] ? 'Read More' : 'Back';
    va.track(`Clicked "${name}" "${state}" button`);
  };

  const handleBulletClick = (index: number) => {
    const isActive = activeIndex === index;
    isActive ? updateCardsFlipState(index) : setActiveIndex(index);

    const activeState = isActive ? ' active' : ' inactive';
    const flipState = cardsFlipState[index] ? ' reversed ' : ' ';

    va.track(
      `Clicked "${projects[index].name}"${activeState + flipState}bullet`
    );
  };

  useEffect(() => {
    setCarouselNavNext(carouselNavNextRef.current);
    setCarouselPrevNext(carouselNavPrevRef.current);
  }, []);

  return (
    <section className={styles.container} id={PROJECTS_ID} ref={sectionRef}>
      <SectionHeader
        className={styles.header}
        layout="left"
        name={name}
        title={title}
      />
      <Marquee autoFill className={styles.marquee} pauseOnHover speed={60}>
        {projects.map(({ description, logo, name }, index) => {
          const isActive = activeIndex === index;
          const isFlipped = cardsFlipState[index];

          return (
            <Button
              aria-hidden
              className={styles.bullet(isFlipped)}
              color={isActive ? 'active' : 'primary'}
              key={index}
              onClick={() => handleBulletClick(index)}
              tabIndex={-1}
            >
              {logo ? (
                <Image
                  className={styles.logo(isFlipped, isActive)}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              ) : (
                name.charAt(0)
              )}
              {description && <FlipIcon className={styles.flip} />}
            </Button>
          );
        })}
      </Marquee>

      <Carousel
        activeIndex={activeIndex}
        className={styles.projects}
        navNext={carouselNavNext}
        navPrev={carouselPrevNext}
        setActiveIndex={setActiveIndex}
        title={title}
      >
        {projects.map((card, index) => (
          <ProjectCard
            {...card}
            key={index}
            isFlipped={cardsFlipState[index]}
            setIsFlipped={() => updateCardsFlipState(index)}
          />
        ))}
      </Carousel>
      <div className={styles.nav}>
        <CarouselNav
          activeIndex={activeIndex}
          className={styles.carouselNav}
          name="Projects"
          navNextRef={carouselNavNextRef}
          navPrevRef={carouselNavPrevRef}
          setActiveIndex={setActiveIndex}
          totalIndexes={projects.length - 1}
        />
      </div>
    </section>
  );
}
