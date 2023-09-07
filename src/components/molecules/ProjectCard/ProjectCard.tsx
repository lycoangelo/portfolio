import Button from '@app/components/atoms/Button/Button';
import RichText from '@app/components/atoms/RichText/RichText';
import { getMonthShortName, getYear } from '@app/lib/helpers/date';

import { ProjectCardProps } from './ProjectCard.interface';
import styles from './ProjectCard.styles';

export default function ProjectCard({
  className = '',
  company,
  description,
  endDate,
  isFlipped,
  isPresent,
  name,
  role,
  setIsFlipped,
  startDate
}: ProjectCardProps) {
  const startMonth = getMonthShortName(startDate);
  const endMonth = getMonthShortName(endDate);
  const startYear = getYear(startDate);
  const endYear = getYear(endDate);

  const isNotSameDate = startYear !== endYear || startMonth !== endMonth;

  const handleProjectClick = () => {
    setIsFlipped();
  };

  const classes = styles(className, isFlipped);

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
            <h3 className={classes.name}>{name}</h3>
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
          <div className={classes.back} aria-hidden={!isFlipped}>
            <div className={classes.backWrapper}>
              <RichText contentBody={description} />
            </div>
          </div>
        )}
        {description && (
          <Button
            className={classes.toggle}
            color="transparent"
            data-custom-tabindex={isFlipped}
            onClick={handleProjectClick}
            size="fit"
          >
            {isFlipped ? 'Back' : 'Read More'}
          </Button>
        )}
      </div>
    </div>
  );
}
