'use client';

import styles from './Hero.styles';
import useDownloader from 'react-use-downloader';
import Button from '../../atoms/Button/Button';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface HeroProps {
  background: {
    title: string;
    url: string;
  };
  cv?: {
    title: string;
    url: string;
  };
  description: string;
  headline: any;
}

export default function Hero({ background, cv, description, headline }: HeroProps) {
  const { download, error } = useDownloader();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{documentToReactComponents(headline.json)}</h1>
        <p className={styles.description}>{description}</p>
        {cv && (
          <Button
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
            priority
            sizes="100vw"
            height="1080"
            width="1920"
            src={background.url}
          />
        </figure>
      </div>
    </section>
  );
}
