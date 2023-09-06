import Image from 'next/image';

import { skillsLegends } from '@app/lib/constants/legends';

import { SkillSetListProps } from './SkillSetList.interface';
import styles from './SkillSetList.styles';

export default function SkillSetList({ listCollection }: SkillSetListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.legends}>
        {skillsLegends.map(({ color, level }, index) => (
          <div
            aria-label={`${color} for ${level}`}
            className={styles.color(level)}
            key={index}
          >
            {level}
          </div>
        ))}
      </div>
      <ul className={styles.skillSetList}>
        {listCollection.items.map((skillSet, skillSetIndex) => (
          <li className={styles.skillSet} key={skillSetIndex}>
            <h3 className={styles.skillSetName}>{skillSet.name}</h3>
            <ul className={styles.skills}>
              {skillSet.skillsCollection.items.map((skill, skillIndex) => (
                <li
                  className={styles.skill(skill.level.toLowerCase())}
                  key={skillIndex}
                >
                  <figure className={styles.logoWrapper}>
                    <Image
                      className={styles.logo}
                      src={skill.logo.url}
                      alt={skill.logo.title}
                      sizes="100px"
                      fill
                    />
                  </figure>
                  {skill.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
