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
  __typename: string;
  name: string;
  title: string;
  listCollection: {
    items: SkillsProps[];
  };
}
