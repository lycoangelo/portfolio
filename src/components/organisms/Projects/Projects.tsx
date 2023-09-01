'use client';

import styles from './Projects.styles';
import SectionHeader from '@app/components/molecules/SectionHeader/SectionHeader';
import { ProjectsProps } from './Projects.interface';
import { PROJECTS } from '@app/lib/constants/selectors';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Button from '@app/components/atoms/Button/Button';
import { FlipIcon } from '@app/components/atoms/Icon/Icon';
import Carousel from '@app/components/molecules/Carousel/Carousel';
import CarouselNav from '@app/components/molecules/CarouselNav/CarouselNav';
import ProjectCard from '@app/components/molecules/ProjectCard/ProjectCard';
import useToggleClassInView from '@app/lib/hooks/useToggleAnchorClass';
import Image from 'next/image';

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

  const sectionRef = useToggleClassInView(PROJECTS);

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
    <section className={styles.container} id={PROJECTS} ref={sectionRef}>
      <SectionHeader
        className={styles.header}
        layout="left"
        name={name}
        title={title}
      />
      <Marquee className={styles.marquee} pauseOnHover speed={60} autoFill>
        {projects.map(({ description, logo, name }, index) => (
          <Button
            aria-hidden
            className={styles.bullet(cardsFlipState[index])}
            color={activeIndex === index ? 'primary' : 'inactive'}
            key={index}
            onClick={() => handleBulletClick(index)}
            size="auto"
            tabIndex={-1}
          >
            {logo ? (
              <Image
                className={styles.logo}
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
        ))}
      </Marquee>

      <Carousel
        activeIndex={activeIndex}
        className={styles.projects}
        navNext={carouselNavNext}
        navPrev={carouselPrevNext}
        setActiveIndex={setActiveIndex}
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
