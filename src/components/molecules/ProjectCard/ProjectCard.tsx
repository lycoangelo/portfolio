import RichText from '@app/components/atoms/RichText/RichText';
import Button from '@app/components/atoms/Button/Button';
import styles from './ProjectCard.styles';
import { ProjectCardProps } from './ProjectCard.interface';
import { getMonthShortName, getYear } from '@app/lib/helpers/date';

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

  return (
    <div className={styles.project(className)}>
      <div className={styles.inner(isFlipped)}>
        <div className={styles.front}>
          <div className={styles.dateRange}>
            <time dateTime={startYear.toString()}>
              {startMonth} {startYear}
            </time>
            {isNotSameDate && <span className={styles.dateSeparator}>-</span>}
            {isNotSameDate &&
              (isPresent ? (
                <span className={styles.present}>Present</span>
              ) : (
                <time dateTime={endYear.toString()}>
                  {endMonth} {endYear}
                </time>
              ))}
          </div>
          <div className={styles.details}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.detail}>
              <span className={styles.label}>Company: </span>
              <span className={styles.value}>{company}</span>
            </p>
            <p className={styles.detail}>
              <span className={styles.label}>Role: </span>
              <span className={styles.value}>{role}</span>
            </p>
          </div>

          {description && (
            <Button
              className={styles.readMore}
              color="transparent"
              onClick={handleProjectClick}
              size="fit"
            >
              Read More
            </Button>
          )}
        </div>

        <div className={styles.back}>
          <RichText contentBody={description} />
          <Button
            className={styles.backButton}
            color="transparent"
            onClick={handleProjectClick}
            size="fit"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
