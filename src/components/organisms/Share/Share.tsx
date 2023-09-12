'use client';

import { TwitterXIcon } from '@app/components/atoms/Icon/Icon';
import { useEffect, useState } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';

import styles from './Share.styles';

const socialButtonsMap = (url: string): Record<string, () => JSX.Element> => ({
  facebook: () => (
    <FacebookShareButton className={styles.button} url={url}>
      <FacebookIcon size={20} />
    </FacebookShareButton>
  ),
  linkedin: () => (
    <LinkedinShareButton className={styles.button} url={url}>
      <LinkedinIcon size={20} />
    </LinkedinShareButton>
  ),
  twitter: () => (
    <TwitterShareButton className={styles.button} url={url}>
      <TwitterXIcon className={styles.icon} />
    </TwitterShareButton>
  )
});

export default function Share() {
  const [url, setUrl] = useState('');

  const socials = ['facebook', 'linkedin', 'twitter'];

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {socials.map((social, index) => {
          const SocialButton = socialButtonsMap(url)[social];

          return SocialButton ? (
            <li className={styles.item} key={index}>
              <SocialButton />
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}
