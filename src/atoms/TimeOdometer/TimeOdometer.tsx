import ReactOdometer from 'react-odometerjs';
import styles from './TimeOdometer.styles';
import { getParsePHTime, getTimeIndicator } from '@app/lib/helpers/date';
import { useEffect, useState } from 'react';
import { TimeOdometerProps } from './TimeOdometer.interface';

const animationDuration = 1500;

const TimeOdometer = ({ className }: TimeOdometerProps) => {
  const [odometerValue, setOdometerValue] = useState(getParsePHTime());
  const [timeIndicator, setTimeIndicator] = useState(getTimeIndicator());

  useEffect(() => {
    const interval = setInterval(() => {
      setOdometerValue(getParsePHTime());
      setTimeIndicator(getTimeIndicator());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <time className={styles.time(className)}>
      <ReactOdometer
        className={styles.odometer}
        duration={animationDuration}
        format="(:dd)"
        value={odometerValue}
      />
      <span className={styles.timeIndicator}>{timeIndicator}</span>
    </time>
  );
};

export default TimeOdometer;
