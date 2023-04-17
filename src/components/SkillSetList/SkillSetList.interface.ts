export interface SkillProps {
  logo: {
    title: string;
    url: string;
  };
  level: string;
  name: string;
}

export interface SkillsProps {
  name: string;
  skillsCollection: {
    items: SkillProps[];
  };
}

export interface SkillSetListProps {
  listCollection: {
    items: SkillsProps[];
  };
}
