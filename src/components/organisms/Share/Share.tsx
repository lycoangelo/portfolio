'use client';

import { TwitterXIcon } from '@app/components/atoms/Icon/Icon';
import { useEffect, useState } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';

import { ShareProps } from './Share.interface';
import styles from './Share.styles';

const socials = ['email', 'facebook', 'linkedin', 'twitter'];

const socialButtonsMap = (
  classes: { button: string; icon: string },
  isFocusable: boolean,
  url: string
): Record<string, () => JSX.Element> => ({
  email: () => (
    <EmailShareButton
      className={classes.button}
      url={url}
      tabIndex={isFocusable ? 0 : -1}
    >
      <EmailIcon size={20} />
    </EmailShareButton>
  ),
  facebook: () => (
    <FacebookShareButton
      className={classes.button}
      url={url}
      tabIndex={isFocusable ? 0 : -1}
    >
      <FacebookIcon size={20} />
    </FacebookShareButton>
  ),
  linkedin: () => (
    <LinkedinShareButton
      className={classes.button}
      url={url}
      tabIndex={isFocusable ? 0 : -1}
    >
      <LinkedinIcon size={20} />
    </LinkedinShareButton>
  ),
  twitter: () => (
    <TwitterShareButton
      className={classes.button}
      url={url}
      tabIndex={isFocusable ? 0 : -1}
    >
      <TwitterXIcon className={classes.icon} />
    </TwitterShareButton>
  )
});

export default function Share({
  className = '',
  isFocusable = true,
  isVertical = false
}: ShareProps) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const classes = styles(className, isVertical);

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {socials.map((social, index) => {
          const SocialButton = socialButtonsMap(
            { button: classes.button, icon: classes.icon },
            isFocusable,
            url
          )[social];

          return SocialButton ? (
            <li className={classes.item} key={index}>
              <SocialButton />
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}
