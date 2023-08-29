'use client';

import styles from './Hero.styles';
import useDownloader from 'react-use-downloader';
import Button from '../../atoms/Button/Button';
import Image from 'next/image';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { HeroProps } from './Hero.interface';
import TypingText from '@app/components/molecules/TypingText/TypingText';
import { HERO } from '@app/lib/constants/selectors';
import { motion } from 'framer-motion';
import useToggleClassInView from '@app/lib/hooks/useToggleAnchorClass';

const typeDuration = 150;

export default function Hero({
  background,
  cv,
  description,
  headline
}: HeroProps) {
  const { download } = useDownloader();

  const headlineText = documentToHtmlString(headline.json);

  const sectionRef = useToggleClassInView(HERO);

  return (
    <section className={styles.container} id={HERO} ref={sectionRef}>
      <div className={styles.content}>
        <TypingText
          className={styles.title}
          duration={typeDuration}
          hideCursor
          layout="left"
          text={headlineText}
        />
        <motion.p className={styles.description}>{description}</motion.p>
        {cv && (
          <Button
            className={styles.cv}
            color="primary"
            hasBorderEffect
            icon="download"
            onClick={() => download(cv.url, cv.title)}
            size="lg"
          >
            Download CV
          </Button>
        )}
      </div>
      <div className={styles.background}>
        <figure className={styles.backgroundWrapper}>
          <Image
            alt={background.alt}
            className={styles.backgroundImage}
            height="1080"
            priority
            sizes="100vw"
            src={background.src}
            width="1920"
          />
        </figure>
      </div>
    </section>
  );
}
