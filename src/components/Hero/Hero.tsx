'use client';

import styles from './Hero.styles';
import useDownloader from 'react-use-downloader';
import Button from '../../atoms/Button/Button';
import Image from 'next/image';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { HeroProps } from './Hero.interface';
import TypingText from '@app/atoms/TypingText/TypingText';
import { HERO } from '@app/lib/constants/selectors';

export default function Hero({
  background,
  cv,
  description,
  headline
}: HeroProps) {
  const { download } = useDownloader();

  return (
    <section className={styles.container} id={HERO}>
      <div className={styles.content}>
        <TypingText
          className={styles.title}
          duration={150}
          hideCursor
          layout="left"
          text={documentToHtmlString(headline.json)}
        />
        <p className={styles.description}>{description}</p>
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
            alt={background.title}
            className={styles.backgroundImage}
            height="1080"
            priority
            sizes="100vw"
            src={background.url}
            width="1920"
          />
        </figure>
      </div>
    </section>
  );
}
