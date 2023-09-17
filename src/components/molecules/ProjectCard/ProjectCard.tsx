import Button from '@app/components/atoms/Button/Button';
import { ArrowRightIcon } from '@app/components/atoms/Icon/Icon';
import RichText from '@app/components/atoms/RichText/RichText';
import { getMonthShortName, getYear } from '@app/lib/helpers/date';
import va from '@vercel/analytics';
import { useEffect, useRef, useState } from 'react';

import { ProjectCardProps } from './ProjectCard.interface';
import styles from './ProjectCard.styles';

export default function ProjectCard({
  className = '',
  company,
  description,
  endDate,
  isFlipped,
  isPresent,
  link,
  name,
  role,
  setIsFlipped,
  startDate
}: ProjectCardProps) {
  const [hasReadMore, setHasReadMore] = useState(false);

  const backButtonRef = useRef<HTMLButtonElement>(null);
  const readMoreButtonRef = useRef<HTMLButtonElement>(null);

  const startMonth = getMonthShortName(startDate);
  const endMonth = getMonthShortName(endDate);
  const startYear = getYear(startDate);
  const endYear = getYear(endDate);

  const isNotSameDate = startYear !== endYear || startMonth !== endMonth;

  const handleProjectClick = () => {
    setIsFlipped();
    !hasReadMore && setHasReadMore(true);
  };

  const classes = styles(className, isFlipped);

  useEffect(() => {
    if (hasReadMore) {
      if (isFlipped) {
        backButtonRef.current?.focus();
      } else {
        readMoreButtonRef.current?.focus();
      }
    }
  }, [isFlipped, hasReadMore]);

  return (
    <div className={classes.project}>
      <div className={classes.inner}>
        <div className={classes.front} aria-hidden={isFlipped}>
          <div className={classes.dateRange}>
            <time dateTime={startYear.toString()}>
              {startMonth} {startYear}
            </time>
            {isNotSameDate && <span className={classes.dateSeparator}>-</span>}
            {isNotSameDate &&
              (isPresent ? (
                <span className={classes.present}>Present</span>
              ) : (
                <time dateTime={endYear.toString()}>
                  {endMonth} {endYear}
                </time>
              ))}
          </div>
          <div className={classes.details}>
            <h3 className={classes.name}>
              {link ? (
                <Button
                  className={classes.link}
                  color="transparent"
                  href={link}
                  onClick={() => va.track(`Clicked "${name}" link`)}
                  size="fit"
                  tabIndex={isFlipped ? -1 : 0}
                >
                  {name} <ArrowRightIcon className={classes.arrow} />
                </Button>
              ) : (
                name
              )}
            </h3>
            <p className={classes.detail}>
              <span className={classes.label}>Company:</span>
              <span className={classes.value}>{company}</span>
            </p>
            <p className={classes.detail}>
              <span className={classes.label}>Role:</span>
              <span className={classes.value}>{role}</span>
            </p>
          </div>
        </div>

        {description && (
          <>
            <div className={classes.back} aria-hidden={!isFlipped}>
              <button
                className={classes.toggle(!isFlipped)}
                data-custom-tabindex={isFlipped}
                onClick={handleProjectClick}
                ref={backButtonRef}
                tabIndex={isFlipped ? 0 : -1}
              >
                Back
              </button>
              <RichText
                className={classes.description}
                contentBody={description}
              />
            </div>
            <button
              aria-hidden={isFlipped}
              className={classes.toggle(isFlipped)}
              data-custom-tabindex={isFlipped}
              onClick={handleProjectClick}
              ref={readMoreButtonRef}
              tabIndex={isFlipped ? -1 : 0}
            >
              Read More
            </button>
          </>
        )}
      </div>
    </div>
  );
}
