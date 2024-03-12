'use client';

import { TwitterXIcon } from '@app/components/atoms/Icon/Icon';
import va from '@vercel/analytics';
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

const iconSize = 20;

const socials = [
  { label: 'Email', social: 'email' },
  { label: 'Facebook', social: 'facebook' },
  { label: 'LinkedIn', social: 'linkedin' },
  { label: 'Twitter', social: 'twitter' }
];

const socialButtonsMap = (
  classes: { button: string; icon: string },
  isFocusable: boolean,
  onClick: () => void,
  url: string
): Record<string, () => JSX.Element> => {
  const props = {
    className: classes.button,
    onClick,
    tabIndex: isFocusable ? 0 : -1,
    url
  };

  return {
    email: () => (
      <EmailShareButton {...props}>
        <EmailIcon size={iconSize} />
      </EmailShareButton>
    ),
    facebook: () => (
      <FacebookShareButton {...props}>
        <FacebookIcon size={iconSize} />
      </FacebookShareButton>
    ),
    linkedin: () => (
      <LinkedinShareButton {...props}>
        <LinkedinIcon size={iconSize} />
      </LinkedinShareButton>
    ),
    twitter: () => (
      <TwitterShareButton {...props}>
        <TwitterXIcon className={classes.icon} />
      </TwitterShareButton>
    )
  };
};

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
        {socials.map(({ social, label }, index) => {
          const SocialButton = socialButtonsMap(
            { button: classes.button, icon: classes.icon },
            isFocusable,
            () => va.track(`Clicked "Share to ${label}"`),
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
