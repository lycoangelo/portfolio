"use client";

import Image from "next/image";

import TypingText from "@app/components/molecules/TypingText/TypingText";
import { CONTACT_FORM_ID, HERO_ID } from "@app/lib/constants/selectors";
import { scrollToElement } from "@app/lib/helpers/dom";
import useToggleClassInView from "@app/lib/hooks/useToggleAnchorClass";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import va from "@vercel/analytics";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useDownloader from "react-use-downloader";

import Button from "../../atoms/Button/Button";
import { HeroProps } from "./Hero.interface";
import styles from "./Hero.styles";

const typeDuration = 150;

export default function Hero({
  background,
  cv,
  description,
  headline
}: HeroProps) {
  const { download } = useDownloader();

  const headlineText = documentToHtmlString(headline.json);

  const descriptionRef = useRef(null);

  const sectionRef = useToggleClassInView(HERO_ID, "text-white");

  const startAnimation = useInView(descriptionRef, {
    once: true,
    margin: "-20% 0px 0px"
  });

  const classes = styles(startAnimation);

  const transitionOffset = 700;

  const titleAnimationDuration = typeDuration * headlineText.length;

  const getTransitionDelay = (offset: number = 0) => ({
    transitionDelay: `${titleAnimationDuration + offset}ms`
  });

  const handleDownloadClick = () => {
    va.track('Clicked "Download CV"');
    cv && download(cv.url, cv.title.replaceAll(" ", "_") + ".pdf");
  };

  const handleScrollToContact = () => {
    va.track('Clicked "Get in Touch"');
    scrollToElement(CONTACT_FORM_ID);
  };

  return (
    <section className={classes.container} id={HERO_ID} ref={sectionRef}>
      <div className={classes.content}>
        <TypingText
          className={classes.title}
          duration={typeDuration}
          hideCursor
          layout="left"
          tag="h1"
          text={headlineText}
        />
        <p
          className={classes.description}
          ref={descriptionRef}
          style={getTransitionDelay(transitionOffset)}
        >
          {description}
        </p>
        {cv && (
          <div
            className={classes.ctaWrapper}
            style={getTransitionDelay(transitionOffset * 1.2)}
          >
            <Button
              className={classes.cta}
              color="primary"
              hasBorderEffect
              icon="download"
              onClick={handleDownloadClick}
              size="lg"
            >
              Download CV
            </Button>
            <Button
              className={classes.cta}
              color="secondary"
              hasBorderEffect
              onClick={handleScrollToContact}
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        )}
      </div>
      <motion.div
        aria-hidden
        className={classes.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: startAnimation ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <figure className={classes.backgroundWrapper}>
          <Image
            alt={background.alt}
            className={classes.backgroundImage}
            height="1080"
            priority
            sizes="100vw"
            src={background.src}
            width="1920"
          />
        </figure>
      </motion.div>
    </section>
  );
}
